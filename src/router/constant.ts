export const LOGIN_PATH = '/login';
export const BASE_HOME = '/dashboard/workbench';
export const USER_HOME = '/basic-info/index';

export const LONGIN_NAME = 'Login';

export const REDIRECT_NAME = 'Redirect';

export const PARENT_LAYOUT_NAME = 'ParentLayout';

export const PAGE_NOT_FOUND_NAME = 'PageNotFound';

export const NOTFOUND = () => import('@/pages/result/404/index.vue');

/**
 * @description: default layout
 */
export const LAYOUT = () => import('@/layouts/index.vue');

/**
 * @description: parent-layout
 */
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: PARENT_LAYOUT_NAME,
      });
    });
};
