import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/blade-system/role/tree',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: [
          {
            id: '1123598816738675201',
            parentId: '0',
            hasChildren: false,
            title: '超级管理员',
            key: '1123598816738675201',
            value: '1123598816738675201',
          },
          {
            id: '1123598816738675202',
            parentId: '0',
            children: [
              {
                id: '1123598816738675203',
                parentId: '1123598816738675202',
                hasChildren: false,
                title: '人事',
                key: '1123598816738675203',
                value: '1123598816738675203',
              },
              {
                id: '1123598816738675204',
                parentId: '1123598816738675202',
                hasChildren: false,
                title: '经理',
                key: '1123598816738675204',
                value: '1123598816738675204',
              },
              {
                id: '1123598816738675205',
                parentId: '1123598816738675202',
                hasChildren: false,
                title: '老板',
                key: '1123598816738675205',
                value: '1123598816738675205',
              },
            ],
            hasChildren: true,
            title: '用户',
            key: '1123598816738675202',
            value: '1123598816738675202',
          },
        ],
        msg: '操作成功',
      };
    },
  },
] as MockMethod[];
