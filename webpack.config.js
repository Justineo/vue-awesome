var demo = {
  entry: './demo/demo.js',
  output: {
    path: __dirname,
    filename: 'demo/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  }
}

var build = {
  entry: './src/components/Icon.vue',
  output: {
    path: __dirname,
    filename: 'dist/vue-awesome.js',
    library: 'VueAwesome',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  }
}

module.exports = [demo, build]
