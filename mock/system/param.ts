import type { MockMethod } from 'vite-plugin-mock';

const paramList = [
  {
    id: '1123598819738675201',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2018-12-28 12:19:01',
    updateUser: '1123598821738675201',
    updateTime: '2018-12-28 12:19:01',
    status: 1,
    isDeleted: 0,
    paramName: '是否开启注册功能',
    paramKey: 'account.registerUser',
    paramValue: 'true',
    remark: '开启注册',
  },
  {
    id: '1123598819738675202',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2018-12-28 12:19:01',
    updateUser: '1123598821738675201',
    updateTime: '2018-12-28 12:19:01',
    status: 1,
    isDeleted: 0,
    paramName: '账号初始密码',
    paramKey: 'account.initPassword',
    paramValue: '123456',
    remark: '初始密码',
  },
  {
    id: '1123598819738675203',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2021-12-01 12:00:00',
    updateUser: '1123598821738675201',
    updateTime: '2021-12-01 12:00:00',
    status: 1,
    isDeleted: 0,
    paramName: '账号错误锁定次数',
    paramKey: 'account.failCount',
    paramValue: '5',
    remark: '锁定次数',
  },
  {
    id: '1238706101399142402',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2020-03-14 13:58:43',
    updateUser: '1123598821738675201',
    updateTime: '2020-03-14 13:58:43',
    status: 1,
    isDeleted: 0,
    paramName: '租户默认管理密码',
    paramKey: 'tenant.default.password',
    paramValue: 'admin',
    remark: '',
  },
  {
    id: '1238706160295559170',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2020-03-14 13:58:57',
    updateUser: '1123598821738675201',
    updateTime: '2020-03-14 13:58:57',
    status: 1,
    isDeleted: 0,
    paramName: '租户默认账号额度',
    paramKey: 'tenant.default.accountNumber',
    paramValue: '100',
    remark: '',
  },
  {
    id: '1238706330076790786',
    createUser: '1123598821738675201',
    createDept: '1123598813738675201',
    createTime: '2020-03-14 13:59:38',
    updateUser: '1123598821738675201',
    updateTime: '2020-03-14 13:59:38',
    status: 1,
    isDeleted: 0,
    paramName: '租户默认菜单集合',
    paramKey: 'tenant.default.menuCode',
    paramValue: 'desk,flow,work,monitor,resource,role,user,dept,post,dictbiz,topmenu',
    remark: '',
  },
];

export default [
  {
    url: '/api/blade-system/param/select',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: paramList,
        msg: '操作成功',
      };
    },
  },
  {
    url: '/api/blade-system/param/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: {
          records: paramList,
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
    url: '/api/blade-system/param/detail',
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      return {
        code: 200,
        success: true,
        data: paramList.find((item) => item.id === id) || {},
        msg: '操作成功',
      };
    },
  },
] as MockMethod[];
