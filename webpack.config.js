// webpack配置部分(启动脚本)
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.base.js');

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
  }
});
