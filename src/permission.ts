import type { RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import { getPermissionStore, getUserStore } from '@/store';
import { LONGIN_NAME, PAGE_NOT_FOUND_NAME, LOGIN_PATH, BASE_HOME } from '@/router/constant';
import router from '@/router';

NProgress.configure({ showSpinner: false });

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const userStore = getUserStore();
  const permissionStore = getPermissionStore();
  const { whiteListRouters } = permissionStore;

  const { token } = userStore;

  if (whiteListRouters.includes(to.path)) {
    next();
    return;
  }

  // token does not exist
  if (!token) {
    // You can access without permission. You need to set the routing meta.ignoreAuth to true
    if (to.meta.ignoreAuth) {
      next();
      return;
    }

    if (to.name === LONGIN_NAME) {
      next();
      return;
    }

    // redirect login page
    const redirectData: { path: string; replace: boolean; query?: Recordable<string> } = {
      path: LOGIN_PATH,
      replace: true,
    };
    if (to.path) {
      redirectData.query = {
        ...redirectData.query,
        redirect: to.path,
      };
    }
    next(redirectData);
    return;
  }

  if (to.name === LONGIN_NAME) {
    next(BASE_HOME);
    return;
  }

  // Jump to the 404 page after processing the login
  if (from.path === LOGIN_PATH && to.name === PAGE_NOT_FOUND_NAME && to.fullPath !== BASE_HOME) {
    next(BASE_HOME);
    return;
  }

  if (permissionStore.getIsDynamicAddedRoute) {
    next();
    return;
  }

  const routes = await permissionStore.buildRoutesAction();

  routes.forEach((route) => {
    router.addRoute(route as unknown as RouteRecordRaw);
  });
  permissionStore.setDynamicAddedRoute(true);

  if (to.name === PAGE_NOT_FOUND_NAME) {
    const toRoute = to.redirectedFrom ?? to;
    // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
    next({ path: toRoute.fullPath, replace: true, query: toRoute.query });
  } else {
    const redirectPath = (from.query.redirect || to.path) as string;
    const redirect = decodeURIComponent(redirectPath);
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect };
    next(nextData);
  }
});

router.afterEach(() => {
  NProgress.done();
});
