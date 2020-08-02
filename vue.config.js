/*
 * @Author: your name
 * @Date: 2019-12-13 15:37:19
 * @LastEditTime: 2020-08-02 22:54:01
 * @LastEditors: songlin
 * @Description: In User Settings Edit
 * @FilePath: \ddad\vue.config.js
 */
const path = require('path');

module.exports = {
    publicPath: `/`,
    outputDir: `ddad`,
    lintOnSave: false,
    assetsDir: "",
    devServer: {
        proxy: {


            '/childApp/testing': {
                target: 'http://localhost:9000/',
            },
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue'],
            alias: {
                '@': path.resolve(__dirname, 'src/'),

            },
        },
    },
};