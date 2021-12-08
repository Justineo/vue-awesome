# Vue-Awesome

> 基于 Vue.js 的强大 SVG 图标组件。已内置 Font Awesome 图标。

Vue-Awesome 是基于 [Vue.js](https://vuejs.org/) 的 SVG 图标组件，内置图标来自 [Font Awesome](https://fontawesome.com/)。

查看[此处](https://justineo.github.io/vue-awesome/demo/)的 demo 一睹为快。

## 安装

### npm（推荐方式）

```bash
$ npm install vue-awesome
```

### bower

```bash
$ bower install vue-awesome
```

### 手动安装

直接下载 `dist/vue-awesome.js` 并在 HTML 文件中引入：

```html
<script src="path/to/vue-awesome/dist/vue-awesome.js"></script>
```

## 使用方法

```html
<!-- 基础用法 -->
<v-icon name="beer"/>

<!-- 添加选项 -->
<v-icon name="sync" scale="2" spin/>
<v-icon name="comment" flip="horizontal"/>
<v-icon name="code-branch" label="Forked Repository"/>

<!-- 堆叠图标 -->
<v-icon label="No Photos">
  <v-icon name="camera"/>
  <v-icon name="ban" scale="2" class="alert"/>
</v-icon>
```

Font Awesome 5 开始把所有图标分成了多个包。Vue-Awesome 的图标都来自其中的免费图标，而免费图标分别来自 3 个不同的图标包：`regular`、`solid` 和 `brands`。因为 `solid` 下的免费图标数量最多，所以我们选择按如下方式来组织图标：

* 所有来自 `solid` 包的图标位于 `vue-awesome/icons` 目录下，且 `name` prop 的值不带前缀。

* 来自 `regular` 和 `brands` 的图标位于 `vue-awesome/icons/regular` 和 `vue-awesome/icons/brands` 目录下，且 `name` prop 的值需要添加前缀，例如 `regular/flag` 或者 `brands/reddit`。

请访问 [Font Awesome 官网](https://fontawesome.com/)以查询可以使用的 `name` 值，如 `beer`、`file`、`camera` 等。

### 用 npm 与 vue-loader 基于 ES Module 引入（推荐用法）

```js
import Vue from 'vue'

/* 在下面两种方式中任选一种 */

// 仅引入用到的图标以减小打包体积
import 'vue-awesome/icons/flag'

// 或者在不关心打包体积时一次引入全部图标
import 'vue-awesome/icons'

/* 任选一种注册组件的方式 */

import Icon from 'vue-awesome/components/Icon'

// 全局注册（在 `main .js` 文件中）
Vue.component('v-icon', Icon)

// 或局部注册（在组件文件中）
export default {
  components: {
    'v-icon': Icon
  }
}
```

#### ⚠️ 注意事项

##### 引入源码版本

如果你正在使用官方的 Vue CLI 来创建项目并且希望使用未经转译的组件（引入 `vue-awesome/components/Icon` 而非直接引入 `vue-awesome`）来减小打包尺寸（是推荐用法），会遇到默认配置把 `node_modules` 中的文件排除在 Babel 转译范围以外的问题。

当使用 **Vue CLI 3+** 时，需要在 `vue.config.js` 中的 `transpileDependencies` 增加 `vue-awesome`，如下：

```js
// vue.config.js
module.exports = {
  transpileDependencies: [
    /\bvue-awesome\b/
  ]
}
```

当使用 **Vue CLI 2** 的 `webpack` 模板时，需要按下述的方式修改 `build/webpack.base.conf.js`：

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

如果你正直接配置使用 webpack，那么也请做类似的修改使其能够正常工作。

#### 在 Nuxt.js 中使用

在 Nuxt.js 的服务端中使用 Vue-Awesome 时，可能会报 `Unexpected token import` 的错误。这是因为 Nuxt.js 默认配置了 `externals` 选项，会使得 `node_modules` 目录下的绝大多数文件被排除在服务端打包代码以外。需要按如下方式将 `vue-awesome` 在 `nuxt.config.js` 中加入白名单：

对于 **Nuxt.js 2** 项目:

```js

module.exports = {
  // ...
  build: {
    transpile: [/^vue-awesome/]
  }
}
```

对于 **Nuxt.js 1** 项目:

```js
// 别忘了运行
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
            // `whitelist` 选项的默认值是
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    }
  }
}
```

##### 使用 Jest 进行单元测试

请确保已将 `vue-awesome` 从 `transformIgnorePattern` 中排除。在 `test/unit/jest.conf.js` 中加入如下配置：

```diff
+ transformIgnorePatterns: [
+   '/node_modules(?![\\\\/]vue-awesome[\\\\/])/'
+ ],
```

*如果不想让单元测试变得很慢，那么请不要引入所有图标。因为每个图标都会从 ES module 格式进行转译，从而使整个测试过程变得非常缓慢。*

### 在没有 ES Next 支持环境下用 npm 以 CommonJS 方式引入

```js
var Vue = require('vue')

// 引入 UMD 模块
var Icon = require('vue-awesome')

// 或者在使用 vue-loader 时可以直接引入源码版本
var Icon = require('vue-awesome/components/Icon')

// 注册组件后即可使用
Vue.component('icon', Icon)
```

### AMD

```js
require.config({
  paths: {
    'vue-awesome': 'path/to/vue-awesome'
  }
})

require(['vue-awesome'], function (Icon) {
  // 注册组件后即可使用
  Vue.component('v-icon', Icon)
})
```

### 全局变量

组件将通过 `window.VueAwesome` 变量暴露接口：

```js
// 注册组件后即可使用
Vue.component('v-icon', VueAwesome)
```

### Props

* `name: string`

  图标名称。如果本组件没有用作图标堆栈的容器，那么这个字段是必须的。所有合法的值都对应于图标文件相对于 `icons` 目录的路径。请注意当你在 FontAwesome 官网查找到图标名词后，需要确认一下图标集的名称。比如，在 [`500px` 这个图标的详情页](https://fontawesome.com/icons/500px?style=brands)会有一个 URL 参数 `style=brands`，故图标名称就是 `brands/500px`。

  默认情况下，只能使用 FontAwesome 的免费图标，另外由于 `solid` 样式中的图标最多，我们将其设为了默认图标集，所以路径前缀可以省略。

  当传入 `null` 时，整个组件将不会渲染。

* `scale: number|string`

  用来调整图标尺寸，默认值为 `1`。

* `spin: boolean`

  用来指定图标是否需要旋转。默认值为 `false`。（不能与 `pulse` 一同使用。）

* `pulse: boolean`

  用来指定图标是否有脉冲旋转的效果。默认值为 `false`。（不能与 `spin` 一同使用。）

* `inverse: boolean`

  为 `true` 时图标颜色将被设置为 `#fff`。默认值为 `false`。

* `flip: 'vertical'|'horizontal'|'both'`

  用来指定图标是否需要翻转。

* `label: string`

  当指定时会设置图标的 `aria-label`。

* `title: string`

  为图标设置标题。

>  当 `label` 与 `title` 均不存在时，图标将会包含 `role="presentation"` 声明，无法从辅助设备访问。

### 其它

如果你正在使用 `vue-awesome/components/Icon`（而非整体打包的版本），Vue-Awesome 默认是不会引入任何图标的。别忘了自行引入你想使用的图标。

如果这些信息仍然无法帮助你解决问题，且[之前的 issue](https://github.com/Justineo/vue-awesome/issues?utf8=%E2%9C%93&q=is%3Aissue) 中也没有合适的解决方案，请尽管[创建新 issue](https://github.com/Justineo/vue-awesome/issues/new)。

## 设定样式

### 动态尺寸

可以添加以下 CSS 代码来让图标根据当前的 `font-size` 动态调整尺寸：

```css
.fa-icon {
  width: auto;
  height: 1em; /* 或任意其它字体大小相对值 */

  /* 要在 Safari 中正常工作，需要再引入如下两行代码 */
  max-width: 100%;
  max-height: 100%;
}
```

### 颜色

默认情况下，图标颜色继承自父元素的文字颜色。可以通过指定 `color` 属性来方便地进行修改。

## 本地开发

```bash
$ npm i
$ npm run dev
```

打开 `http://localhost:8080/demo` 来查看 demo。

### 更新图标

请勿修改 `src/icons` 中的文件，而应在更新 `assets/svg/*` 后运行 `npm run icons` 来重新生成图标模块文件。

## 注册自定义图标

### 简单场景

可以用如下方式注册自定义图标：

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

### 复杂一些的场景

如果你的 SVG 文件有多个路径或多边形，以及/或者你想预定义一些样式，可以用如下方式进行注册：

#### 路径

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

#### 多边形

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

#### 原始 SVG

**当你使用的 Vue.js 版本低于 `2.6.0` 时，在使用此功能前，需要引入 [innersvg-polyfill](https://www.npmjs.com/package/svg-innerhtml)。**

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
