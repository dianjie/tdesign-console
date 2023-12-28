import { defineStore } from 'pinia';

import { getDictData } from '@/api/system/dict';
import { store } from '@/store';
import { changeDictDataType } from '@/utils';

export const useDictStore = defineStore('dict', {
  state: () => ({
    flow: [],
    flowRoutes: [],
  }),
  getters: {
    getFlowDict: (state) => {
      return state.flow || [];
    },
    getFlowRoutes: (state) => {
      return state.flowRoutes || [];
    },
  },
  actions: {
    setFlowDict(arr: any[]) {
      this.flow = changeDictDataType(arr);
    },
    setFlowRoutes(arr: any[]) {
      this.flowRoutes = arr.map((item) => {
        return {
          routeKey: `${item.code}_${item.dictKey}`,
          routeValue: item.remark,
        };
      });
    },
    async getServerFlowDict() {
      const data = await getDictData('flow');
      this.setFlowDict(data);
      this.setFlowRoutes(data);
    },
  },
  persist: true,
});

export function getDictStore() {
  return useDictStore(store);
}
