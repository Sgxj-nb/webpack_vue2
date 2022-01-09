const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const compressionWebpackPlugin = require('compression-webpack-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/main.js'), // 入口文件
  output: {
    // 输出文件
    filename: '[name].js', // [name] 指entry属性名字, 默认为main
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // 如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    extensions: ['*', '.js', '.json', '.vue']
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ],
        exclude: /node_modules/
      },

      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'] // 切记从右向左解析原则
      },
      {
        test: /.less$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },

  plugins: [
    new vueLoaderPlugin(),
    new compressionWebpackPlugin({
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.8,
      threshold: 0,
      deleteOriginalAssets: false //是否删除原文件，最好不删除，服务器会自动优先返回同名的.gzip资源，如果找不到还可以拿原始文件
    }),
    new HtmlWebpackPlugin({
      // 选取一个html作为模版，在dist目录下会生成一个相同的html，之后将打包好的js注入到该html文件
      template: path.resolve(__dirname, './public/index.html'),
      minify: {
        collapseWhitespace: true, // 去掉空格
        removeComments: true // 去掉注释
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: '[id].css'
    })
  ]
};
