import type { BasicPageParams } from '@/api/model/baseModel';

export type DetailParams = {
  id?: string;
};

export type ParamParams = {
  tenantId?: string;
};

export type ParamPageParams = BasicPageParams & OssParams;

export type OssParams = {
  category?: string;
  ossCode?: string;
  accessKey?: string;
};

export type UploadParams = {
  code?: string;
  file: File;
};
