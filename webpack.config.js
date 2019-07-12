const path = require('path');
module.exports = {
  mode: "production",//production,development
  entry: {
    'keyboard': './html/keyboard.js',
    'keyboard.es6': './html/keyboard.es6.js',
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename:'[name].js',
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
    }]
  }
};