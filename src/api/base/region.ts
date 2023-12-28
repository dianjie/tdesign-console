import type { UploadFileParams } from '@/types/axios';
import { request } from '@/utils/request';

enum Api {
  GetList = '/blade-system/region/list',
  GetLazyTree = '/blade-system/region/lazy-tree',
  Remove = '/blade-system/region/remove',
  GetDetail = '/blade-system/region/detail',
  Submit = '/blade-system/region/submit',
  ImportRegion = '/blade-system/region/import-region',
  ExportTemplate = '/blade-system/region/export-template',
  ExportRegion = '/blade-system/region/export-region',
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

export const getLazyTree = (parentCode: StrOrNum, params?: Recordable) => {
  return request.get(
    {
      url: Api.GetLazyTree,
      params: {
        ...params,
        parentCode,
      },
    },
    {
      joinTime: false,
    },
  );
};

export const getDetail = (code: string) => {
  return request.get({
    url: Api.GetDetail,
    params: {
      code,
    },
  });
};

export const remove = (id: string) => {
  return request.post(
    { url: Api.Remove, params: { id } },
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

export const importRegion = (isCovered: StrOrNum, params: UploadFileParams) => {
  return request.uploadFile(
    {
      url: Api.ImportRegion,
      params: {
        isCovered,
      },
      timeout: 60 * 1000,
    },
    params,
  );
};

export const exportTemplate = () => {
  return request.get(
    {
      url: Api.ExportTemplate,
      responseType: 'blob',
    },
    {
      // 需要对返回数据进行处理
      isTransformResponse: false,
    },
  );
};

export const exportRegion = () => {
  return request.get(
    {
      url: Api.ExportRegion,
      responseType: 'blob',
      timeout: 60 * 1000,
    },
    {
      // 需要对返回数据进行处理
      joinTime: false,
      isTransformResponse: false,
      errorMessageMode: 'message',
    },
  );
};
