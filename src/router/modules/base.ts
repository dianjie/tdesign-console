import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

import { LAYOUT } from '../constant';

export default [
  {
    path: '/dashboard',
    component: LAYOUT,
    redirect: '/dashboard/base',
    name: 'dashboard',
    meta: { title: '仪表盘', icon: DashboardIcon },
    children: [
      {
        path: 'workbench',
        name: 'DashboardWorkbench',
        component: () => import('@/pages/dashboard/workbench/index.vue'),
        meta: { title: '工作台' },
      },
    ],
  },
];
