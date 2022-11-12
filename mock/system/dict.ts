import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/blade-system/dict/dictionary',
    method: 'get',
    response: ({ query }) => {
      const flowData = [
        {
          id: '1123598814738675222',
          parentId: '1123598814738675221',
          code: 'flow',
          dictKey: '1',
          dictValue: '请假流程',
          sort: 1,
          remark: 'leave',
          isSealed: -1,
          isDeleted: -1,
        },
        {
          id: '1123598814738675223',
          parentId: '1123598814738675221',
          code: 'flow',
          dictKey: '2',
          dictValue: '报销流程',
          sort: 2,
          remark: 'expense',
          isSealed: -1,
          isDeleted: -1,
        },
      ];
      return {
        code: 200,
        success: true,
        data: query.code === 'flow' ? flowData : [],
        msg: '操作成功',
      };
    },
  },
] as MockMethod[];
