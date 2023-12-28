import { cloneDeep, omit, pick } from 'lodash-es';
import type { Router, RouteRecordNormalized } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

import website from '@/config/website';
import { getParentLayout, LAYOUT, NOTFOUND } from '@/router/constant';
import type { AppRouteModule, AppRouteRecordRaw } from '@/router/types';

export type LayoutMapKey = 'LAYOUT';
const IFRAME = () => import('@/layouts/components/FrameBlank.vue');

const LayoutMap = new Map<string, () => Promise<typeof import('*.vue')>>();

LayoutMap.set('LAYOUT', LAYOUT);
LayoutMap.set('IFRAME', IFRAME);

let dynamicViewsModules: Record<string, () => Promise<Recordable>>;

const menuConfig = website.menu.props;
const menuConfigArr = Object.values(menuConfig);
const menuKeys = Object.keys(menuConfig);

function getNeedRouteData(route) {
  const temp = pick(route, ['isOpen', 'meta', ...menuConfigArr]);
  menuKeys.forEach((item) => {
    temp[item] = route[menuConfig[item]];
  });
  return temp;
}

// Dynamic introduction
function asyncImportRoute(routes: AppRouteRecordRaw[] | undefined) {
  dynamicViewsModules = dynamicViewsModules || import.meta.glob('../../views/**/*.{vue,tsx}');
  if (!routes) return [];
  const transformArr = routes.map((tempRoute) => {
    const item = getNeedRouteData(tempRoute) as any;
    const { path: component, title, code } = item;
    const { children } = item;
    item.name = code || '';
    const meta = { title, icon: item.icon || website.menu.iconDefault, affix: false };
    item.meta = { ...meta, ...item.meta };
    if (component && !component.startsWith('http')) {
      const layoutFound = LayoutMap.get(component.toUpperCase());
      if (layoutFound) {
        item.component = layoutFound;
      } else {
        item.component = dynamicImport(dynamicViewsModules, component as string);
      }
    } else if (code) {
      item.component = getParentLayout();
    }
    // 处理外链
    if (item.isOpen === 1 && component.startsWith('http')) {
      item.meta.frameSrc = component;
      item.component = IFRAME;
      item.path = item.name;
    }
    if (children) {
      item.children = asyncImportRoute(children);
    }
    return item;
  });
  return transformArr;
}

function dynamicImport(dynamicViewsModules: Record<string, () => Promise<Recordable>>, component: string) {
  const keys = Object.keys(dynamicViewsModules);
  const matchKeys = keys.filter((key) => {
    const k = key.replace('../../views', '');
    const startFlag = component.startsWith('/');
    const endFlag = component.endsWith('.vue') || component.endsWith('.tsx');
    const startIndex = startFlag ? 0 : 1;
    const lastIndex = endFlag ? k.length : k.lastIndexOf('.');
    return k.substring(startIndex, lastIndex) === component;
  });
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0];
    return dynamicViewsModules[matchKey];
  }
  if (matchKeys?.length > 1) {
    console.warn(
      'Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure',
    );
  } else {
    console.warn(`在src/views/下找不到\`${component}.vue\` 或 \`${component}.tsx\`, 请自行创建!`);
    return NOTFOUND;
  }
  return NOTFOUND;
}

// Turn background objects into routing objects
export function transformObjToRoute<T = AppRouteModule>(routeList: AppRouteModule[]): T[] {
  const transformArr = routeList.map((tempRoute) => {
    // saber 结构转为 vben 的结构
    const route = getNeedRouteData(tempRoute) as any;

    if (!route.component && !route.path.startsWith('http')) {
      if (route.children && route.children.length) {
        route.component = 'LAYOUT';
      } else {
        route.component = `${route.path}/index`;
      }
    }

    const component = route.component as string;
    // 处理组件导入
    if (component) {
      if (component.toUpperCase() === 'LAYOUT') {
        route.component = LayoutMap.get(component.toUpperCase());
        route.name = route.code;
      } else {
        // 一级菜单会转成添加'/index'路径后缀，例如'/sample'转为'/sample/index',对应的文件夹结构为'/sample/index.vue'或'/sample/index.tsx'
        route.children = [{ ...cloneDeep(route), path: route.component }];
        route.redirect = route.component;
        route.component = LAYOUT;
        route.name = `${route.code}Parent`;
        const meta = route.meta || {};
        meta.hideChildrenInMenu = true;
        meta.single = true;
        route.meta = meta;
      }
    } else {
      console.warn(`请正确配置路由：${route?.title}的component属性`);
    }
    route.meta = {
      ...route.meta,
      title: route.title,
      icon: route.icon || website.menu.iconDefault,
      affix: false,
    };
    if (route.children) {
      route.children = asyncImportRoute(route.children);
    }
    return route;
  });
  return transformArr as unknown as T[];
}

/**
 * Convert multi-level routing to level 2 routing
 */
export function flatMultiLevelRoutes(routeModules: AppRouteModule[]) {
  const modules: AppRouteModule[] = cloneDeep(routeModules);
  for (let index = 0; index < modules.length; index++) {
    const routeModule = modules[index];
    delete routeModule.alias;
    if (!isMultipleRoute(routeModule)) {
      continue;
    }
    promoteRouteLevel(routeModule);
  }
  return modules;
}

// Routing level upgrade
function promoteRouteLevel(routeModule: AppRouteModule) {
  // Use vue-router to splice menus
  let router: Router | null = createRouter({
    routes: [routeModule as unknown as RouteRecordNormalized],
    history: createWebHashHistory(),
  });
  const routes = router.getRoutes();
  addToChildren(routes, routeModule.children || [], routeModule);
  router = null;

  routeModule.children = routeModule.children?.map((item) => omit(item, 'children'));
}

// Add all sub-routes to the secondary route
function addToChildren(routes: RouteRecordNormalized[], children: AppRouteRecordRaw[], routeModule: AppRouteModule) {
  for (let index = 0; index < children.length; index++) {
    const child = children[index];
    const route = routes.find((item) => item.name === child.name);
    if (!route) {
      continue;
    }
    routeModule.children = routeModule.children || [];
    if (!routeModule.children.find((item) => item.name === route.name)) {
      routeModule.children?.push(route as unknown as AppRouteModule);
    }
    if (child.children?.length) {
      addToChildren(routes, child.children, routeModule);
    }
  }
}

// Determine whether the level exceeds 2 levels
function isMultipleRoute(routeModule: AppRouteModule) {
  if (!routeModule || !Reflect.has(routeModule, 'children') || !routeModule.children?.length) {
    return false;
  }

  const { children } = routeModule;

  let flag = false;
  for (let index = 0; index < children.length; index++) {
    const child = children[index];
    if (child.children?.length) {
      flag = true;
      break;
    }
  }
  return flag;
}
