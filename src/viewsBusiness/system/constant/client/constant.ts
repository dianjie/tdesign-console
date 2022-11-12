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
    title: '应用ID',
    colKey: 'clientId',
  },
  {
    title: '应用密钥',
    colKey: 'clientSecret',
  },
  {
    title: '授权类型',
    colKey: 'authorizedGrantTypes',
  },
  {
    title: '授权范围',
    colKey: 'scope',
  },
  {
    title: '令牌秒数',
    colKey: 'accessTokenValidity',
  },
  {
    fixed: 'right',
    width: 180,
    colKey: 'op',
    title: '操作',
    align: 'center',
  },
];

export const scopeOptions = [
  { label: '全选', checkAll: true },
  { value: 'refresh_token', label: 'refresh_token' },
  { value: 'password', label: 'password' },
  { value: 'authorization_code', label: 'authorization_code' },
  { value: 'captcha', label: 'captcha' },
  { value: 'social', label: 'social' },
];
