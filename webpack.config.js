const path = require('path');
module.exports = {
  mode: "production",//production,development
  entry: './html/keyborad.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'keyboard.js',
	 // globalObject: "this", //解决之前版本不能绑定在window的问题，这一版本不需要这个选项
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
