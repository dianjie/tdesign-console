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
    title: '所属租户',
    colKey: 'tenantId',
  },
  {
    title: '岗位类型',
    colKey: 'category',
  },
  {
    title: '岗位编号',
    colKey: 'postCode',
  },
  {
    title: '岗位名称',
    colKey: 'postName',
  },
  {
    title: '岗位排序',
    colKey: 'sort',
  },
  {
    fixed: 'right',
    width: 180,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];
