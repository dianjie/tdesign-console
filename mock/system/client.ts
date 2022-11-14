import type { MockMethod } from 'vite-plugin-mock';

const list = [
  {
    id: '1123598811738675201',
    createUser: '1123598815738675201',
    createDept: '1123598813738675201',
    createTime: '2019-03-24 10:40:55',
    updateUser: '1123598815738675201',
    updateTime: '2019-03-24 10:40:59',
    status: 1,
    isDeleted: 0,
    clientId: 'sword',
    clientSecret: 'sword_secret',
    resourceIds: '',
    scope: 'all',
    authorizedGrantTypes: 'refresh_token,password,authorization_code,captcha,social',
    webServerRedirectUri: 'http://localhost:8888',
    authorities: '',
    accessTokenValidity: 3600,
    refreshTokenValidity: 604800,
    autoapprove: '',
  },
  {
    id: '1123598811738675202',
    createUser: '1123598815738675201',
    createDept: '1123598813738675201',
    createTime: '2019-03-24 10:42:29',
    updateUser: '1123598815738675201',
    updateTime: '2019-03-24 10:42:32',
    status: 1,
    isDeleted: 0,
    clientId: 'saber',
    clientSecret: 'saber_secret',
    resourceIds: '',
    scope: 'all',
    authorizedGrantTypes: 'refresh_token,password,authorization_code,captcha,social',
    webServerRedirectUri: 'http://localhost:8080',
    authorities: '',
    accessTokenValidity: 3600,
    refreshTokenValidity: 604800,
    autoapprove: '',
  },
  {
    id: '1123598811738675203',
    createUser: '1123598815738675201',
    createDept: '1123598813738675201',
    createTime: '2021-06-15 22:22:22',
    updateUser: '1123598815738675201',
    updateTime: '2021-06-15 22:22:22',
    status: 1,
    isDeleted: 0,
    clientId: 'rider',
    clientSecret: 'rider_secret',
    resourceIds: '',
    scope: 'all',
    authorizedGrantTypes: 'refresh_token,password,authorization_code,captcha,social',
    webServerRedirectUri: 'http://localhost:8080',
    authorities: '',
    accessTokenValidity: 3600,
    refreshTokenValidity: 604800,
    autoapprove: '',
  },
];

export default [
  {
    url: '/api/blade-system/client/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: {
          records: list,
          total: 6,
          size: 10,
          current: 1,
          orders: [],
          optimizeCountSql: true,
          searchCount: true,
          countId: '',
          maxLimit: -1,
          pages: 1,
        },
        msg: '操作成功',
      };
    },
  },
  {
    url: '/api/blade-system/client/detail',
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      return {
        code: 200,
        success: true,
        data: list.find((item) => item.id === id) || {},
        msg: '操作成功',
      };
    },
  },
] as MockMethod[];
