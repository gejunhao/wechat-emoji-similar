const path = require('path')
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  filenameHashing: true,
  lintOnSave: true,
  pages: {
    index: {
      // 入口 src
      entry: 'src/main.js',
      //模板来源
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add('/packages/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        // 修改它的选项...
        return options
      })
  },
}
