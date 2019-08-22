const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const autoprefixer = require('autoprefixer');//css加前缀
module.exports = {
  // mode: "production",//production,development
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
      }, {
        loader: 'postcss-loader',//css加前缀
        options: {
          plugins: [
            autoprefixer({
              browsers: [
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        // sourceMap: true,
        include: /\/includes/,
        uglifyOptions: {
          ie8: true
        }
      })
    ]
  }, plugins: [
    new WebpackParallelUglifyPlugin({
      uglifyJS: {
        output: {
          beautify: false, //不需要格式化
          comments: false //不保留注释
        },
        compress: {
          drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
          collapse_vars: true, // 内嵌定义了但是只用到一次的变量
          reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
        }
      }
    })
  ]
};