export default {
  isRequestProxy: false,
  development: {
    // 开发环境接口请求
    apiUrl: '',
    urlPrefix: '/api',
    proxy: [['/api', 'http://xxx.com', true]],
    // 开发环境 cdn 路径
    cdn: '',
  },
  test: {
    // 测试环境接口地址
    apiUrl: '',
    urlPrefix: '/api',
    proxy: [['/api', 'http://xxx.com', true]],
    // 测试环境 cdn 路径
    cdn: '',
  },
  release: {
    // 正式环境接口地址
    apiUrl: '',
    urlPrefix: '/api',
    proxy: [['/api', 'http://xxx.com', true]],
    // 正式环境 cdn 路径
    cdn: '',
  },
};
