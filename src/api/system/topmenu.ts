import { request } from '@/utils/request';

enum Api {
  GetList = '/blade-system/topmenu/list',
  Remove = '/blade-system/topmenu/remove',
  GetDetail = '/blade-system/topmenu/detail',
  Submit = '/blade-system/topmenu/submit',
  GrantTree = 'blade-system/menu/grant-top-tree',
  GetTopTree = 'blade-system/menu/top-tree-keys',
  Grant = 'blade-system/topmenu/grant',
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
  return request.post({
    url: Api.Submit,
    data,
  });
};

export const grantTree = () => {
  return request.get({
    url: Api.GrantTree,
  });
};

export const getTopTree = (topMenuIds: string) => {
  return request.get({
    url: Api.GetTopTree,
    params: {
      topMenuIds,
    },
  });
};

export const grant = (topMenuIds: string[], menuIds: string[]) => {
  return request.post({
    url: Api.Grant,
    data: {
      topMenuIds,
      menuIds,
    },
  });
};
