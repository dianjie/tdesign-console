import type { UploadApiResult } from '../system/model/uploadModel';
import type { OssParams, UploadParams } from './model/ossModel';
import type { UploadFileParams } from '@/types/axios';

import { request } from '@/utils/request';

enum Api {
  OssList = '/blade-resource/oss/list',
  SubmitOss = '/blade-resource/oss/submit',
  OssDetail = '/blade-resource/oss/detail',
  OssRemove = '/blade-resource/oss/remove',
  OssEnable = '/blade-resource/oss/enable',
  OssUpload = '/blade-resource/oss/endpoint/put-file',
  // 附件上传，好像和上面的一样的吧
  OssAttachUpload = '/blade-resource/oss/endpoint/put-file-attach',
}

// oss列表
export const getOssList = (current: StrOrNum, size: StrOrNum, params: OssParams) => {
  return request.get(
    {
      url: Api.OssList,
      params: {
        ...params,
        current,
        size,
      },
    },
    { joinTime: false },
  );
};

// oss提交
export const submitOss = (data: Recordable) => {
  return request.post({ url: Api.SubmitOss, data });
};

// oss上传
export const uploadOss = (params: UploadParams) => {
  return request.uploadFile<UploadApiResult>(
    {
      url: Api.OssUpload,
      params: { code: params.code },
      timeout: 60 * 1000,
    },
    params,
  );
};

// oss上传
export const uploadOssDefult = (params: UploadFileParams) => {
  return request.uploadFile<UploadApiResult>(
    {
      url: Api.OssUpload,
      timeout: 60 * 1000,
    },
    params,
  );
};

// oss启用操作
export const enableOss = (id: StrOrNum) =>
  request.post({ url: Api.OssEnable, params: { id } }, { joinParamsToUrl: true });

// oss详情
export const getOssDetail = (id: StrOrNum) => request.get({ url: Api.OssDetail, params: { id } });

// oss删除
export const removeOss = (ids: string | string[]) =>
  request.post({ url: Api.OssRemove, params: { ids } }, { joinParamsToUrl: true });

export const uploadAttachOss = (params: UploadParams) => {
  return request.uploadFile<UploadApiResult>(
    {
      url: Api.OssAttachUpload,
      timeout: 60 * 1000,
    },
    params,
  );
};
