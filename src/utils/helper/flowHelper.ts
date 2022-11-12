import website from '@/config/website';
import { isNullOrUnDef, isEmpty } from '../is';

export const getFinalFlowCategory = (val: StrOrNum) => {
  return isNullOrUnDef(val) || isEmpty(val) ? '' : `flow_${val}`;
};

export const getFlowConfig = () => {
  const env = import.meta.env.MODE || 'development';
  return website.flowDesign[env];
};

export const getFlowDesignUrl = () => {
  const config = getFlowConfig();
  return config || '';
};

export const flowRoute = (routes: any[], key: string) => {
  const data = routes.filter((d) => {
    return d.routeKey === key;
  });
  return data.length === 0 ? [] : data[0].routeValue;
};
