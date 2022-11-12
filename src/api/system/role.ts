import { request } from '@/utils/request';

enum Api {
  GetList = '/blade-system/role/list',
  Remove = '/blade-system/role/remove',
  Submit = '/blade-system/role/submit',
  GetDetail = '/blade-system/role/detail',
  GrantTree = '/blade-system/menu/grant-tree',
  Grant = '/blade-system/role/grant',
  getRole = '/blade-system/menu/role-tree-keys',
  GetRoleTree = '/blade-system/role/tree',
  GetRoleTreeById = '/blade-system/role/tree-by-id',
}

export const getList = (params: { roleAlias: string; roleName: string; tenantId: string }) => {
  return request.get(
    {
      url: Api.GetList,
      params: {
        ...params,
      },
    },
    {
      joinTime: false,
    },
  );
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
    { url: Api.Submit, data },
    {
      errorMessageMode: 'message',
    },
  );
};

export const getDetail = (id: string) => {
  return request.get({ url: Api.GetDetail, params: { id } });
};

export const getRoleTree = (tenantId?: string) => {
  return request.get({ url: Api.GetRoleTree, params: { tenantId } });
};

export const getRole = (roleIds: string | string[]) => {
  return request.get(
    { url: Api.getRole, params: { roleIds } },
    {
      clearEmptyParam: false,
      joinTime: false,
    },
  );
};

export const getRoleTreeById = (roleId: string) => {
  return request.get({ url: Api.GetRoleTreeById, params: { roleId } });
};

export const grant = (roleIds: string[], menuIds: string[], dataScopeIds: string[], apiScopeIds: string[]) => {
  return request.post(
    {
      url: Api.Grant,
      data: {
        roleIds,
        menuIds,
        dataScopeIds,
        apiScopeIds,
      },
    },
    {
      errorMessageMode: 'message',
    },
  );
};

export const grantTree = () => {
  return request.get({ url: Api.GrantTree });
};
