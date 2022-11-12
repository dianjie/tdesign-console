import type { RouteMeta } from 'vue-router';

export interface RouteItem {
  id: string;
  path: string;
  component: any;
  meta: RouteMeta;
  code: string;
  name: string;
  parentId: string;
  // 图标
  source: string;
  // alias?: string | string[];
  redirect?: string;
  hasChildren: boolean;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[];

/**
 * 获取系统按钮权限
 */
export interface ButtonItem {
  id: string | number;
  code: string;
  hasChildren: boolean;
  children: ButtonItem[];
}

export type GetButtonsModel = ButtonItem[];

export interface LazyListParams {
  code: string;
  name: string;
  parentId?: string | number;
}
