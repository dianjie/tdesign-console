import { request } from '@/utils/request';

enum Api {
  GetList = '/blade-resource/sms/list',
  Remove = '/blade-resource/sms/remove',
  GetDetail = '/blade-resource/sms/detail',
  Submit = '/blade-resource/sms/submit',
  Enable = '/blade-resource/sms/enable',
  SendMessage = '/blade-resource/sms/endpoint/send-message',
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

export const enable = (id: StrOrNum) => {
  return request.post({ url: Api.Enable, params: { id } }, { joinParamsToUrl: true });
};

export const sendMessage = (params: { code: string; phones: string; params: string }) => {
  return request.post(
    { url: Api.SendMessage, params },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};
