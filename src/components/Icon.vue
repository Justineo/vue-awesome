<template>
  <svg version="1.1" class="fa-icon" :class="clazz" :role="label ? 'img' : 'presentation'" :aria-label="label" :width="width" :height="height" :view-box.camel="box" :style="style">
    <path :d="icon.d" />
  </svg>
</template>

<style>
.fa-icon {
  display: inline-block;
  fill: currentColor;
}

.fa-icon.flip-horizontal {
  transform: scale(-1, 1);
}

.fa-icon.flip-vertical {
  transform: scale(1, -1);
}

.fa-icon.spin {
  animation: fa-spin 1s 0s infinite linear;
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

<script>
import ICONS from '../assets/icons'

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: function (val) {
        return val in ICONS;
      }
    },
    scale: {
      type: Number,
      default: 1,
      coerce: function (val) {
        val = Number(val)
        return isNaN(val) ? undefined : val;
      },
      validator: function (val) {
        return Number(val) > 0
      }
    },
    spin: Boolean,
    flip: {
      validator: function (val) {
        return val === 'horizontal' || val === 'vertical'
      }
    },
    label: String
  },
  computed: {
    clazz: function () {
      return {
        spin: this.spin,
        'flip-horizontal': this.flip === 'horizontal',
        'flip-vertical': this.flip === 'vertical'
      }
    },
    icon: function () {
      return ICONS[this.name]
    },
    box: function () {
      return `0 0 ${this.icon.width} ${this.icon.height}`
    },
    width: function () {
      return this.icon.width / 112 * this.scale
    },
    height: function () {
      return this.icon.height / 112  * this.scale
    },
    style: function () {
      if (this.scale === 1) {
        return false
      }
      return {
        fontSize: this.scale + 'em'
      }
    }
  }
}
</script>
