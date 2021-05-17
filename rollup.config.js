import vue from 'rollup-plugin-vue'
import buble from '@rollup/plugin-buble'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/vue-awesome.js',
      name: 'VueAwesome',
      format: 'umd',
      globals: {
        vue: 'Vue'
      }
    },
    external: ['vue'],
    plugins: [
      resolve(),
      commonjs(),
      vue({
        compileTemplate: true,
        css: true
      }),
      buble(),
      terser()
    ]
  },
  {
    input: 'src/components/Icon.vue',
    output: {
      file: 'dist/Icon.js',
      format: 'esm'
    },
    external: ['vue'],
    plugins: [
      resolve(),
      commonjs(),
      vue({
        compileTemplate: true,
        css: true
      }),
      buble(),
      terser()
    ]
  }
]
