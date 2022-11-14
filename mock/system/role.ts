import type { MockMethod } from 'vite-plugin-mock';

const list = [
  {
    id: '1123598816738675201',
    tenantId: '000000',
    parentId: '0',
    roleName: '超级管理员',
    sort: 1,
    roleAlias: 'administrator',
    isDeleted: 0,
    parentName: '顶级',
    hasChildren: false,
  },
  {
    id: '1123598816738675202',
    tenantId: '000000',
    parentId: '0',
    roleName: '用户',
    sort: 2,
    roleAlias: 'user',
    isDeleted: 0,
    children: [
      {
        id: '1123598816738675203',
        tenantId: '000000',
        parentId: '1123598816738675202',
        roleName: '人事',
        sort: 1,
        roleAlias: 'hr',
        isDeleted: 0,
        parentName: '用户',
        hasChildren: false,
      },
      {
        id: '1123598816738675204',
        tenantId: '000000',
        parentId: '1123598816738675202',
        roleName: '经理',
        sort: 2,
        roleAlias: 'manager',
        isDeleted: 0,
        parentName: '用户',
        hasChildren: false,
      },
      {
        id: '1123598816738675205',
        tenantId: '000000',
        parentId: '1123598816738675202',
        roleName: '老板',
        sort: 3,
        roleAlias: 'boss',
        isDeleted: 0,
        parentName: '用户',
        hasChildren: false,
      },
    ],
    parentName: '顶级',
    hasChildren: false,
  },
  {
    id: '1226473225100234753',
    tenantId: '763196',
    parentId: '0',
    roleName: '管理员',
    sort: 2,
    roleAlias: 'admin',
    isDeleted: 0,
    parentName: '顶级',
    hasChildren: false,
  },
  {
    id: '1226473261875892226',
    tenantId: '648897',
    parentId: '0',
    roleName: '管理员',
    sort: 2,
    roleAlias: 'admin',
    isDeleted: 0,
    parentName: '顶级',
    hasChildren: false,
  },
];

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
  {
    url: '/api/blade-system/role/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: list,
        msg: '操作成功',
      };
    },
  },
  {
    url: '/api/blade-system/role/detail',
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
