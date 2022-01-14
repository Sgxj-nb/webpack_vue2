## Webapck 项目搭建

- 初始化项目
  -  `npm init`
- 安装webpack模块 
  - `npm install webpack webpack-cli -D`

## 注意安装别名

- `npm i path`


## 搭建Vue

- 安裝Vue
 - `npm i vue`
- 为了webpack识别vue的后缀还得安装对应的loader
  - `npm i vue-loader --save-dev`
  - `npm i cache-loader --save-dev`
  - `npm i thread-loader --save-dev` 

- `npm i vue-template-compiler --save-dev`
- `npm i html-loader --save-dev`

- 给css添加浏览器前缀
  - `npm i -D postcss-loader autoprefixer`

- 安装autoprefixer 降低postcss的版本(如果不安装这个的话一个文件开始写css后在打包就会报错)
  - `npm i postcss-loader autoprefixer@10.3.1`


- 把css样式从js文件中提取到单独的css文件中
  - `npm i -D mini-css-extract-plugin` 

## 配置 devServer 来启动vue

- `npm install webpack-dev-server -D`

## 打包部分 build

- 安装gzip开启压缩
  - `npm add compression-webpack-plugin -D`
- 压缩css和js(需要注意的是在development环境下是不需要的 在production环境下需要压缩)
- 新建一个webpack.prod.js文件
- 安装压缩css的插件
  - `npm i -D css-minimizer-webpack-plugin`
  - 安装合并插件
  - `npm i webpack-merge`  
- 安装每次打包清空目录插件
 - `npm i clean-webpack-plugin -D`
- 配置babel进程
  - `npm i @babel/core @babel/preset-env babel-loader -D`
  - `npm i core-js -S`(安装的什么版本就要写什么版本 是最好的要简写也可以)
- 安装多进程并发来提升构造速度
  - `npm install terser-webpack-plugin --save-dev` 

## 请求部分

- 安装axios
  - `npm install axios --save`
```
值得注意的是我这里暂时不安装qs了如有需要可以自己安装即可
```

## Vuex部分

- 安装Vuex
  - `npm install vuex --save` 

## 移动端自适应

- `npm i amfe-flexible --S`
- `npm i --save postcss-plugin-px2rem`

## 线上关闭consl

- `npm i terser-webpack-plugin`