// axios配置  可自行根据项目进行更改，只需更改该文件即可，其他文件可以不动
import { DialogPlugin, MessagePlugin } from 'tdesign-vue-next';
import { isString, merge, pickBy } from 'lodash-es';
import type { AxiosTransform, CreateAxiosOptions } from './AxiosTransform';
import { VAxios } from './Axios';
import { checkStatus } from './checkStatus';
import proxy from '@/config/proxy';
import { joinTimestamp, formatRequestDate, setObjToUrlParams } from './utils';
import { useUserStore } from '@/store';
import website from '@/config/website';

const env = import.meta.env.MODE || 'development';

// 如果是mock模式 或 没启用直连代理 就不配置host 会走本地Mock拦截 或 Vite 代理
const apiUrl = env === 'mock' || !proxy.isRequestProxy ? '' : proxy[env].apiUrl;
// mock 默认用 development
const { urlPrefix } = proxy[env] || proxy.development;

// 数据处理，方便区分多种处理方式
const transform: AxiosTransform = {
  // 处理请求数据。如果数据不是预期格式，可直接抛出错误
  transformRequestHook: (res, options) => {
    const { isTransformResponse, isReturnNativeResponse } = options;

    // 如果204无内容直接返回
    const method = res.config.method?.toLowerCase();
    if (res.status === 204 || method === 'put' || method === 'patch') {
      return res;
    }

    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data;
    }

    // 错误的时候返回
    const { data } = res;
    if (!data) {
      throw new Error('请求接口错误');
    }

    //  这里 code为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    const { code, success, msg } = data;

    // 这里逻辑可以根据项目进行修改
    if (success) {
      return data.data;
    }

    // 在此处根据自己项目的实际情况对不同的code执行不同的操作
    // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可
    const errorMessageMode = options.errorMessageMode || 'none';
    checkStatus(code, msg, errorMessageMode);

    throw new Error(`请求接口错误, 错误码: ${code}`);
  },

  // 请求前处理配置
  beforeRequestHook: (config, options) => {
    const { apiUrl, isJoinPrefix, urlPrefix, joinParamsToUrl, formatDate, joinTime = true, clearEmptyParam } = options;

    // 添加接口前缀
    if (isJoinPrefix && urlPrefix && isString(urlPrefix)) {
      config.url = `${urlPrefix}${config.url}`;
    }

    // 将baseUrl拼接
    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }

    // 过滤空参数
    let params = config.params || {};
    if (clearEmptyParam) {
      params = pickBy(params);
    }

    const data = config.data || false;

    if (formatDate && data && !isString(data)) {
      formatRequestDate(data);
    }
    if (config.method?.toUpperCase() === 'GET') {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
      } else {
        // 兼容restful风格
        config.url = `${config.url + params}${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else if (!isString(params)) {
      if (formatDate) {
        formatRequestDate(params);
      }
      if (
        Reflect.has(config, 'data') &&
        config.data &&
        (Object.keys(config.data).length > 0 || data instanceof FormData)
      ) {
        config.data = data;
        config.params = params;
      } else {
        // 非GET请求如果没有提供data，则将params视为data
        config.data = params;
        config.params = undefined;
      }
      if (joinParamsToUrl) {
        config.url = setObjToUrlParams(config.url as string, { ...config.params, ...config.data });
      }
    } else {
      // 兼容restful风格
      config.url += params;
      config.params = undefined;
    }
    return config;
  },

  // 请求拦截器处理
  requestInterceptors: (config, options) => {
    if ((config as Recordable)?.requestOptions?.authorization !== false) {
      (config as Recordable).headers.Authorization = `Basic ${btoa(`${website.clientId}:${website.clientSecret}`)}`;
    }
    // 请求之前处理config
    const userStore = useUserStore();
    const token = userStore.getToken;
    if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
      // jwt token
      (config as Recordable).headers[`${website.tokenHeader}`] = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token;
    }
    return config;
  },

  // 响应拦截器处理
  responseInterceptors: (res) => {
    return res;
  },

  // 响应错误处理
  responseInterceptorsCatch: (error: any) => {
    const { config } = error;
    config.retryCount = config.retryCount || 0;
    const configcount = config.requestOptions.retry?.count || 0;

    if (!config || config.retryCount >= configcount) {
      const { response, code, message, config } = error || {};
      const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
      const msg: string = response?.data?.msg || response?.data?.error_description || '';
      const err: string = error?.toString?.() ?? '';
      let errMessage = '';

      try {
        if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
          errMessage = '接口请求超时,请刷新页面重试!';
        }
        if (err?.includes('Network Error')) {
          errMessage = '网络异常，请检查您的网络连接是否正常!';
        }

        if (errMessage) {
          if (errorMessageMode === 'dialog') {
            const alertDia = DialogPlugin.alert({
              header: '错误提示',
              body: errMessage,
              onConfirm: () => {
                alertDia.hide();
              },
              onClose: () => {
                alertDia.hide();
              },
            });
          } else if (errorMessageMode === 'message') {
            MessagePlugin.error(errMessage);
          }
          return Promise.reject(error);
        }
      } catch (error) {
        throw new Error(error as unknown as string);
      }

      checkStatus(error?.response?.status, msg, errorMessageMode);
      return Promise.reject(error);
    }

    config.retryCount += 1;

    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve(config);
      }, config.requestOptions.retry.delay || 1);
    });

    return backoff.then((config) => request.request(config));
  },
};

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    merge(
      <CreateAxiosOptions>{
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        // 例如: authenticationScheme: 'Bearer'
        authenticationScheme: 'bearer',
        // 超时
        timeout: 10 * 1000,
        // 携带Cookie
        withCredentials: true,
        // 头信息
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 接口地址
          apiUrl,
          // 是否自动添加接口前缀
          isJoinPrefix: true,
          // 接口前缀
          // 例如: https://www.baidu.com/api
          // urlPrefix: '/api'
          urlPrefix,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreRepeatRequest: true,
          // 是否携带token
          withToken: true,
          // 重试
          retry: {
            count: 0,
            delay: 1000,
          },
          // 是否添加Authorization
          authorization: true,
          // 清除空值
          clearEmptyParam: true,
        },
      },
      opt || {},
    ),
  );
}
export const request = createAxios();

export const getUrlPrefix = () => urlPrefix;
