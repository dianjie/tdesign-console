import type { MockMethod } from 'vite-plugin-mock';

const tenantList = [
  {
    id: '1123598820738675201',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2019-01-01 00:00:39',
    updateUser: '1123598821738675201',
    updateTime: '2019-01-01 00:00:39',
    status: 1,
    isDeleted: 0,
    tenantId: '000000',
    tenantName: '管理组',
    domainUrl: 'http://saber.bladex.vip',
    backgroundUrl: 'https://saber.bladex.vip/img/bg/bg.jpg',
    linkman: 'admin',
    contactNumber: '666666',
    address: '管理组',
    accountNumber: 2333,
    expireTime: '2099-01-01 00:00:00',
    packageId: null,
    datasourceId: null,
    licenseKey: '',
  },
  {
    id: '1226473230699630594',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2020-02-09 19:49:40',
    updateUser: '1123598821738675201',
    updateTime: '2020-02-09 19:50:18',
    status: 1,
    isDeleted: 0,
    tenantId: '763196',
    tenantName: '用户组',
    domainUrl: 'http://user.bladex.vip',
    backgroundUrl: '',
    linkman: 'user',
    contactNumber: '13888888888',
    address: '',
    accountNumber: 23333,
    expireTime: '2030-02-01 12:00:00',
    packageId: null,
    datasourceId: null,
    licenseKey: '',
  },
  {
    id: '1226473265160032258',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2020-02-09 19:49:48',
    updateUser: '1123598821738675201',
    updateTime: '2020-02-09 19:50:04',
    status: 1,
    isDeleted: 0,
    tenantId: '648897',
    tenantName: '测试组',
    domainUrl: 'http://test.bladex.vip',
    backgroundUrl: '',
    linkman: 'test',
    contactNumber: '13888888888',
    address: '',
    accountNumber: -1,
    expireTime: '',
    packageId: null,
    datasourceId: null,
    licenseKey: '',
  },
];

export default [
  {
    url: '/api/blade-system/tenant/select',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: tenantList,
        msg: '操作成功',
      };
    },
  },
  {
    url: '/api/blade-system/tenant/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: {
          records: tenantList,
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
    url: '/api/blade-system/tenant/detail',
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      return {
        code: 200,
        success: true,
        data: tenantList.find((item) => item.id === id) || {},
        msg: '操作成功',
      };
    },
  },
] as MockMethod[];
