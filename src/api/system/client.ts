import { request } from '@/utils/request';

enum Api {
  GetList = '/blade-system/client/list',
  Remove = '/blade-system/client/remove',
  GetDetail = '/blade-system/client/detail',
  Submit = '/blade-system/client/submit',
}

export const getList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get({
    url: Api.GetList,
    params: {
      ...params,
      current,
      size,
    },
  });
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
  return request.post({
    url: Api.Submit,
    data,
  });
};
