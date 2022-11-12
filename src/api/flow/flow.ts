import { request, getUrlPrefix } from '@/utils/request';
import { setObjToUrlParams } from '@/utils/request/utils';

enum Api {
  DeployUpload = '/blade-flow/manager/deploy-upload',
  FollowList = '/blade-flow/follow/list',
  DeleteProcessInstance = '/blade-flow/follow/delete-process-instance',
  ManagerList = '/blade-flow/manager/list',
  DeleteDeployment = '/blade-flow/manager/delete-deployment',
  ChangeState = '/blade-flow/manager/change-state',
  // 查看流程图
  ResourceView = '/blade-flow/process/resource-view',
  // 已经走过哪些流程的图
  DiagramView = '/blade-flow/process/diagram-view',
  ModelList = '/blade-flow/model/list',
  RemoveModel = '/blade-flow/model/remove',
  DeployModel = '/blade-flow/model/deploy',
}

export const deployUpload = (category: string, tenantIds: string, files: File) => {
  const formData = new FormData();
  formData.append('category', category);
  formData.append('tenantIds', tenantIds);
  formData.append('files', files);
  return request.post({ url: Api.DeployUpload, data: formData });
};

// 流程跟踪列表
export const followList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.FollowList,
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

// 删除流程实例
export const deleteProcessInstance = (params: { deleteReason: string; processInstanceId: string }) => {
  return request.post(
    { url: Api.DeleteProcessInstance, params },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

// 流程管理列表
export const managerList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.ManagerList,
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

export const deleteDeployment = (deploymentIds: string | string[]) => {
  return request.post(
    { url: Api.DeleteDeployment, params: { deploymentIds } },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const changeState = (params: any) => {
  return request.post(
    { url: Api.ChangeState, params },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const getResourceViewUrl = (row: any) => {
  const urlPrefix = getUrlPrefix();
  const tempUrl = urlPrefix ? `${urlPrefix}${Api.ResourceView}` : Api.ResourceView;
  return setObjToUrlParams(tempUrl as string, { processDefinitionId: row.id });
};

export const getDiagramViewUrl = (row: any) => {
  const urlPrefix = getUrlPrefix();
  const tempUrl = urlPrefix ? `${urlPrefix}${Api.DiagramView}` : Api.DiagramView;
  return setObjToUrlParams(tempUrl as string, { processInstanceId: row.processInstanceId });
};

export const modelList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.ModelList,
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

export const removeModel = (ids: string | string[]) => {
  return request.post(
    { url: Api.RemoveModel, params: { ids } },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const deployModel = (params: any) => {
  return request.post(
    { url: Api.DeployModel, params },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};
