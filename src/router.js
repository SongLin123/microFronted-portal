/*
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2019-12-17 15:51:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiger-prawn-adfw\src\router.js
 */
import Vue from 'vue';
import Router from 'vue-router';
import routerConfig from '@/config/routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routerConfig,
});
