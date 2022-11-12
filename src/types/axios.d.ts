import { AxiosRequestConfig } from 'axios';

export type ErrorMessageMode = 'none' | 'dialog' | 'message' | undefined;
export interface RequestOptions {
  apiUrl?: string;
  isJoinPrefix?: boolean;
  urlPrefix?: string;
  joinParamsToUrl?: boolean;
  formatDate?: boolean;
  isTransformResponse?: boolean;
  isReturnNativeResponse?: boolean;
  ignoreRepeatRequest?: boolean;
  joinTime?: boolean;
  withToken?: boolean;
  retry?: {
    count: number;
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
