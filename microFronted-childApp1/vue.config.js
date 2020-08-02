/*
 * @Date: 2020-02-25 11:27:41
 * @LastEditors: songlin
 * @LastEditTime: 2020-08-01 21:39:58
 * @FilePath: \d-tigerprawn-yjxy\vue.config.js
 */ 
const path = require('path');
const packageName = require('./package.json').name;

module.exports = {
  // publicPath: './',
  lintOnSave: false,
  // configureWebpack: {
  //   
  // },
  devServer: {
    // open: process.platform === "darwin",

    disableHostCheck: true,

    // host: "0.0.0.0",

    port: 9000,

    // https: false,

    hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  publicPath: `/childApp/${packageName}`,
  outputDir: `${packageName}`,
  // 自定义webpack配置
  configureWebpack: {
    devtool: "source-map",
    // name: name,
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },


};
