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
    title: '字典编号',
    colKey: 'code',
  },
  {
    title: '字典名称',
    colKey: 'dictValue',
  },
  {
    title: '字典键值',
    colKey: 'dictKey',
  },
  {
    title: '字典排序',
    colKey: 'sort',
  },
  {
    title: '封存',
    colKey: 'isSealed',
  },
  {
    fixed: 'right',
    width: 250,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];
