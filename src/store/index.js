/*
 * @Date: 2020-08-01 16:49:09
 * @LastEditors: songlin
 * @LastEditTime: 2020-08-02 14:28:29
 * @FilePath: \ddad\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        qiankunErr: false,
        needView: true
    },
    getters: {
        showView(state) {
            return state.needView || state.qiankunErr
        }
    },
    mutations: {
        setState(state, payload) {
            for (const it in payload) {
                if (payload.hasOwnProperty(it)) {
                    state[it] = payload[it]

                }
            }
        }
    },
    actions: {

    },

})
