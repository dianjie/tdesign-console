import { prefix } from '@/config/global';

export function useDesign(scope?: string) {
  return {
    prefixCls: `${prefix}-${scope}`,
    prefixVar: prefix,
    tableVar: `${prefix}-table-form-container`,
  };
}
