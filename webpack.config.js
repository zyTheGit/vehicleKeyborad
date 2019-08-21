const path = require('path');
module.exports = {
  // mode: "development",//production,development
  entry: {
    'keyboard': ['babel-polyfill', './html/keyboard.js'],
    'keyboard.es6': ['babel-polyfill', './html/keyboard.es6.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: '[name].js',
    library: {
      root: "Keyboard",
      amd: "Keyboard",
      commonjs: "Keyboard"
    },
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          // modules: true
        }
      }
      ]
    },
    {
      test: /\.(js)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
    ]
  }
};