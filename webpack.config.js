// webpack配置部分(启动脚本)
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'development', // 开发环境
  target: 'web', // 热更新效果
  devServer: {
    // 此时我没有配置代理
    hot: true, // 开启热模块
    open: true,
    // 托管静态资源
    static: {
      directory: path.join(__dirname, './public/index.html')
    },
    compress: true, // 启动时压缩代码
    // 浏览器打印编辑速度
    client: {
      progress: false
    }
  },
  optimization: {
    nodeEnv: 'development',
    moduleIds: 'named'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true,
        terserOptions: {
          comments: false,
          compress: {
            unused: true,
            // drop_console: true,
            drop_debugger: true,
            dead_code: true
          }
        },
        parallel: true //使用多进程并发运行以提高构建速度
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  // 需要兼容到以下浏览器的什么版本
                  targets: {
                    ie: 9,
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1'
                  },
                  useBuiltIns: 'usage',
                  corejs: '3.20.2'
                }
              ]
            ],
            cacheDirectory: true //开启babel缓存
          }
        }
      }
    ]
  }
});
