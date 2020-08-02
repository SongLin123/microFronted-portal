import HeaderAsideLayout from '@/layouts/HeaderAsideLayout';
import NotFound from '@/pages/NotFound';

import NewsList from '@/pages/NewsList';
import AlarmList from '@/pages/AlarmList';

const routerConfig = [
  {
    path: '/table',
    component: HeaderAsideLayout,
    children: [
      { path: '/table/basic', component: NotFound },
      { path: '/table/fixed', component: NotFound },
    ],
  },
  {
    path: '/form',
    component: HeaderAsideLayout,
    children: [
      { path: '/form/basic', component: AlarmList },
      { path: '/form/signup', component: NotFound },
    ],
  },
  {
    path: '/charts',
    component: HeaderAsideLayout,
    children: [
      { path: '/charts/line', component: NotFound },
      { path: '/charts/histogram', component: NotFound },
      { path: '/charts/bar', component: NotFound },
    ],
  },
  {
    path: '/profile',
    component: HeaderAsideLayout,
    children: [
      { path: '/profile/success', component: NotFound },
      { path: '/profile/fail', component: NotFound },
    ],
  },
  {
    path: '/result',
    component: HeaderAsideLayout,
    children: [
      { path: '/result/success', component: NotFound },
      { path: '/result/fail', component: NotFound },
    ],
  },
  {
    path: '/',
    component: HeaderAsideLayout,
    children: [
      { path: '/dashboard/analysis', component: NewsList },
      { path: '/dashboard/monitor', component: NotFound },
      { path: '/dashboard/workplace', component: NotFound },
      { path: '/newsList', component: NewsList },
      { path: '/alarmList', component: AlarmList },
    ],
  },
  { path: '*', component: NotFound },
];

export default routerConfig;
