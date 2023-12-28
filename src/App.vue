<template>
  <router-view :class="[mode]" />
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue';

import { useSettingStore } from '@/store';

const store = useSettingStore();

const mode = computed(() => {
  return store.displayMode;
});

onMounted(() => {
  window.addEventListener('storage', (e) => {
    const { key, newValue, oldValue } = e;
    if (key === 'user') {
      const newData = JSON.parse(newValue) || {};
      const oldData = JSON.parse(oldValue) || {};
      // 退出登录/登录了
      if (newValue === null || (!oldData.token && newData.token)) {
        window.location.reload();
      }
    }
  });
});
</script>
<style lang="less" scoped>
#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
