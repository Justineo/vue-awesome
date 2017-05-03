const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')

export default {
  entry: 'src/index.js',
  external: [
    'vue'
  ],
  globals: {
    vue: 'Vue'
  },
  format: 'umd',
  moduleName: 'VueAwesome',
  dest: 'dist/vue-awesome.js',
  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
    buble(),
    uglify()
  ]
}