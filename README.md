# Vue-Awesome

> Font Awesome component for Vue.js, using inline SVG.

Vue-Awesome is built upon [Font Awesome](https://github.com/FortAwesome/Font-Awesome) `v4.5.0` and depends on [Vue.js](https://vuejs.org/) `v1.0.17`+.

## Installation

### manual

Just download `dist/vue-awesome.js` and include it in your HTML file:

```html
<script src="path/to/vue-awesome/dist/vue-awesome.js"></script>
```

### npm 

```bash
$ npm install vue-awesome
```

### bower

```bash
$ bower install vue-awesome
```

## Usage

```html
<!-- basic -->
<icon name="repo"></icon>

<!-- with options -->
<icon name="sync" scale="2" spin></icon>
<icon name="comment" flip="horizontal"></icon>
<icon name="repo-forked" label="Forked Repository"></icon>
```

### CommonJS

```js
var Vue = require('path/to/vue')

// requiring the UMD module
var Icon = require('path/to/vue-awesome/dist/vue-awesome')

// or with vue-loader you can require the src directly
var Icon = require('path/to/vue-awesome/src/components/Icon.vue')

// register component to use
```

### AMD

```js
require.config({
  paths: {
    'vue-awesome': 'path/to/vue-conticon/dist/vue-awesome'
  }
})

require(['vue-awesome'], function (Icon) {
  // register component to use...
})
```

### Global variable

The component class is exposed as `window.VueAwesome`.

## Local development

```bash
$ npm i
$ npm run dev
```

Open `http://localhost:8080/demo` to see the demo.

## Related Project

* [Vue-Octicon](https://github.com/Justineo/vue-octicon) by the same author of Vue-Awesome.
* SVG files are generated using fa2svg by [@riobard](https://github.com/riobard).
