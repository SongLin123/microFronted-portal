/*
 * @Author: your name
 * @Date: 2020-02-25 11:27:41
 * @LastEditTime: 2020-02-25 16:47:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \d-tigerprawn-yjxy\src\router.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from '@/config/routes';
const name = require("../package.json").name;
Vue.use(Router);

export default new Router({
  mode:"history",
   base: window.__POWERED_BY_QIANKUN__ ? `/${name}` : `/childApp/${name}/`,
  routes: routerConfig,
});
