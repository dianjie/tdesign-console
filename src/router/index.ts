import { uniq } from 'lodash-es';
import { createRouter, createWebHashHistory, RouteLocationNormalizedLoaded, type RouteRecordRaw } from 'vue-router';

import type { AppRouteRecordRaw } from '@/router/types';

import { BASE_HOME, LONGIN_NAME } from './constant';

interface ModuleType {
  default: [];
}
// 自动导入modules文件夹下所有ts文件
const modules = import.meta.glob<ModuleType>('./modules/**/*.ts', { eager: true });

// 路由暂存
const routeModuleList: AppRouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

// 关于单层路由，meta 中设置 { single: true } 即可为单层路由，{ hidden: true } 即可在侧边栏隐藏该路由

// 存放动态路由
export const asyncRouterList: AppRouteRecordRaw[] = [...routeModuleList];

// 存放固定的路由
const defaultRouterList: AppRouteRecordRaw[] = [
  {
    path: '/login',
    name: LONGIN_NAME,
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/',
    name: 'home',
    redirect: BASE_HOME,
    component: () => import('@/layouts/blank.vue'),
  },
  {
    path: '/:w+',
    name: '404Page',
    redirect: '/result/404',
  },
];

export const allRoutes: AppRouteRecordRaw[] = [...defaultRouterList, ...asyncRouterList];

export const getRoutesExpanded = () => {
  const expandedRoutes: Array<string> = [];

  allRoutes.forEach((item) => {
    if (item.meta && item.meta.expanded) {
      expandedRoutes.push(item.path);
    }
    if (item.children && item.children.length > 0) {
      item.children
        .filter((child) => child.meta && child.meta.expanded)
        .forEach((child: AppRouteRecordRaw) => {
          expandedRoutes.push(item.path);
          expandedRoutes.push(`${item.path}/${child.path}`);
        });
    }
  });
  return uniq(expandedRoutes);
};

export const getActive = (route: RouteLocationNormalizedLoaded, maxLevel = 3): string => {
  if (!route.path) {
    return '';
  }
  return route.path
    .split('/')
    .filter((_item: string, index: number) => index <= maxLevel && index > 0)
    .map((item: string) => `/${item}`)
    .join('');
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: allRoutes as unknown as RouteRecordRaw[],
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
