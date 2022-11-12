//  系统字典
import { request } from '@/utils/request';

enum Api {
  GetDict = '/blade-system/dict/dictionary',
  GetList = '/blade-system/dict/parent-list',
  GetChildList = '/blade-system/dict/child-list',
  Remove = '/blade-system/dict/remove',
  GetDetail = '/blade-system/dict/detail',
  Submit = '/blade-system/dict/submit',
}

export function getDictData(code: string) {
  return request.get({ url: Api.GetDict, params: { code } });
}

export const getList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.GetList,
      params: {
        ...params,
        current,
        size,
      },
    },
    {
      joinTime: false,
    },
  );
};

export const getChildList = (params: Recordable) => {
  return request.get(
    {
      url: Api.GetChildList,
      params,
    },
    {
      joinTime: false,
    },
  );
};

export const getDetail = (id: string) => {
  return request.get({
    url: Api.GetDetail,
    params: {
      id,
    },
  });
};

export const remove = (ids: string[]) => {
  return request.post(
    { url: Api.Remove, params: { ids } },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const submit = (data: Recordable) => {
  return request.post(
    {
      url: Api.Submit,
      data,
    },
    {
      errorMessageMode: 'message',
    },
  );
};
