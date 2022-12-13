/**
 * 全局配置文件
 */
export default {
  clientId: 'saber', // 客户端id
  clientSecret: 'saber_secret', // 客户端密钥
  tokenHeader: 'Blade-Auth',
  tokenTime: 1800,
  tenantMode: true, // 是否开启租户模式
  tenantId: '000000', // 管理组租户编号
  captchaMode: false, // 是否开启验证码模式
  // http的status默认放行列表
  statusWhiteList: [],
  // 配置菜单的属性
  menu: {
    iconDefault: 'view-module',
    props: {
      // meata title
      title: 'name',
      path: 'path',
      icon: 'source',
      children: 'children',
      // 路由name
      code: 'code',
    },
  },
  flowDesign: {
    development: 'https://github.com/dianjie',
    test: '',
    release: '',
  },
};
