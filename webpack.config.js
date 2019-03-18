const path = require('path');

module.exports = {
  mode:"production",
  entry: './html/keyborad.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'keyborad.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
};