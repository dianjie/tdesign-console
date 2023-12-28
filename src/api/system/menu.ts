import { request } from '@/utils/request';

import type { GetButtonsModel, getMenuListResultModel, LazyListParams } from './model/menuModel';

export enum Api {
  GetMenuList = '/blade-system/menu/routes',
  GetButtons = '/blade-system/menu/buttons',
  GetLazyList = '/blade-system/menu/lazy-list',
  GetLazyMenuList = '/blade-system/menu/lazy-menu-list',
  Remove = '/blade-system/menu/remove',
  Tree = '/blade-system/menu/tree',
  GetDetail = '/blade-system/menu/detail',
  Submit = '/blade-system/menu/submit',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return request.get<getMenuListResultModel>({ url: Api.GetMenuList });
};

/**
 * @description: getButtons
 */
export function getButtons() {
  return request.get<GetButtonsModel>({ url: Api.GetButtons });
}

export function getLazyList(params: LazyListParams) {
  return request.get({ url: Api.GetLazyList, params });
}

export function getLazyMenuList(params: LazyListParams) {
  return request.get({ url: Api.GetLazyMenuList, params });
}

export function removeByIds(ids: string[]) {
  return request.post(
    { url: Api.Remove, params: { ids } },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
}

export function getTreeMenu() {
  return request.get({ url: Api.Tree });
}

export function getMenuDetail(id: string) {
  return request.get({ url: Api.GetDetail, params: { id } });
}

export function submitMenu(data: Recordable) {
  return request.post(
    { url: Api.Submit, data },
    {
      errorMessageMode: 'message',
    },
  );
}
