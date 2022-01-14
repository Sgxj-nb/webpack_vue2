module.exports = {
  plugins: [
    require('postcss-plugin-px2rem')({
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: ['.van'],
      exclude: /node_modules/i,
      mediaQuery: false,
      minPixelValue: 2
    })
  ]
};
