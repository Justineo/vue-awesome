# Vue-Awesome

> Awesome SVG icon component for Vue.js, with built-in Font Awesome icons.

> [🇨🇳 中文版](./README.zh_CN.md)

Vue-Awesome an SVG icon component for [Vue.js](https://vuejs.org/), with built-in icons courtesy of [Font Awesome](https://fontawesome.com/).

Check out the demo [here](https://justineo.github.io/vue-awesome/demo/).

## Installation

### npm (Recommended)

```bash
$ npm install vue-awesome
```

### bower

```bash
$ bower install vue-awesome
```

### Manual

Just download `dist/vue-awesome.js` and include it in your HTML file:

```html
<script src="path/to/vue-awesome/dist/vue-awesome.js"></script>
```

## Usage

```html
<!-- basic -->
<v-icon name="beer"/>

<!-- with options -->
<v-icon name="sync" scale="2" spin/>
<v-icon name="comment" flip="horizontal"/>
<v-icon name="code-branch" label="Forked Repository"/>

<!-- stacked icons -->
<v-icon label="No Photos">
  <v-icon name="camera"/>
  <v-icon name="ban" scale="2" class="alert"/>
</v-icon>
```

Font Awesome 5 has separated all icons into several packs. Vue-Awesome is built upon its all free icons, which includes all free icons from 3 icon packs: `regular`, `solid` and `brands`. Since the `solid` pack has the most number of icons, we organize all Vue-Awesome icons as follows:

* All icons from `solid` pack are located in `vue-awesome/icons` directory and have unprefixed `name` prop values.

* Icons from `regular` and `brands` are located in `vue-awesome/icons/regular` and `vue-awesome/icons/brands`, which have prefixed `name` prop values like `regular/flag` or `brands/reddit`.

You can find all available `name` values from [Font Awesome's website](https://fontawesome.com/icons) like `beer`, `file` and `camera`.

### ES Modules with NPM & vue-loader (Recommended)

```js
import Vue from 'vue'

/* Pick one way between the 2 following ways */

// only import the icons you use to reduce bundle size
import 'vue-awesome/icons/flag'

// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('v-icon', Icon)

// or locally (in your component file)
export default {
  components: {
    'v-icon': Icon
  }
}
```

#### ⚠️ Heads up

##### Importing the souce version

If you are using official Vue CLI to create your project and you want to use the untranspiled component (import `vue-awesome/components/Icon` rather than import `vue-awesome` directly, to optimize bundle size, which is recommended), you'll encounter the problem that the default configuration will exclude `node_modules` from files to be transpiled by Babel.

For **Vue CLI 3+**, add `vue-awesome` into `transpileDependencies` in `vue.config.js` like this:

```js
// vue.config.js
module.exports = {
  transpileDependencies: [
    /\bvue-awesome\b/
  ]
}
```

For **Vue CLI 2** with the `webpack` template, modify `build/webpack.base.conf.js` like this:

```diff
      {
        test: /\.js$/,
        loader: 'babel-loader',
-       include: [resolve('src'), resolve('test')]
+       include: [
+         resolve('src'),
+         resolve('test'),
+         resolve('node_modules/vue-awesome')
+       ]
      }
```

If you are using bare webpack config, just do similar modifications make it work.

#### Using with Nuxt.js

When using Vue-Awesome on the server side with Nuxt.js, it may prompt `Unexpected token import` because Nuxt.js has configured an `external` option by default, which prevent files under `node_modules` from being bundled into the server bundle with only a few exceptions. We need to whitelist `vue-awesome` in `nuxt.config.js` as follows:

For **Nuxt.js 2**:

```js

module.exports = {
  // ...
  build: {
    transpile: [/^vue-awesome/]
  }
}
```

For **Nuxt.js 1**:

```js
// Don't forget to
// npm i --save-dev webpack-node-externals
const nodeExternals = require('webpack-node-externals')

module.exports = {
  // ...
  build: {
    extend (config, { isServer }) {
      // ...
      if (isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    }
  }
}
```

##### Unit Testing with Jest

Make sure to whitelist `vue-awesome` from the `transformIgnorePattern`. Add following configuation in `test/unit/jest.conf.js`:

```diff
+ transformIgnorePatterns: [
+   '/node_modules(?![\\\\/]vue-awesome[\\\\/])/'
+ ],
```

*Don't import all icons if you don't want to make unit testing slow because this will transform all icons from ES module and thus slow down the test process.*

### CommonJS with NPM without ES Next support

```js
var Vue = require('vue')

// requiring the UMD module
var Icon = require('vue-awesome')

// or with vue-loader you can require the src directly
var Icon = require('vue-awesome/components/Icon')

// register component to use
```

### AMD

```js
require.config({
  paths: {
    'vue-awesome': 'path/to/vue-awesome'
  }
})

require(['vue-awesome'], function (Icon) {
  // register component to use
  Vue.component('v-icon', Icon)
})
```

### Global variable

The component class is exposed as `window.VueAwesome`.

```js
// register component to use
Vue.component('v-icon', VueAwesome)
```

### Props

* `name: string`

  The name of the icon. It's necessary if the component isn't used as the wrapper of an icon stack. All valid names correspond to the file path relative to the `icons` directory. Notice that you may have to check the name of the icon pack after you search on FontAwesome's website. For example, you'll see a URL argument of `style=brands` on the [detail page for `500px`](https://fontawesome.com/icons/500px?style=brands) and the icon name will be `brands/500px`.

  Only free icons for FontAwesome are available by default and because the `solid` style has the most icons, we've made it the default pack so the path prefixes can be omitted.

  If you pass `null` to this prop, the whole component will not be rendered.

* `scale: number|string`

  Used to adjust the size of the icon. Default to `1`.

* `spin: boolean`

  Used to specify whether the icon is spining. Default to `false`. (Can't use together with `pulse`.)

* `pulse: boolean`

  Set the pulse effect to the icon. Default to `false`. (Can't use together with `spin`.)

* `inverse: boolean`

  If set to `true`, the color of the icon will become `#fff`. Default to `false`.

* `flip: 'vertical'|'horizontal'|'both'`

  Used to flip the icon.

* `label: string`

  Set the `aria-label` for the icon if provided.

* `title: string`

  Set the title for the icon.

>  The icon will have `role="presentation"` thus not accessible when neither `label` nor `title` exists.

### Misc

If you are using `vue-awesome/components/Icon` (instead of the whole bundled version), Vue-Awesome won't import a single icon by default. Do not forget to import icons you want to use.

If these caveats don't help and there are no proper workarounds in [earlier issues](https://github.com/Justineo/vue-awesome/issues?utf8=%E2%9C%93&q=is%3Aissue), please feel free to [file a new one](https://github.com/Justineo/vue-awesome/issues/new).

## Styling

### Dynamic sizing

You can make the icons scale dynamically according to your `font-size` by adding the following CSS:

```css
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}
```

### Colors

The icon color is inherited from the font color of the parent element by default. You can easily change it to any other color by specifying the `color` property.

## Local development

```bash
$ npm i
$ npm run dev
```

Open `http://localhost:8080/demo` to see the demo.

### Updating icons

Don't touch files in `src/icons` but update `assets/svg/*` instead and run `npm run icons` to re-generate icon module files.

## Registering custom icons

### Simple case

You can register custom icons like this:

```js
import Icon from 'vue-awesome/components/Icon'

Icon.register({
  baidu: {
    width: 23.868,
    height: 26,
    d: 'M3.613 13.701c2.827-.608 2.442-3.986 2.357-4.725-.138-1.139-1.477-3.128-3.296-2.971C.386 6.21.052 9.515.052 9.515c-.309 1.528.74 4.793 3.561 4.186zm3.002 5.875c-.083.238-.268.846-.107 1.375.315 1.187 1.346 1.24 1.346 1.24h1.48v-3.619H7.749c-.713.213-1.057.767-1.134 1.004zM8.86 8.035c1.562 0 2.823-1.797 2.823-4.019C11.683 1.796 10.421 0 8.86 0 7.301 0 6.036 1.796 6.036 4.016c0 2.222 1.265 4.019 2.824 4.019zm6.724.265c2.087.271 3.429-1.956 3.695-3.644.272-1.686-1.074-3.644-2.552-3.98-1.48-.339-3.329 2.032-3.497 3.578-.2 1.89.271 3.778 2.354 4.046zm5.114 9.923s-3.229-2.498-5.113-5.198c-2.555-3.981-6.185-2.361-7.399-.337-1.209 2.024-3.093 3.305-3.36 3.644-.271.334-3.9 2.293-3.095 5.871.806 3.576 3.635 3.508 3.635 3.508s2.085.205 4.504-.336c2.42-.537 4.503.134 4.503.134s5.652 1.893 7.199-1.751c1.545-3.645-.874-5.535-.874-5.535zm-9.671 5.423H7.352c-1.587-.316-2.219-1.4-2.299-1.584-.078-.188-.528-1.059-.29-2.539.686-2.219 2.642-2.379 2.642-2.379h1.956V14.74l1.666.025v8.881zm6.844-.025h-4.229c-1.639-.423-1.716-1.587-1.716-1.587v-4.677l1.716-.027v4.203c.104.447.661.529.661.529h1.742v-4.705h1.825v6.264zm5.986-12.486c0-.808-.671-3.239-3.159-3.239-2.492 0-2.825 2.295-2.825 3.917 0 1.548.131 3.71 3.227 3.641 3.096-.068 2.757-3.507 2.757-4.319z'
  }
})
```

### More advanced cases

If your SVG file has more than one path or polygon, and/or you want to have a predefined style, you can register like this:

#### Paths

```js
import Icon from 'vue-awesome/components/Icon'

Icon.register({
  webpack: {
    width: 1200,
    height: 1200,
    paths: [
      {
        style: 'fill:#8ED6FB',
        d: 'M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z'
      },
      {
        style: 'fill:#1C78C0',
        d: 'M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z'
      }
    ]
  }
})
```

#### Polygons

```js
import Icon from 'vue-awesome/components/Icon'

Icon.register({
  vue: {
    width: 256,
    height: 221,
    polygons: [
      {
        style: 'fill:#41B883',
        points: '0,0 128,220.8 256,0 204.8,0 128,132.48 50.56,0 0,0'
      },
      {
        style: 'fill:#35495E',
        points: '50.56,0 128,133.12 204.8,0 157.44,0 128,51.2 97.92,0 50.56,0'
      }
    ]
  }
})
```

#### Raw SVG

**If you are using Vue.js version prior to `2.6.0`, you need to include [innersvg-polyfill](https://www.npmjs.com/package/svg-innerhtml) before you use this feature.**

```js
import Icon from 'vue-awesome/components/Icon'

Icon.register({
  'html5-c': {
    width: 512,
    height: 512,
    raw: '<path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/><path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/><path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/><path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>'
  }
})
```
