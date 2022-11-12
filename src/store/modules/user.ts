import md5 from 'crypto-js/md5';
import { defineStore } from 'pinia';
import { omit } from 'lodash-es';
import { unref } from 'vue';
import { store, getPermissionStore } from '@/store';
import router from '@/router';
import { LOGIN_PATH } from '@/router/constant';
import { loginApi, refreshTokenApi } from '@/api/system/user';
import { setObjToUrlParams } from '@/utils/request/utils';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: undefined,
    tokenTime: undefined,
    refreshToken: undefined,
    userInfo: null,
  }),
  getters: {
    roles: (state) => {
      return state.userInfo?.roles || [];
    },
    avatar: (state) => {
      return state.userInfo?.avatar || '';
    },
    account: (state) => {
      return state.userInfo?.account || '';
    },
    getToken: (state) => {
      return state.token;
    },
    getTokenTime: (state) => {
      return state.tokenTime;
    },
    getUserInfoData: (state) => {
      return state.userInfo;
    },
    getRoleName: (state) => {
      return state.userInfo?.role_name || '';
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info || ''; // for null or undefined value
      const time = new Date().getTime();
      this.tokenTime = time;
    },
    setRefreshToken(info: string | undefined) {
      this.refreshToken = info;
    },
    setUserInfo(info: any | null) {
      this.userInfo = info;
    },
    resetState() {
      this.userInfo = null;
      this.token = '';
      this.refreshToken = '';
      this.tokenTime = undefined;
    },
    async login(userInfo: Record<string, any>) {
      const data = await loginApi({ ...userInfo, password: md5(userInfo.password).toString() });
      const { access_token, refresh_token } = data;
      // save token
      this.setToken(access_token);
      this.setRefreshToken(refresh_token);
      this.setUserInfo(data);
    },
    async getUserInfo() {
      const mockRemoteUserInfo = async (token: string) => {
        if (token === 'main_token') {
          return {
            name: 'td_main',
            roles: ['all'],
          };
        }
        return {
          name: 'td_dev',
          roles: ['UserIndex', 'DashboardBase', 'login'],
        };
      };

      const res = await mockRemoteUserInfo(this.token);

      this.userInfo = res;
    },
    // 刷新token
    async handleRefreshToken() {
      const { userInfo } = this;
      const data = await refreshTokenApi({
        tenantId: userInfo.tenant_id,
        refresh_token: this.refreshToken,
      });
      const { access_token, refresh_token } = data;
      this.setToken(access_token);
      this.setRefreshToken(refresh_token);
      this.setUserInfo(data);
    },

    async logout(goLogin = false) {
      const permissionStore = getPermissionStore();
      permissionStore.resetState();
      this.resetState();
      localStorage.removeItem('user');
      if (goLogin) {
        const { path, query } = unref(router.currentRoute);
        const urlParams = setObjToUrlParams('/', omit(query, 'redirect'));
        const redirectPath = urlParams === '?' ? path : `${path}${urlParams}`;
        router.replace(`${LOGIN_PATH}?redirect=${redirectPath}`);
      }
    },
  },
  persist: {
    // afterRestore: (ctx) => {
    //   if (ctx.store.roles && ctx.store.roles.length > 0) {
    //     const permissionStore = usePermissionStore();
    //     permissionStore.initRoutes(ctx.store.roles);
    //   }
    // },
    paths: ['token', 'tokenTime', 'refreshToken', 'userInfo'],
  },
});

export function getUserStore() {
  return useUserStore(store);
}
