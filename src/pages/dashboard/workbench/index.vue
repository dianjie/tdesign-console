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
      <article class="markdown-body">
        <p dir="auto">
          <a href="https://vuejs.org/" rel="nofollow">
            <img src="https://img.shields.io/badge/Framework-Vue3-42b883" alt="Vue3" style="max-width: 100%" />
          </a>
          <a href="https://www.typescriptlang.org/" rel="nofollow">
            <img src="https://img.shields.io/badge/Language-TypeScript-blue" alt="TypeScript" style="max-width: 100%" />
          </a>
          <a href="https://vitejs.dev" rel="nofollow">
            <img src="https://img.shields.io/badge/Develop-Vite-747bff" alt="Vite" style="max-width: 100%" />
          </a>
          <a href="https://pinia.vuejs.org" rel="nofollow"
            ><img alt="Pinia" src="https://img.shields.io/badge/Store-Pinia-f7d336" style="max-width: 100%"
          /></a>
          <a href="https://nodejs.org/en" rel="nofollow">
            <img
              alt="node version"
              src="https://img.shields.io/badge/node%3E%3D18.x-brightgreen"
              style="max-width: 100%"
            />
          </a>
          <a href="https://github.com/dianjie/tdesign-console/blob/main/LICENSE">
            <img
              alt="GitHub"
              src="https://img.shields.io/github/license/dianjie/tdesign-console"
              style="max-width: 100%"
            />
          </a>
        </p>
        <p dir="auto">
          抱着学习 Vue3 的心态，就将原本<a href="https://saber.bladex.vip/" rel="nofollow">BladeX</a> Vue2
          版本的基础后台管理用 Vue3 写了出来，后续我会将大部分页面的列表、详情接口给 MOCK 出来。如果刚好你有购买 Ta
          们的服务，就直接部署最新版的接口，然后配置好<code>src\config\proxy.ts</code>，<code>src\config\website.ts</code>这两个文件，用现成接口预览吧。
        </p>
        <p dir="auto">
          项目基于<a href="https://github.com/tencent/tdesign-vue-next-starter">TDesign Starter</a
          >开发。其中动态路由、菜单以及权限这块功能，是参考<a href="https://github.com/vbenjs/vue-vben-admin"
            >Vben Admin</a
          >实现的。如果项目对您有帮助，欢迎 Star；如果您有好的建议，欢迎留言。
        </p>

        <p>
          <span>代码仓库：</span>
          <t-link theme="primary" target="_blank" href="https://github.com/dianjie/tdesign-console">
            <template #prefixIcon>
              <jump-icon />
            </template>
            https://github.com/dianjie/tdesign-console
          </t-link>
        </p>
      </article>
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
import { JumpIcon } from 'tdesign-icons-vue-next';
import { DialogPlugin } from 'tdesign-vue-next';

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

<style lang="less" scoped>
.markdown-body {
  p {
    line-height: 2;
  }
}
</style>
