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
    title: '分类',
    colKey: 'category',
  },
  {
    title: '资源编号',
    colKey: 'ossCode',
  },
  {
    title: '资源地址',
    colKey: 'endpoint',
  },
  {
    title: '空间名',
    colKey: 'bucketName',
  },
  {
    title: 'accessKey',
    colKey: 'accessKey',
  },
  {
    title: 'secretKey',
    colKey: 'secretKey',
  },
  {
    title: '是否启用',
    colKey: 'statusName',
  },
  {
    fixed: 'right',
    width: 280,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];
