/*
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2020-08-02 22:47:58
 * @LastEditors: songlin
 * @Description: In User Settings Edit
 * @FilePath: \ddad\src\main.js
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import { init } from './qiankun.config';


import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.mixin({
  methods: {
  },
});
const app=new Vue({
  render: (h) => h(App),
  el: '#container',
  store,
  router
})
init(app)
