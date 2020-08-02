/*
 * @Author: your name
 * @Date: 2019-12-13 15:37:21
 * @LastEditTime: 2020-08-02 15:02:19
 * @LastEditors: songlin
 * @Description: In User Settings Edit
 * @FilePath: \ddad\src\config\routes.js
 */
import NotFound from '@/pages/NotFound';
import Dashboard from '@/pages/Dashboard';

const routerConfig = [
  // {
  //   path: '/',
  //   component: HeaderAsideLayout,
  //   children: [
  { path: '/dashboard/analysis', component: Dashboard },
  { path: '/foo-app', component: NotFound },
  { path: '/dashboard/workplace', component: NotFound },
  //   ],
  // },
  { path: '/404', component: NotFound },
  { path: '*', component: NotFound },
];

export default routerConfig;
