import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
import uglify from 'rollup-plugin-uglify'

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
