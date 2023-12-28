import { defineStore } from 'pinia';

import { getButtons, getMenuList } from '@/api/system/menu';
import { BASE_HOME } from '@/router/constant';
import { transformRouteToMenu } from '@/router/helper/menuHelper';
import { flatMultiLevelRoutes, transformObjToRoute } from '@/router/helper/routeHelper';
import { allRoutes } from '@/router/index';
import type { AppRouteRecordRaw, Menu } from '@/router/types';
import { getDictStore, store } from '@/store';
import { filter } from '@/utils/helper/treeHelper';

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    whiteListRouters: [],
    permCodeList: [],
    // Whether the route has been dynamically added
    isDynamicAddedRoute: false,
    // To trigger a menu update
    lastBuildMenuTime: 0,
    // Backstage menu list
    backMenuList: [],
  }),
  getters: {
    getPermCodeList(): string[] | number[] {
      return this.permCodeList;
    },
    getBackMenuList(): Menu[] {
      return this.backMenuList;
    },
    getLastBuildMenuTime(): number {
      return this.lastBuildMenuTime;
    },
    getIsDynamicAddedRoute(): boolean {
      return this.isDynamicAddedRoute;
    },
  },
  actions: {
    setPermCodeList(codeList: string[]) {
      this.permCodeList = codeList;
    },
    setBackMenuList(list: Menu[]) {
      this.backMenuList = list;
      list?.length > 0 && this.setLastBuildMenuTime();
    },
    setLastBuildMenuTime() {
      this.lastBuildMenuTime = new Date().getTime();
    },
    setDynamicAddedRoute(added: boolean) {
      this.isDynamicAddedRoute = added;
    },
    resetState(): void {
      this.isDynamicAddedRoute = false;
      this.permCodeList = [];
      this.backMenuList = [];
      this.lastBuildMenuTime = 0;
    },
    async changePermissionCode() {
      const buttons = await getButtons();
      const codeList = [] as string[];
      function getCode(list) {
        list.forEach((ele) => {
          if (typeof ele === 'object') {
            const chiildren = ele.children;
            const { code } = ele;
            if (chiildren) {
              getCode(chiildren);
            } else {
              codeList.push(code);
            }
          }
        });
      }
      getCode(buttons);
      this.setPermCodeList(codeList);
    },
    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      const routeRemoveIgnoreFilter = (route: AppRouteRecordRaw) => {
        const { meta } = route;
        const { ignoreRoute } = meta || {};
        return !ignoreRoute;
      };

      /**
       * @description 根据设置的首页path，修正routes中的affix标记（固定首页）
       * */
      const patchHomeAffix = (routes: AppRouteRecordRaw[]) => {
        if (!routes || routes.length === 0) return;
        let homePath: string = BASE_HOME;
        function patcher(routes: AppRouteRecordRaw[], parentPath = '') {
          if (parentPath) parentPath += '/';
          routes.forEach((route: AppRouteRecordRaw) => {
            const { path, children, redirect } = route;
            const currentPath = path.startsWith('/') ? path : parentPath + path;
            if (currentPath === homePath) {
              if (redirect) {
                homePath = route.redirect! as string;
              } else {
                route.meta = { ...route.meta, affix: true };
                throw new Error('end');
              }
            }
            children && children.length > 0 && patcher(children, currentPath);
          });
        }
        try {
          patcher(routes);
        } catch (e) {
          // 已处理完毕跳出循环
        }
      };

      let routes: AppRouteRecordRaw[] = [];
      let routeList: AppRouteRecordRaw[] = [];
      try {
        await this.changePermissionCode();
        routeList = (await getMenuList()) as AppRouteRecordRaw[];
        const dictStore = getDictStore();
        await dictStore.getServerFlowDict();
        if (!routeList.length) {
          return routes;
        }
      } catch (error) {
        console.error(error);
        throw error;
      }

      // Dynamically introduce components
      routeList = transformObjToRoute(routeList);

      //  Background routing to menu structure
      const backMenuList = transformRouteToMenu(routeList);
      this.setBackMenuList(backMenuList);

      // remove meta.ignoreRoute item
      routeList = filter(routeList, routeRemoveIgnoreFilter);
      routeList = routeList.filter(routeRemoveIgnoreFilter);
      routeList = flatMultiLevelRoutes(routeList);
      routes = [...allRoutes, ...routeList];
      patchHomeAffix(routes);
      return routes;
    },
  },
});

export function getPermissionStore() {
  return usePermissionStore(store);
}
