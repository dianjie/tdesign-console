import type { AxiosRequestConfig } from 'axios';

export type ErrorMessageMode = 'none' | 'dialog' | 'message' | undefined;

/**
 * Axios请求配置
 */
export interface RequestOptions {
  /**
   * 接口地址
   *
   * 例: http://www.baidu.com/api
   */
  apiUrl?: string;
  /**
   * 是否自动添加接口前缀
   *
   * 例: http://www.baidu.com/api
   * urlPrefix: 'api'
   */
  isJoinPrefix?: boolean;
  /**
   * 接口前缀
   */
  urlPrefix?: string;
  /**
   * POST请求的时候添加参数到Url中
   */
  joinParamsToUrl?: boolean;
  /**
   * 格式化提交参数时间
   */
  formatDate?: boolean;
  /**
   * 是否需要对响应数据进行处理
   */
  isTransformResponse?: boolean;
  /**
   * 是否返回原生响应头
   *
   * 例: 需要获取响应头时使用该属性
   */
  isReturnNativeResponse?: boolean;
  ignoreRepeatRequest?: boolean;
  /**
   * 自动对请求添加时间戳参数
   */
  joinTime?: boolean;
  /**
   * 是否携带Token
   */
  withToken?: boolean;
  /**
   * 重试配置
   */
  retry?: {
    /**
     * 重试次数
     */
    count: number;
    /**
     * 隔多久重试
     *
     * 单位: 毫秒
     */
    delay: number;
  };
  /**
   * 接口级节流
   *
   * 单位: 毫秒
   */
  throttle?: {
    delay: number;
  };
  /**
   * 接口级防抖
   *
   * 单位: 毫秒
   */
  debounce?: {
    delay: number;
  };
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
  authorization?: boolean;
  clearEmptyParam?: boolean;
}

export interface Result<T = any> {
  code: number;
  success: boolean;
  msg: string;
  data: T;
}

export interface AxiosRequestConfigRetry extends AxiosRequestConfig {
  retryCount?: number;
}

// multipart/form-data: upload file
export interface UploadFileParams {
  // Other parameters
  data?: Recordable;
  // File parameter interface field name
  name?: string;
  // file name
  file: File | Blob;
  // file name
  filename?: string;
  [key: string]: any;
}
