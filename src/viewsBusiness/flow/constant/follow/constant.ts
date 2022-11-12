export const COLUMNS = [
  {
    colKey: 'serial-number',
    title: '序号',
    width: 80,
    align: 'center',
    fixed: 'left',
  },
  {
    title: '执行id',
    colKey: 'executionId',
  },
  {
    title: '流程key',
    colKey: 'processDefinitionKey',
  },
  {
    title: '实例id',
    colKey: 'processInstanceId',
  },
  {
    title: '状态',
    colKey: 'suspensionState',
  },
  {
    title: '发起人',
    colKey: 'startUser',
  },
  {
    title: '开始时间',
    colKey: 'startTime',
  },
  {
    fixed: 'right',
    width: 100,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];
