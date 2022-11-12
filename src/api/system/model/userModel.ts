/**
 * @description: 登录接口参数
 */
export interface LoginParams {
  tenantId?: string;
  username?: string;
  password?: string;
  grant_type?: string;
  scope?: string;
  type?: string;
  key?: string;
  code?: string;
  source?: string;
  state?: string;
}

/**
 * @description: 登录接口返回值
 */
export interface LoginResultModel {
  access_token: string;
  user_id: string;
  avatar: string;
  dept_id: string;
  nick_name: string;
  post_id: string;
  refresh_token: string;
  expires_in: number;
  tenant_id: string;
  token_type: string;
  role_id: string;
  role_name: string;
  error_code?: number;
  error_description?: string;
}

export interface RefreshTokenParams {
  tenantId: string;
  refresh_token: string;
}
