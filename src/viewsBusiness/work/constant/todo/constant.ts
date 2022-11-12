export const COLUMNS = [
  {
    colKey: 'serial-number',
    title: '序号',
    width: 80,
    align: 'center',
    fixed: 'left',
  },
  {
    title: '流程分类',
    colKey: 'categoryName',
  },
  {
    title: '流程名称',
    colKey: 'processDefinitionName',
  },
  {
    title: '当前步骤',
    colKey: 'taskName',
  },
  {
    title: '流程版本',
    colKey: 'processDefinitionVersion',
  },
  {
    title: '申请时间',
    colKey: 'createTime',
  },
  {
    fixed: 'right',
    width: 200,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];
