import { computed } from 'vue';
import { useSettingStore } from '@/store';
import { prefix } from '@/config/global';

export function useSetting() {
  const settingStore = useSettingStore();

  const getTableHeaderAffixedTop = computed(() => {
    return settingStore.isUseTabsRouter ? 48 : 0;
  });

  const getLayoutContainer = () => {
    return document.querySelector(`.${prefix}-layout`);
  };

  return {
    getTableHeaderAffixedTop,
    getLayoutContainer,
  };
}
