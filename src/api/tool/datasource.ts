import { request } from '@/utils/request';

enum Api {
  GetList = '/blade-develop/datasource/list',
  Remove = '/blade-develop/datasource/remove',
  GetDetail = '/blade-develop/datasource/detail',
  Submit = '/blade-develop/datasource/submit',
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
