import { LAYOUT } from '../constant';
import LogoutIcon from '@/assets/assets-slide-logout.svg';

export default [
  {
    path: '/basic-info',
    name: 'basicInfo',
    component: LAYOUT,
    redirect: '/basic-info/index',
    meta: { title: '个人中心', icon: 'user-circle' },
    children: [
      {
        path: 'index',
        name: 'UserIndex',
        component: () => import('@/views/system/userInfo.vue'),
        meta: { title: '个人信息' },
      },
    ],
  },
  {
    path: '/loginRedirect',
    name: 'loginRedirect',
    redirect: '/login',
    meta: { title: '登录页', icon: LogoutIcon },
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'index',
        redirect: '/login',
        component: () => import('@/layouts/blank.vue'),
        meta: { title: '登录中心' },
      },
    ],
  },
];
