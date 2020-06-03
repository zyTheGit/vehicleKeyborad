const path = require('path');
const autoprefixer = require('autoprefixer');//css加前缀


module.exports = {
  entry: {
    "vehicleKeyboard": path.resolve(__dirname, "./html/keyboard.js")
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, "./lib"),
    library: {
      root: "Keyboard",
      amd: "Keyboard",
      commonjs: "Keyboard"
    },
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',//css加前缀
          options: {
            plugins: [
              autoprefixer({
                Browserslist: [
                  "> 1%",
                  "last 2 version",
                  "not ie <= 8"
                ]
              })
            ]
          }
        }
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
}