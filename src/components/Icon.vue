<script>
let icons = {}

export default {
  name: 'fa-icon',
  props: {
    name: {
      type: String,
      validator (val) {
        if (val && !(val in icons)) {
          console.warn(
            `Invalid prop: prop "name" is referring to an unregistered icon "${val}".` +
              `\nPlease make sure you have imported this icon before using it.`
          )
          return false
        }
        return true
      }
    },
    title: String,
    scale: [Number, String],
    spin: Boolean,
    inverse: Boolean,
    pulse: Boolean,
    flip: {
      validator (val) {
        return val === 'horizontal' || val === 'vertical'
      }
    },
    label: String,
    tabindex: [Number, String]
  },
  data () {
    return {
      id: getId(),
      x: false,
      y: false,
      childrenWidth: 0,
      childrenHeight: 0,
      outerScale: 1
    }
  },
  computed: {
    normalizedScale () {
      let scale = this.scale
      scale = typeof scale === 'undefined' ? 1 : Number(scale)
      if (isNaN(scale) || scale <= 0) {
        console.warn(
          `Invalid prop: prop "scale" should be a number over 0.`,
          this
        )
        return this.outerScale
      }
      return scale * this.outerScale
    },
    klass () {
      return {
        'fa-icon': true,
        'fa-spin': this.spin,
        'fa-flip-horizontal': this.flip === 'horizontal',
        'fa-flip-vertical': this.flip === 'vertical',
        'fa-inverse': this.inverse,
        'fa-pulse': this.pulse,
        [this.$options.name]: true
      }
    },
    icon () {
      if (this.name) {
        return icons[this.name]
      }
      return null
    },
    box () {
      if (this.icon) {
        return `0 0 ${this.icon.width} ${this.icon.height}`
      }
      return `0 0 ${this.width} ${this.height}`
    },
    ratio () {
      if (!this.icon) {
        return 1
      }
      let { width, height } = this.icon
      return Math.max(width, height) / 16
    },
    width () {
      return (
        this.childrenWidth ||
        (this.icon && (this.icon.width / this.ratio) * this.normalizedScale) ||
        0
      )
    },
    height () {
      return (
        this.childrenHeight ||
        (this.icon && (this.icon.height / this.ratio) * this.normalizedScale) ||
        0
      )
    },
    style () {
      if (this.normalizedScale === 1) {
        return false
      }
      return {
        fontSize: this.normalizedScale + 'em'
      }
    },
    raw () {
      // generate unique id for each icon's SVG element with ID
      if (!this.icon || !this.icon.raw) {
        return null
      }
      let raw = this.icon.raw
      let ids = {}
      raw = raw.replace(
        /\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,
        (match, quote, id) => {
          let uniqueId = getId()
          ids[id] = uniqueId
          return ` id="${uniqueId}"`
        }
      )
      raw = raw.replace(
        /#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,
        (match, rawId, _, pointerId) => {
          let id = rawId || pointerId
          if (!id || !ids[id]) {
            return match
          }

          return `#${ids[id]}`
        }
      )

      return raw
    },
    focusable () {
      let { tabindex } = this
      if (tabindex == null) {
        return 'false'
      }
      let index =
        typeof tabindex === 'string' ? parseInt(tabindex, 10) : tabindex
      if (index >= 0) {
        return null
      }
      return 'false'
    }
  },
  mounted () {
    this.updateStack()
  },
  updated () {
    this.updateStack()
  },
  methods: {
    updateStack () {
      if (!this.name && this.name !== null && this.$children.length === 0) {
        console.warn(`Invalid prop: prop "name" is required.`)
        return
      }

      if (this.icon) {
        return
      }

      let width = 0
      let height = 0
      this.$children.forEach(child => {
        child.outerScale = this.normalizedScale

        width = Math.max(width, child.width)
        height = Math.max(height, child.height)
      })
      this.childrenWidth = width
      this.childrenHeight = height
      this.$children.forEach(child => {
        child.x = (width - child.width) / 2
        child.y = (height - child.height) / 2
      })
    }
  },
  render (h) {
    if (this.name === null) {
      return h()
    }

    let options = {
      class: this.klass,
      style: this.style,
      attrs: {
        role: this.$attrs.role || (this.label || this.title ? 'img' : null),
        'aria-label': this.label || null,
        'aria-hidden': String(!(this.label || this.title)),
        tabindex: this.tabindex,
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
        viewBox: this.box,
        focusable: this.focusable
      }
    }

    let titleId = `vat-${this.id}`
    if (this.title) {
      options.attrs['aria-labelledby'] = titleId
    }

    if (this.raw) {
      let html = this.raw

      if (this.title) {
        html = `<title id="${titleId}">${escapeHTML(this.title)}</title>${html}`
      }

      options.domProps = {
        innerHTML: html
      }
    }

    let content = this.title
      ? [h('title', { attrs: { id: titleId } }, this.title)]
      : []

    return h(
      'svg',
      options,
      this.raw
        ? null
        : content.concat(
          this.$slots.default || [
            ...this.icon.paths.map((path, i) =>
              h('path', {
                attrs: path,
                key: `path-${i}`
              })
            ),
            ...this.icon.polygons.map((polygon, i) =>
              h('polygon', {
                attrs: polygon,
                key: `polygon-${i}`
              })
            )
          ]
        )
    )
  },
  register (data) {
    for (let name in data) {
      let icon = data[name]
      let { paths = [], d, polygons = [], points } = icon

      if (d) {
        paths.push({ d })
      }

      if (points) {
        polygons.push({ points })
      }

      icons[name] = assign({}, icon, {
        paths,
        polygons
      })
    }
  },
  icons
}

function assign (obj, ...sources) {
  sources.forEach(source => {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        obj[key] = source[key]
      }
    }
  })

  return obj
}

let cursor = 0xd4937
function getId () {
  return `va-${(cursor++).toString(16)}`
}

const ESCAPE_MAP = {
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '&': '&amp;'
}

function escapeHTML (html) {
  return html.replace(/[<>"&]/g, c => ESCAPE_MAP[c] || c)
}
</script>

<style>
.fa-icon {
  display: inline-block;
  fill: currentColor;
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-spin {
  animation: fa-spin 1s 0s infinite linear;
}

.fa-inverse {
  color: #fff;
}

.fa-pulse {
  animation: fa-spin 1s infinite steps(8);
}

@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
