import type { MockMethod } from 'vite-plugin-mock';

const deptList = [
  {
    id: '1123598813738675201',
    tenantId: '000000',
    parentId: '0',
    fullName: '江苏刀锋科技有限公司',
    deptName: '刀锋科技',
    ancestors: '0',
    deptCategory: 1,
    sort: 1,
    remark: '',
    isDeleted: 0,
    children: [
      {
        id: '1123598813738675202',
        tenantId: '000000',
        parentId: '1123598813738675201',
        fullName: '常州刀锋科技有限公司',
        deptName: '常州刀锋',
        ancestors: '0,1123598813738675201',
        deptCategory: 1,
        sort: 1,
        remark: '',
        isDeleted: 0,
        children: [
          {
            id: '1152441274775060481',
            tenantId: '000000',
            parentId: '1123598813738675202',
            fullName: '研发部',
            deptName: '研发部',
            ancestors: '0,1123598813738675201,1123598813738675202',
            deptCategory: 2,
            sort: 1,
            remark: '',
            isDeleted: 0,
            children: [
              {
                id: '1152441505113653250',
                tenantId: '000000',
                parentId: '1152441274775060481',
                fullName: '电商事务组',
                deptName: '电商事务组',
                ancestors: '0,1123598813738675201,1123598813738675202,1152441274775060481',
                deptCategory: 3,
                sort: 1,
                remark: '',
                isDeleted: 0,
                hasChildren: false,
                parentName: '',
                deptCategoryName: '小组',
              },
              {
                id: '1152441586571231234',
                tenantId: '000000',
                parentId: '1152441274775060481',
                fullName: '直播事务组',
                deptName: '直播事务组',
                ancestors: '0,1123598813738675201,1123598813738675202,1152441274775060481',
                deptCategory: 3,
                sort: 2,
                remark: '',
                isDeleted: 0,
                hasChildren: false,
                parentName: '',
                deptCategoryName: '小组',
              },
            ],
            hasChildren: false,
            parentName: '',
            deptCategoryName: '部门',
          },
          {
            id: '1152441346162114562',
            tenantId: '000000',
            parentId: '1123598813738675202',
            fullName: '产品部',
            deptName: '产品部',
            ancestors: '0,1123598813738675201,1123598813738675202',
            deptCategory: 2,
            sort: 2,
            remark: '',
            isDeleted: 0,
            hasChildren: false,
            parentName: '',
            deptCategoryName: '部门',
          },
        ],
        hasChildren: false,
        parentName: '',
        deptCategoryName: '公司',
      },
      {
        id: '1123598813738675203',
        tenantId: '000000',
        parentId: '1123598813738675201',
        fullName: '苏州刀锋科技有限公司',
        deptName: '苏州刀锋',
        ancestors: '0,1123598813738675201',
        deptCategory: 1,
        sort: 1,
        remark: '',
        isDeleted: 0,
        hasChildren: false,
        parentName: '',
        deptCategoryName: '公司',
      },
    ],
    hasChildren: false,
    parentName: '',
    deptCategoryName: '公司',
  },
  {
    id: '1226473230418612225',
    tenantId: '763196',
    parentId: '0',
    fullName: '用户组',
    deptName: '用户组',
    ancestors: '0',
    deptCategory: 1,
    sort: 2,
    remark: '',
    isDeleted: 0,
    hasChildren: false,
    parentName: '',
    deptCategoryName: '公司',
  },
  {
    id: '1226473264983871492',
    tenantId: '648897',
    parentId: '0',
    fullName: '测试组',
    deptName: '测试组',
    ancestors: '0',
    deptCategory: 1,
    sort: 2,
    remark: '',
    isDeleted: 0,
    hasChildren: false,
    parentName: '',
    deptCategoryName: '公司',
  },
];

const flatData = (data: any[], parentId = undefined) => {
  return data.reduce((prev, curr) => {
    if (parentId !== undefined) {
      Object.assign(curr, {
        parentId,
      });
    }
    prev.push(curr);
    if (curr.children?.length > 0) {
      prev.push(...flatData(curr.children, curr.id));
    }
    return prev;
  }, []);
};

const flated = flatData(deptList);

export default [
  {
    url: '/api/blade-system/dept/lazy-list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: deptList,
        msg: '操作成功',
      };
    },
  },
  {
    url: '/api/blade-system/dept/tree',
    method: 'get',
    response: () => {
      return {
        code: 200,
        success: true,
        data: JSON.parse(JSON.stringify(deptList).replace(/"deptName":/gi, `"title":`)),
        msg: '操作成功',
      };
    },
  },
  {
    url: '/api/blade-system/dept/detail',
    method: 'get',
    response: ({ query }) => {
      const { id } = query;
      return {
        code: 200,
        success: true,
        data: flated.find((item) => item.id === id) || {},
        msg: '操作成功',
      };
    },
  },
] as MockMethod[];
