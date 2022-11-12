<template>
  <div :class="prefixCls" :style="getWrapStyle">
    <t-loading :loading="loading" size="large" :style="getWrapStyle">
      <iframe ref="frameRef" :src="frameSrc" :class="`${prefixCls}__main`" @load="hideLoading"></iframe>
    </t-loading>
  </div>
</template>
<script lang="ts" setup>
import type { CSSProperties } from 'vue';
import { ref, unref, computed } from 'vue';
import { useWindowSizeFn } from '@/hooks/event/useWindowSizeFn';
import { useDesign } from '@/hooks/web/useDesign';
import { useSettingStore } from '@/store';

const props = defineProps({
  frameSrc: String,
  isDialog: Boolean,
});

const loading = ref(true);
const heightRef = ref(window.innerHeight);
const frameRef = ref<HTMLFrameElement>();
const { prefixCls } = useDesign('iframe-page');
const settingStore = useSettingStore();

useWindowSizeFn(calcHeight, { immediate: true });

const getWrapStyle = computed((): CSSProperties => {
  return {
    height: `${unref(heightRef)}px`,
  };
});

function calcHeight() {
  const iframe = unref(frameRef);
  if (!iframe) {
    return;
  }
  let clientHeight = 0;
  if (!props.isDialog) {
    const { showFooter, isUseTabsRouter, showBreadcrumb } = settingStore;
    const navHeight = isUseTabsRouter ? 48 : 0;
    const breadcrumbHeight = showBreadcrumb ? 44 : 0;
    const contentPadding = 50;
    const headerHeight = 64;
    const footerHeight = showFooter ? 44 : 0;
    const top = headerHeight + footerHeight + navHeight + breadcrumbHeight + contentPadding;
    heightRef.value = window.innerHeight - top;
    clientHeight = document.documentElement.clientHeight - top;
  } else {
    const top = 56 + 80 + 40;
    heightRef.value = window.innerHeight - top;
    clientHeight = document.documentElement.clientHeight - top;
  }
  iframe.style.height = `${clientHeight}px`;
}

function hideLoading() {
  loading.value = false;
  calcHeight();
}
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{starter-prefix}-iframe-page';

.@{prefix-cls} {
  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__main {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    border: 0;
    box-sizing: border-box;
  }
}
</style>
