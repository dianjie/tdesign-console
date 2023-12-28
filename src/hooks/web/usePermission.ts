import { intersection } from 'lodash-es';

import { usePermissionStore } from '@/store/modules/permission';
import { useUserStore } from '@/store/modules/user';
import { isArray } from '@/utils/is';

export function usePermission() {
  const permissionStore = usePermissionStore();
  const { getRoleName } = useUserStore();

  function hasPermission(value?: string | string[], def = true): boolean {
    if (!value) {
      return def;
    }
    const allCodeList = permissionStore.getPermCodeList as string[];
    if (!isArray(value)) {
      return allCodeList.includes(value);
    }
    return (intersection(value, allCodeList) as string[]).length > 0;
  }

  function hasRole(value?: string | string[], def = true): boolean {
    if (!value) {
      return def;
    }
    const roles = getRoleName.split(',');
    if (!isArray(value)) {
      return roles.includes(value);
    }
    return (intersection(value, roles) as string[]).length > 0;
  }

  return { hasPermission, hasRole };
}
