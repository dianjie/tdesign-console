import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/blade-system/dict/dictionary',
    method: 'get',
    response: ({ query }) => {
      const { code } = query;
      const dataConfig = {
        flow: [
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
        ],
        user_type: [
          {
            id: '1123598814738778201',
            parentId: '1123598814738778200',
            code: 'user_type',
            dictKey: '1',
            dictValue: 'WEB',
            sort: 1,
            remark: '',
            isSealed: -1,
            isDeleted: -1,
          },
          {
            id: '1123598814738778202',
            parentId: '1123598814738778200',
            code: 'user_type',
            dictKey: '2',
            dictValue: 'APP',
            sort: 2,
            remark: '',
            isSealed: -1,
            isDeleted: -1,
          },
          {
            id: '1123598814738778203',
            parentId: '1123598814738778200',
            code: 'user_type',
            dictKey: '3',
            dictValue: 'OTHER',
            sort: 3,
            remark: '',
            isSealed: -1,
            isDeleted: -1,
          },
        ],
        sex: [
          {
            code: 'sex',
            dictKey: '1',
            dictValue: '男',
            hasChildren: false,
            id: '1123598814738675202',
            isDeleted: 0,
            isSealed: 0,
            parentId: '1123598814738675201',
            parentName: '',
            remark: '',
            sort: 1,
          },
          {
            code: 'sex',
            dictKey: '2',
            dictValue: '女',
            hasChildren: false,
            id: '1123598814738675203',
            isDeleted: 0,
            isSealed: 0,
            parentId: '1123598814738675201',
            parentName: '',
            remark: '',
            sort: 2,
          },
        ],
      };
      return {
        code: 200,
        success: true,
        data: dataConfig[code] || [],
        msg: '操作成功',
      };
    },
  },
] as MockMethod[];
