//  业务字典
import { request } from '@/utils/request';

enum Api {
  GetDict = '/blade-system/dict-biz/dictionary',
  GetList = '/blade-system/dict-biz/parent-list',
  GetChildList = '/blade-system/dict-biz/child-list',
  Remove = '/blade-system/dict-biz/remove',
  GetDetail = '/blade-system/dict-biz/detail',
  Submit = '/blade-system/dict-biz/submit',
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
