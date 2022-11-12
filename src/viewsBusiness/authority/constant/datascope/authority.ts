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
    title: '权限名称',
    colKey: 'scopeName',
    ellipsis: true,
    width: 200,
  },
  {
    title: '权限编号',
    colKey: 'resourceCode',
    ellipsis: true,
    width: 200,
  },
  {
    title: '权限字段',
    colKey: 'scopeColumn',
    ellipsis: true,
    width: 200,
  },
  {
    title: '规则类型',
    colKey: 'scopeTypeName',
    ellipsis: true,
    width: 200,
  },
  {
    fixed: 'right',
    width: 180,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];

// 相应的规则类型对应的默认权限字段
export const SCOPE_COLUMN = [
  {
    dictKey: 1,
    dictValue: '-',
  },
  {
    dictKey: 2,
    dictValue: 'create_user',
  },
  {
    dictKey: 3,
    dictValue: 'create_dept',
  },
  {
    dictKey: 4,
    dictValue: 'create_dept',
  },
  {
    dictKey: 5,
    dictValue: '',
  },
];
