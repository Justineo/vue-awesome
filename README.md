# Vue-Awesome

> Font Awesome component for Vue.js, using inline SVG.

Vue-Awesome is built upon [Font Awesome](https://github.com/FortAwesome/Font-Awesome) `v4.5.0` and depends on [Vue.js](https://vuejs.org/) `v2.0.1`+.

Check out the demo [here](https://justineo.github.io/vue-awesome/demo/).

## Installation

### NPM (Recommended)

```bash
$ npm install vue-awesome
```

### bower

```bash
$ bower install vue-awesome
```

### manual

Just download `dist/vue-awesome.js` and include it in your HTML file:

```html
<script src="path/to/vue-awesome/dist/vue-awesome.js"></script>
```

## Usage

```html
<!-- basic -->
<icon name="beer"></icon>

<!-- with options -->
<icon name="refresh" scale="2" spin></icon>
<icon name="comment" flip="horizontal"></icon>
<icon name="code-fork" label="Forked Repository"></icon>

<!-- stacked icons -->
<icon label="No Photos">
  <icon name="camera"></icon>
  <icon name="ban" scale="2" class="alert"></icon>
</icon>
```

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
Vue.component('icon', Icon)

// or locally (in your component file)
export default {
  components: {
    Icon
  }
}
```

### CommonJS with NPM without ES Next support

```js
var Vue = require('vue')

// requiring the UMD module
var Icon = require('vue-awesome')

// or with vue-loader you can require the src directly
var Icon = require('vue-awesome/components/Icon.vue')

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
  // register component to use...
})
```

### Global variable

The component class is exposed as `window.VueAwesome`.

## Styling

### Dynamic sizing

You can make the icons scale dynamically according to your `font-size` by adding the following CSS:

```css
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */
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

Don't touch files in `src/icons` but update `assets/icons.json` instead and run `npm run icons` to re-generate icon module files.

## Registering custom icons

### Simple case

You can register custom icons like this:

```js
// ES Modules with vue-loader
import Icon from 'vue-awesome/components/Icon.vue'

Icon.register({
  baidu: {
    width: 23.868,
    height: 26,
    d: 'M3.613 13.701c2.827-.608 2.442-3.986 2.357-4.725-.138-1.139-1.477-3.128-3.296-2.971C.386 6.21.052 9.515.052 9.515c-.309 1.528.74 4.793 3.561 4.186zm3.002 5.875c-.083.238-.268.846-.107 1.375.315 1.187 1.346 1.24 1.346 1.24h1.48v-3.619H7.749c-.713.213-1.057.767-1.134 1.004zM8.86 8.035c1.562 0 2.823-1.797 2.823-4.019C11.683 1.796 10.421 0 8.86 0 7.301 0 6.036 1.796 6.036 4.016c0 2.222 1.265 4.019 2.824 4.019zm6.724.265c2.087.271 3.429-1.956 3.695-3.644.272-1.686-1.074-3.644-2.552-3.98-1.48-.339-3.329 2.032-3.497 3.578-.2 1.89.271 3.778 2.354 4.046zm5.114 9.923s-3.229-2.498-5.113-5.198c-2.555-3.981-6.185-2.361-7.399-.337-1.209 2.024-3.093 3.305-3.36 3.644-.271.334-3.9 2.293-3.095 5.871.806 3.576 3.635 3.508 3.635 3.508s2.085.205 4.504-.336c2.42-.537 4.503.134 4.503.134s5.652 1.893 7.199-1.751c1.545-3.645-.874-5.535-.874-5.535zm-9.671 5.423H7.352c-1.587-.316-2.219-1.4-2.299-1.584-.078-.188-.528-1.059-.29-2.539.686-2.219 2.642-2.379 2.642-2.379h1.956V14.74l1.666.025v8.881zm6.844-.025h-4.229c-1.639-.423-1.716-1.587-1.716-1.587v-4.677l1.716-.027v4.203c.104.447.661.529.661.529h1.742v-4.705h1.825v6.264zm5.986-12.486c0-.808-.671-3.239-3.159-3.239-2.492 0-2.825 2.295-2.825 3.917 0 1.548.131 3.71 3.227 3.641 3.096-.068 2.757-3.507 2.757-4.319z'
  }
})
```

### More advanced cases

If your svg has more than one path or polygon, and/or you want to have a predefined style, you can register like this:

#### Paths

```js
// ES Modules with vue-loader
import Icon from 'vue-awesome/components/Icon.vue'

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
// ES Modules with vue-loader
import Icon from 'vue-awesome/components/Icon.vue'

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

```js
// ES Modules with vue-loader
import Icon from 'vue-awesome/components/Icon.vue'

Icon.register({
  'html5-c': {
    width: 512,
    height: 512,
    raw: '<path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/><path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/><path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/><path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>'
  }
})
```

#### Heads up for older versions

If you are using Vue-Awesome version before `2.2.5`, please make sure you are following these instructions below:

If you are using `vue-cli` to create your project and you want to use the untranspiled component (import `vue-awesome/components/Icon` rather than import `vue-awesome` directly, to optimize bundle size), the `webpack` template may exclude `node_modules` from files to be transpiled by Babel (see [#7](https://github.com/Justineo/vue-awesome/issues/7), [#13](https://github.com/Justineo/vue-awesome/issues/13)). To fix this problem, try change `build/webpack.base.conf.js` like this:

For Webpack1:

```diff
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
-          path.join(projectRoot, 'src')
+          path.join(projectRoot, 'src'),
+          path.join(projectRoot, 'node_modules/vue-awesome')
        ],
-        exclude: /node_modules/
+        exclude: /node_modules(?![\\/]vue-awesome[\\/])/
      },
```

For Webpack2:

```diff
      {
        test: /\.js$/,
        loader: 'babel-loader',
-       include: [resolve('src'), resolve('test')]
+       include: [resolve('src'), resolve('test'), resolve('node_modules/vue-awesome')]
      }
```

Further more, do not forget to import icons you want to use if you are using `vue-awesome/components/Icon`.

If you tried this and cannot find similar situation in [earlier issues](https://github.com/Justineo/vue-awesome/issues?utf8=%E2%9C%93&q=is%3Aissue) but still cannot make it work, please feel free to [file a new issue](https://github.com/Justineo/vue-awesome/issues/new).

## Related projects

* [Vue-Octicon](https://github.com/Justineo/vue-octicon) by the same author of Vue-Awesome.
* SVG files are generated using [fa2svg](https://github.com/riobard/font-awesome-svg) by [@riobard](https://github.com/riobard).
