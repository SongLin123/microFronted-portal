// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [];

const asideMenuConfig = [
  // {
  //   path: '/dashboard',
  //   name: '安全宣传',
  //   icon: 'el-icon-menu',
  //   children: [
  //     { path: '/analysis', name: '新闻列表', id: 'Menu_xehfb' },
  //     { path: '/monitor', name: '监控页', id: 'Menu_9km7q' },
  //     { path: '/workplace', name: '工作台', id: 'Menu_2qnow' },
  //   ],
  //   id: 'Menu_kc70u',
  // },
  // {
  //   path: '/table',
  //   name: '社会稳定',
  //   icon: 'el-icon-menu',
  //   children: [
  //     { path: '/basic', name: '基础表格', id: 'Menu_obpp9' },
  //     { path: '/fixed', name: '固定表格', id: 'Menu_0djym' },
  //   ],
  //   id: 'Menu_x1w04',
  // },
  {
    path: '/form',
    name: '功能列表',
    icon: 'el-icon-menu',
    children: [
      { path: '/basic', name: '典型表单', id: 'Menu_n4dcl' },
      { path: '/signup', name: '注册表单', id: 'Menu_w6fl3' },
    ],
    id: 'Menu_1nqqp',
  },
  // {
  //   path: '/charts',
  //   name: '安全监查',
  //   icon: 'el-icon-menu',
  //   children: [
  //     { path: '/line', name: '折线图', id: 'Menu_ik8h6' },
  //     { path: '/histogram', name: '柱状图', id: 'Menu_3o85l' },
  //     { path: '/bar', name: '条形图', id: 'Menu_q6b7o' },
  //   ],
  //   id: 'Menu_faxe4',
  // },
  // {
  //   path: '/profile',
  //   name: '特殊人群',
  //   icon: 'el-icon-menu',
  //   children: [
  //     { path: '/success', name: '基础详情页', id: 'Menu_18hbo' },
  //     { path: '/fail', name: '失败', id: 'Menu_7meww' },
  //   ],
  //   id: 'Menu_10c2q',
  // },
];

export { headerMenuConfig, asideMenuConfig };
