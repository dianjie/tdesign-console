export const COLUMNS = [
  {
    colKey: 'row-select',
    type: 'multiple',
    width: 64,
    fixed: 'left',
  },
  {
    colKey: 'serial-number',
    title: '序号',
    width: 80,
    align: 'center',
    fixed: 'left',
  },
  {
    title: '机构名称',
    colKey: 'deptName',
    ellipsis: true,
    width: 200,
  },
  {
    title: '所属租户',
    colKey: 'tenantId',
    ellipsis: true,
    width: 200,
  },
  {
    title: '机构全称',
    colKey: 'fullName',
    ellipsis: true,
    width: 200,
  },
  {
    title: '机构类型',
    colKey: 'deptCategory',
    width: 150,
    ellipsis: true,
  },
  {
    title: '排序',
    width: 80,
    colKey: 'sort',
    ellipsis: true,
  },
  {
    fixed: 'right',
    width: 180,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];
