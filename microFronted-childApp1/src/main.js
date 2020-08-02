/*
 * @Date: 2020-02-25 11:27:41
 * @LastEditors: songlin
 * @LastEditTime: 2020-08-02 22:55:49
 * @FilePath: \d-tigerprawn-yjxy\src\main.js
 */ 
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css/normalize.css';
import './styles/index.scss';
import App from './App.vue';
import router from './router';
import pack from "../package.json";
import { setBase } from "./rem";
Vue.use(ElementUI);

Vue.config.productionTip = false;


let instance = null;

function render(props) {
  let curStore, curEle
  if (props) {

    // curStore = props.store
    // curStore.registerModule(pack.name, store)
    curEle = props.container.querySelector('#app')
  } else {
    curStore = store
    curEle = document.querySelector('#app')
  }

  instance = new Vue({
    router,
    store: curStore,
    render: h => h(App),
    mounted() {

      setBase({ cView: props.container.querySelector('#app'), cWidth: props.containerWidth })
    },
  }).$mount(curEle)

}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
    console.log('react app bootstraped');
}

export async function mount(props) {
  console.log(props)
  render(props)
}

export async function unmount() {
  instance.$destroy();
  instance = null;
}
