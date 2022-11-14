import type { MockMethod } from 'vite-plugin-mock';

const parentList = [
  {
    id: '1204762018230317058',
    tenantId: '000000',
    parentId: '0',
    code: 'user',
    dictKey: '-1',
    dictValue: '用户类型',
    sort: 1,
    remark: '',
    isSealed: 0,
    isDeleted: 0,
    parentName: '顶级',
    hasChildren: false,
  },
];
const childList = [
  {
    id: '1204762253950201857',
    tenantId: '000000',
    parentId: '1204762018230317058',
    code: 'user',
    dictKey: '1',
    dictValue: '系统用户',
    sort: 1,
    remark: '',
    isSealed: 0,
    isDeleted: 0,
    parentName: '用户类型',
    hasChildren: false,
  },
  {
    id: '1204762300687331329',
    tenantId: '000000',
    parentId: '1204762018230317058',
    code: 'user',
    dictKey: '2',
    dictValue: '网站用户',
    sort: 2,
    remark: '',
    isSealed: 0,
    isDeleted: 0,
    parentName: '用户类型',
    hasChildren: false,
  },
];

const fullList = [...parentList, ...childList];

export default [
  {
    url: '/api/blade-system/dict-biz/dictionary',
    method: 'get',
    response: ({ query }) => {
      const { code } = query;
      const dataConfig = {
        user: childList,
      };
      return {
        code: 200,
        success: true,
        data: dataConfig[code] || [],
        msg: '操作成功',
      };
    },
  },
  {
    url: '/api/blade-system/dict-biz/parent-list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: {
          records: parentList,
          total: 1,
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
    url: '/api/blade-system/dict-biz/child-list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: childList,
        msg: '操作成功',
      };
    },
  },
  {
    url: '/api/blade-system/dict-biz/detail',
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      return {
        code: 200,
        success: true,
        data: fullList.find((item) => item.id === id) || {},
        msg: '操作成功',
      };
    },
  },
] as MockMethod[];
