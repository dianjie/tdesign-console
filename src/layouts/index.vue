<template>
  <div>
    <template v-if="setting.layout.value === 'side'">
      <t-layout key="side" :class="mainLayoutCls">
        <t-aside><layout-side-nav /></t-aside>
        <t-layout>
          <t-header><layout-header /></t-header>
          <t-content><layout-content /></t-content>
        </t-layout>
      </t-layout>
    </template>

    <template v-else>
      <t-layout key="no-side">
        <t-header><layout-header /> </t-header>
        <t-layout :class="mainLayoutCls">
          <layout-side-nav />
          <layout-content />
        </t-layout>
      </t-layout>
    </template>
    <setting-com />
  </div>
</template>

<script setup lang="ts">
import '@/style/layout.less';

import dayjs from 'dayjs';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { prefix } from '@/config/global';
import website from '@/config/website';
import { useSettingStore, useTabsRouterStore, useUserStore } from '@/store';

import LayoutContent from './components/LayoutContent.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutSideNav from './components/LayoutSideNav.vue';
import SettingCom from './setting.vue';

const route = useRoute();
const settingStore = useSettingStore();
const tabsRouterStore = useTabsRouterStore();
const setting = storeToRefs(settingStore);

const mainLayoutCls = computed(() => [
  {
    't-layout--with-sider': settingStore.showSidebar,
  },
]);

const appendNewRoute = () => {
  const {
    path,
    query,
    meta: { title },
    name,
  } = route;
  tabsRouterStore.appendTabRouterList({ path, query, title: title as string, name, meta: route.meta, isAlive: true });
};

const refreshLock = ref(false);
const userStore = useUserStore();
const refreshToken = () => {
  setInterval(async () => {
    const tokenTime = userStore.getTokenTime;
    if (!tokenTime) return;
    const nowDate = dayjs();
    const between_second = nowDate.diff(tokenTime, 'second');
    if (between_second >= website.tokenTime && !refreshLock.value) {
      refreshLock.value = true;
      await userStore.handleRefreshToken();
      refreshLock.value = false;
      console.log('token刷新成功');
    }
  }, 10000);
};

onMounted(() => {
  appendNewRoute();
  refreshToken();
});

watch(
  () => route.path,
  () => {
    appendNewRoute();
    document.querySelector(`.${prefix}-layout`).scrollTo({ top: 0, behavior: 'smooth' });
  },
);
</script>

<style lang="less" scoped></style>
