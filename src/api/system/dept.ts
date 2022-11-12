import { request } from '@/utils/request';
import type { LazyListParams } from './model/deptModel';

enum Api {
  GetLazyList = '/blade-system/dept/lazy-list',
  Remove = '/blade-system/dept/remove',
  Submit = '/blade-system/dept/submit',
  GetDetail = '/blade-system/dept/detail',
  GetTree = '/blade-system/dept/tree',
  GetLazyTree = '/blade-system/dept/lazy-tree',
}

export function getLazyList(params: LazyListParams) {
  return request.get(
    { url: Api.GetLazyList, params },
    {
      clearEmptyParam: false,
    },
  );
}

export const removeDepts = (ids: string[]) => {
  return request.post(
    { url: Api.Remove, params: { ids } },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const submitDept = (data: Recordable) => {
  return request.post(
    { url: Api.Submit, data },
    {
      errorMessageMode: 'message',
    },
  );
};

export const getDeptDetail = (id: string) => {
  return request.get({ url: Api.GetDetail, params: { id } });
};
export const getDeptTree = (tenantId?: string) => {
  return request.get({ url: Api.GetTree, params: { tenantId } });
};
export const getDeptLazyTree = (params: any) => {
  return request.get(
    { url: Api.GetLazyTree, params },
    {
      clearEmptyParam: false,
      joinTime: false,
    },
  );
};
