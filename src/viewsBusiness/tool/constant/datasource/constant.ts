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
    title: '名称',
    colKey: 'name',
  },
  {
    title: '驱动类',
    colKey: 'driverClass',
  },
  {
    title: '用户名',
    colKey: 'username',
  },
  {
    title: '连接地址',
    colKey: 'url',
  },
  {
    fixed: 'right',
    width: 180,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];

export const DRIVER_CLASS = [
  {
    dictKey: 'com.mysql.cj.jdbc.Driver',
    dictValue: 'com.mysql.cj.jdbc.Driver',
  },
  {
    dictKey: 'org.postgresql.Driver',
    dictValue: 'org.postgresql.Driver',
  },
  {
    dictKey: 'oracle.jdbc.OracleDriver',
    dictValue: 'oracle.jdbc.OracleDriver',
  },
  {
    dictKey: 'com.microsoft.sqlserver.jdbc.SQLServerDriver',
    dictValue: 'com.microsoft.sqlserver.jdbc.SQLServerDriver',
  },
  {
    dictKey: 'dm.jdbc.driver.DmDriver',
    dictValue: 'dm.jdbc.driver.DmDriver',
  },
];
