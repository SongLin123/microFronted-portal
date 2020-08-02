/*
 * @Date: 2020-08-02 13:32:00
 * @LastEditors: songlin
 * @LastEditTime: 2020-08-02 22:51:27
 * @FilePath: \foo-app\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import pack from "../package.json";
import { setBase } from "./rem";


Vue.config.productionTip = false

let instance = null

function render(props) {
  let curStore, curEle
  if (props) {

    curStore = props.store
    curStore.registerModule(pack.name, store)
    curEle = props.container.querySelector('#app')
  } else {
    curStore = store
    curEle = document.querySelector('#app')
  }

  instance = new Vue({

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
  // eslint-disable-next-line no-console
  console.log('vue app bootstraped')
}
export async function beforeMount() {
  console.log(document)

}
export async function mount(props) {
  // eslint-disable-next-line no-console
  console.log('props from main framework', props)
  render(props)
}

export async function unmount() {
  instance.$store.unregisterModule(pack.name)

  instance.$destroy()
  instance = null
}
