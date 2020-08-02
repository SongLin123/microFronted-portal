/*
 * @Date: 2020-08-02 14:34:38
 * @LastEditors: songlin
 * @LastEditTime: 2020-08-02 14:58:07
 * @FilePath: \foo-app\src\store.js
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    namespaced: true,
    state: {
        msg:"no sub"
    },
    getters: {
     
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