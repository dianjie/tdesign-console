import { request } from '@/utils/request';

enum Api {
  GetSelectList = '/blade-system/tenant/select',
  GetList = '/blade-system/tenant/list',
  Remove = '/blade-system/tenant/remove',
  GetDetail = '/blade-system/tenant/detail',
  Submit = '/blade-system/tenant/submit',
  Setting = '/blade-system/tenant/setting',
  Datasource = '/blade-system/tenant/datasource',
  Info = '/blade-system/tenant/info',
  PackageInfo = '/blade-system/tenant/package-detail',
  PackageSetting = '/blade-system/tenant/package-setting',
  DatasourceSelect = '/blade-develop/datasource/select',
}

export function getTenantSelectList() {
  return request.get({ url: Api.GetSelectList });
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

export const setting = (params: { ids: string | string[]; accountNumber: StrOrNum; expireTime: string }) => {
  return request.post(
    {
      url: Api.Setting,
      params,
    },
    {
      joinParamsToUrl: true,
      clearEmptyParam: false,
      errorMessageMode: 'message',
    },
  );
};

export const datasource = (tenantId: string, datasourceId: string) => {
  return request.post(
    {
      url: Api.Datasource,
      params: { tenantId, datasourceId },
    },
    {
      joinParamsToUrl: true,
      clearEmptyParam: false,
      errorMessageMode: 'message',
    },
  );
};

export const info = (domain: string) => {
  return request.get({
    url: Api.Info,
    params: {
      domain,
    },
  });
};

export const packageInfo = (tenantId: string) => {
  return request.get({
    url: Api.PackageInfo,
    params: {
      tenantId,
    },
  });
};

export const packageSetting = (tenantId: string, packageId: string) => {
  return request.post(
    {
      url: Api.PackageSetting,
      params: {
        tenantId,
        packageId,
      },
    },
    {
      joinParamsToUrl: true,
      clearEmptyParam: false,
      errorMessageMode: 'message',
    },
  );
};

export const datasourceSelect = () => {
  return request.get({
    url: Api.DatasourceSelect,
  });
};
