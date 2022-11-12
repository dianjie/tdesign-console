export interface BasicSubmitResult {
  code: number;
  msg: string;
  data: any;
  success: boolean;
}

export interface BasicPageParams {
  current: number;
  size: number;
}

export type BasicDetailParams = {
  id: string;
};
export interface BasicRemoveParams {
  ids: string | string[];
}

export interface BasicFetchResult<T> {
  data: T[];
  total: number;
}

export interface BasicDataResult<T> {
  data: BasicData<T>;
  total: number;
}

export interface BasicData<T> {
  records: T[];
  total: number;
}

export interface BasicDetailResult<T> {
  data: T;
}

export interface BasicPagination {
  pageSize: number;
  total: number;
  current: number;
}
