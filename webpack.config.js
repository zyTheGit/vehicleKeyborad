const path = require('path');
module.exports = {
  mode: "production",
  entry: './html/keyborad.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'keyboard.js'
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
