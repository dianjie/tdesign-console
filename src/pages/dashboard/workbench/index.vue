<template>
  <div>
    <t-card>
      <t-comment :author="userStore.account" content="开始您一天的工作吧！">
        <template #avatar>
          <t-avatar size="60px" :image="userStore.avatar"></t-avatar>
        </template>
      </t-comment>
    </t-card>

    <t-card title="简介" header-bordered style="margin-top: 25px">
      <template #actions>
        <a href="javascript:void(0)" @click="clickHandler">更多</a>
      </template>
      <t-list :split="true" size="small">
        <t-list-item>闲来没事，基于TDesign Starter将BladeX的基础后台功能全部写了出来</t-list-item>
        <t-list-item>主要技术栈： Vue3.x、Vite、 TypeScript、Less、TDesign-Vue-Next</t-list-item>
      </t-list>
    </t-card>

    <t-card title="相关链接" header-bordered style="margin-top: 25px">
      <ul>
        <li>
          <t-link theme="primary" target="_blank" href="https://cn.vuejs.org/">
            <template #prefixIcon>
              <jump-icon />
            </template>
            Vue3.x
          </t-link>
        </li>
        <li>
          <t-link theme="primary" target="_blank" href="https://cn.vitejs.dev/">
            <template #prefixIcon>
              <jump-icon />
            </template>
            Vite
          </t-link>
        </li>
        <li>
          <t-link theme="primary" target="_blank" href="https://www.typescriptlang.org/">
            <template #prefixIcon>
              <jump-icon />
            </template>
            TypeScript
          </t-link>
        </li>
        <li>
          <t-link theme="primary" target="_blank" href="https://tdesign.tencent.com/vue-next/getting-started">
            <template #prefixIcon>
              <jump-icon />
            </template>
            TDesign-Vue-Next
          </t-link>
        </li>
        <li>
          <t-link theme="primary" target="_blank" href="https://github.com/Tencent/tdesign-vue-next-starter">
            <template #prefixIcon>
              <jump-icon />
            </template>
            TDesign Starter
          </t-link>
        </li>
        <li>
          <t-link theme="primary" target="_blank" href="https://bladex.vip/">
            <template #prefixIcon>
              <jump-icon />
            </template>
            BladeX
          </t-link>
        </li>
      </ul>
    </t-card>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { DialogPlugin } from 'tdesign-vue-next';
import { JumpIcon } from 'tdesign-icons-vue-next';
import { useUserStore } from '@/store';

const userStore = useUserStore();

const clickHandler = useDebounceFn(() => {
  const DialogInstance = DialogPlugin.confirm({
    header: '提示',
    theme: 'info',
    body: 'Email： dianjie1022@gmail.com',
    cancelBtn: null,
    onConfirm: () => {
      DialogInstance.destroy();
    },
  });
}, 500);
</script>

<style scoped></style>
