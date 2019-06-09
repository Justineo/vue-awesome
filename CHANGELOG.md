3.5.4
* Update to `@fortawesome/fontawesome-free@5.9.0`.

3.5.3
* Fix spelling of `aria-labelledby`.
* Update to `@fortawesome/fontawesome-free@5.8.2`.

3.5.2
* Fix stacked icons layout after content is updated.

3.5.1
* Fix `role` generation.

3.5.0
* Add `title` prop support.
* Update to `@fortawesome/fontawesome-free@5.8.0`.

3.4.0
* Update to `@fortawesome/fontawesome-free@5.7.2`.

3.3.1
* Fix npm package.

3.3.0
* Fix unexpected focus for IE.
* Updated to `@fortawesome/fontawesome-free@5.6.3`.

3.2.0
* Updated `fa2svg` to `1.2.0`.

3.1.3
* Supported not rendering anything when explicitly set `name` to `null`.

3.1.2
* Fix missing width and height.

3.1.1
* Get rid of unnecessary `<g>` wrapper for `raw` mode.

3.1.0
* Switch to `@fortawesome/fontawesome-free@5.2.0`.

3.0.5
* Fix build.

3.0.4
* Add `name` option to root classes.

3.0.3
* Update `rollup-plugin-vue` to `4.2.0`.

3.0.2
* Fix package publish.

3.0.1
* Update `@fortawesome/fontawesome-free-webfonts` to `1.0.9`.

3.0.0
* Updated all icons to Font Awesome 5, see [README](./README.md) for updated usages.

2.3.5
* Fix `id` replacement.

2.3.4
* `id`s are now unique under `raw` mode.

2.3.2
* Replaced publish npm scripts with shell commands to prevent failure upon npm install.
* Added `pulse` prop.

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
