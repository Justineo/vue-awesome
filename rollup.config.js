const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')

export default {
  input: 'src/index.js',
  external: [
    'vue'
  ],
  output: {
    name: 'VueAwesome',
    file: 'dist/vue-awesome.js',
    format: 'umd',
    globals: {
      vue: 'Vue'
    }
  },
  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
    buble(),
    uglify()
  ]
}
