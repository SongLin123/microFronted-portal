/*
 * @Date: 2020-02-25 13:36:51
 * @LastEditors: songlin
 * @LastEditTime: 2020-08-02 22:45:06
 * @FilePath: \ddad\src\qiankun.config.js
 */

import { asideMenuConfig } from "./config/menu";
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, addGlobalUncaughtErrorHandler, start } from 'qiankun';


export const init = async (app) => {

    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;

    const store = app.$store, router = app.$router, microAppContainer = document.querySelector('#content'), containerWidth = microAppContainer.clientWidth, containerHeight = microAppContainer.clientHeight



    if (window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__) return

    function genActiveRule(routerPrefix) {
        return (location) => location.pathname.includes(routerPrefix);
    }

    const data = await asideMenuConfig();
    const apps = [];
    for (const item of data) {
        if (item.appPath) {
            apps.push({
                name: item.appName,
                entry: `${item.appPath}`,
                activeRule: genActiveRule(`${item.appName}`),
                container: microAppContainer,
                props: { store, containerWidth, containerHeight }
            });
        }
    }

    const lifeCycles = {
        beforeLoad: app => {
            store.commit('setState', { needView: false })

        },
        afterMount: [
            app => {
                console.log('before mount', app.name)
                store.commit('setState', { qiankunErr: false })
            }
        ]
    }


    registerMicroApps(apps, lifeCycles);


    start({
        prefetch: true,
        // getTemplate: (tpl) => tpl, //可选,实现的 getTemplate 方法过滤微应用 HTML 模板中的异常脚本
        sandbox: { strictStyleIsolation: true }, // 可选，是否开启沙箱，默认为 true。
        singular: false,// 可选，是否为单实例场景，默认为 true。
        fetch: (url) =>
            window.fetch(url, {
                method: 'get',
                mode: 'cors',
                herders: {
                    'Access-Control-Request-Method': '*'
                },
                referrerPolicy: 'origin-when-cross-origin'
            }) // 可选，自定义的 fetch 方法。

    });
    addGlobalUncaughtErrorHandler(event => {
        store.commit('setState', { qiankunErr: true })
        router.replace('/404')
    });
};
