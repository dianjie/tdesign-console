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
    title: '权限路径',
    colKey: 'scopePath',
    ellipsis: true,
    width: 200,
  },
  {
    title: '接口类型',
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
