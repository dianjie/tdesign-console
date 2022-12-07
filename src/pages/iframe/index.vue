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

const computedStyle = getComputedStyle(document.documentElement);
const size_xxxl = computedStyle.getPropertyValue('--td-comp-size-xxxl');
const size_xxxxl = computedStyle.getPropertyValue('--td-comp-size-xxxxl');
const paddingTB_xl = computedStyle.getPropertyValue('--td-comp-paddingTB-xl');
const paddingTB_xxl = computedStyle.getPropertyValue('--td-comp-paddingTB-xxl');

function calcHeight() {
  const iframe = unref(frameRef);
  if (!iframe) {
    return;
  }
  let clientHeight = 0;
  if (!props.isDialog) {
    const { showFooter, isUseTabsRouter, showBreadcrumb } = settingStore;
    const headerHeight = parseFloat(size_xxxl);
    const navHeight = isUseTabsRouter ? 48 : 0;
    const breadcrumbHeight = showBreadcrumb ? 46 : 0;
    const contentPadding = parseFloat(paddingTB_xxl) * 2;
    const footerHeight = showFooter ? 44 : 0;
    const top = headerHeight + navHeight + breadcrumbHeight + contentPadding + footerHeight + 2;
    heightRef.value = window.innerHeight - top;
    clientHeight = document.documentElement.clientHeight - top;
  } else {
    const diaologHeader = parseFloat(size_xxxl);
    const diaologFooter = parseFloat(size_xxxxl);
    const contentPadding = parseFloat(paddingTB_xl) * 2;
    const top = diaologHeader + diaologFooter + contentPadding + 2;
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
