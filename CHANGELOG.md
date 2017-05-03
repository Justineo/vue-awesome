2.3.1
* Fixed the problem that styles are missing for precompiled version ([#35](https://github.com/Justineo/vue-awesome/issues/35)).

2.3.0
* Added new ways to register icon.
* Clearify custom icon registration in documentation.

2.2.8
* Swith build tool to rollup.
* Provide `module` in `package.json`.

2.2.7
* Hot fix for last version. Use `console.warn` temporarily.

2.2.6
* Mark Vue as an external dependency in webpack config.

2.2.5
* Use `Vue.util.warn` directly.
* Added warning for referring to unregistered icons.

2.2.4
* Remove unused icon files.

2.2.3
* Fix the issue caused by webpack 2.2 with `babel-plugin-add-module-export`.

2.2.2
* Switch to webpack 2 and fix compiled version.

2.2.1
* Move animation to `<svg>` to make them work in IE10+.

2.2.0
* Added support for registering multiple paths with different styles (eg. multi-colored icons).

2.1.0
* Added support for stacked icons.

2.0.3
* Added Font-Awesome -> SVG -> JSON build process integration.
* Update Font-Awesome to `4.7.0`.

2.0.2
* Updated readme and build.

2.0.1
* Removed project configs for distribution to prevent problems with existing project templates.

2.0.0
* Switch to Vue.js dependency to `2.0`.
* Added support for users to specify used icons to reduce bundle size.
* Bump major version to 2.

0.3.0
* Supported registering custom icons.

0.2.2
* Fixed the problem that `dist` is not updated after last version.

0.2.1
* `scale` now works well with CSS `em` sizes.

0.2.0
* Added `aria-label="false"` for icons without `label` prop.

0.1.0
* First version.
