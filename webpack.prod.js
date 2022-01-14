// webpack(打包脚本)
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.base.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production', // 生产坏境
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: '/',
    clean: true // 打包前清空输出目录，相当于clean-webpack-plugin插件的作用,webpack5新增。
  },

  // 代碼分離
  optimization: {
    nodeEnv: 'production',
    minimizer: [
      `...`,
      new CssMinimizerPlugin(), // 压缩css
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          }
        },
        sourceMap: true,
        parallel: true
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    }
  }
});
