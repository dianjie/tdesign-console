import website from '@/config/website';
import type { UploadFileParams } from '@/types/axios';
import { request } from '@/utils/request';

import type { LoginParams, LoginResultModel, RefreshTokenParams } from './model/userModel';

export const Api = {
  Login: '/blade-auth/oauth/token',
  RefreshToken: '/blade-auth/oauth/token',
  GetCaptcha: '/blade-auth/oauth/captcha',
  // 用户管理
  GetList: '/blade-user/page',
  Remove: '/blade-user/remove',
  GetDetail: '/blade-user/detail',
  Submit: '/blade-user/submit',
  Update: '/blade-user/update',
  Grant: '/blade-user/grant',
  ResetPassword: '/blade-user/reset-password',
  UpdatePassword: '/blade-user/update-password',
  GetPlatformDetail: '/blade-user/platform-detail',
  UpdatePlatform: '/blade-user/update-platform',
  Unlock: '/blade-user/unlock',
  ImportUser: '/blade-user/import-user',
  ExportTemplate: '/blade-user/export-template',
  ExportUser: '/blade-user/export-user',
  UserList: '/blade-user/user-list',
  GetUserInfo: '/blade-user/info',
  UpdateInfo: '/blade-user/update-info',
};

export function loginApi(params: LoginParams) {
  return request.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
      headers: {
        'Tenant-Id': params.tenantId,
        ...(website.captchaMode
          ? {
              'Captcha-Key': params.key,
              'Captcha-Code': params.code,
            }
          : {}),
      },
    },
    {
      isTransformResponse: false,
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
}

/**
 * @description: 刷新token
 */
export function refreshTokenApi(params: RefreshTokenParams) {
  return request.post(
    {
      url: Api.RefreshToken,
      params: {
        ...params,
        grant_type: 'refresh_token',
        scope: 'all',
      },
      headers: {
        'Tenant-Id': params.tenantId,
      },
    },
    {
      isTransformResponse: false,
      joinParamsToUrl: true,
    },
  );
}

// 获取验证码
export function getCaptcha() {
  return request.get(
    { url: Api.GetCaptcha },
    { isTransformResponse: false, joinParamsToUrl: true, joinTime: false, authorization: false },
  );
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

// 新增用户
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

// 更新用户
export const update = (data: Recordable) => {
  return request.post(
    {
      url: Api.Update,
      data,
    },
    {
      errorMessageMode: 'message',
    },
  );
};

// 角色配置
export const grant = (userIds: string | string[], roleIds: string | string[]) => {
  return request.post(
    {
      url: Api.Grant,
      params: { userIds, roleIds },
    },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const resetPassword = (userIds: string | string[]) => {
  return request.post(
    {
      url: Api.ResetPassword,
      params: { userIds },
    },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const updatePassword = (oldPassword: string, newPassword: string, newPassword1: string) => {
  return request.post(
    {
      url: Api.UpdatePassword,
      params: { oldPassword, newPassword, newPassword1 },
    },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const getPlatformDetail = (id: string) => {
  return request.get({
    url: Api.GetPlatformDetail,
    params: {
      id,
    },
  });
};

export const updatePlatform = (params: { userId: string; userType: string | number; userExt: string }) => {
  return request.post(
    {
      url: Api.UpdatePlatform,
      params,
    },
    {
      joinParamsToUrl: true,
      clearEmptyParam: false,
      errorMessageMode: 'message',
    },
  );
};

export const unlock = (userIds: string | string[]) => {
  return request.post(
    {
      url: Api.Unlock,
      params: { userIds },
    },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

// 用户导入
export const importUser = (isCovered: StrOrNum, params: UploadFileParams) => {
  return request.uploadFile(
    {
      url: Api.ImportUser,
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

export const exportUser = (params: Recordable) => {
  return request.get(
    {
      url: Api.ExportUser,
      params,
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

export const getUserList = () => {
  return request.get({
    url: Api.UserList,
  });
};

export const getUserInfo = () => {
  return request.get({
    url: Api.GetUserInfo,
  });
};

export const updateInfo = (data: Recordable) => {
  return request.post(
    {
      url: Api.UpdateInfo,
      data,
    },
    {
      errorMessageMode: 'message',
    },
  );
};
