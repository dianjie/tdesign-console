<template>
  <div :class="tableVar">
    <p class="form__title">发起请假</p>
    <t-form ref="form" :data="formData" :label-width="80" :disabled="submiting" :rules="rules" @submit="handleSubmit">
      <t-row :gutter="[0, 28]">
        <t-col :span="12">
          <t-form-item label="审批人员" name="taskUser">
            <t-select
              v-model="formData.taskUser"
              :options="userOptions"
              :keys="{
                value: 'id',
                label: 'account',
              }"
              clearable
              placeholder="请选择审批人员"
            />
          </t-form-item>
        </t-col>
        <t-col :span="12">
          <t-form-item label="开始时间" name="startTime">
            <t-date-picker
              v-model="formData.startTime"
              :disable-date="{ before: dayjs().subtract(1, 'day').format() }"
              enable-time-picker
              allow-input
              clearable
              placeholder="请选择开始时间"
              style="width: 100%"
            />
          </t-form-item>
        </t-col>
        <t-col :span="12">
          <t-form-item label="结束时间" name="endTime">
            <t-date-picker
              v-model="formData.endTime"
              :disable-date="{ before: dayjs().subtract(1, 'day').format() }"
              enable-time-picker
              allow-input
              clearable
              placeholder="请选择结束时间"
              style="width: 100%"
            />
          </t-form-item>
        </t-col>
        <t-col :span="12">
          <t-form-item label="请假理由" name="reason">
            <t-textarea v-model="formData.reason" placeholder="请输入请假理由" />
          </t-form-item>
        </t-col>
        <t-col :span="12">
          <t-form-item>
            <t-button theme="primary" type="submit">提交</t-button>
          </t-form-item>
        </t-col>
      </t-row>
    </t-form>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import dayjs from 'dayjs';
import { MessagePlugin } from 'tdesign-vue-next';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { leaveProcess } from '@/api/process/leave';
import { getUserList } from '@/api/system/user';
import { useDesign } from '@/hooks/web/useDesign';
import { useTabsRouterStore } from '@/store';

const { tableVar } = useDesign();

const INITIAL_DATA = {
  taskUser: '',
  startTime: '',
  endTime: '',
  reason: '',
};
const rules = ref({
  taskUser: [{ required: true, message: '请选择审批人员', type: 'error', trigger: 'change' }],
  startTime: [{ required: true, message: '请选择开始时间', type: 'error', trigger: 'change' }],
  endTime: [{ required: true, message: '请选择结束时间', type: 'error', trigger: 'change' }],
  reason: [{ required: true, message: '请输入请假理由', type: 'error', trigger: 'blur' }],
});
const formData = ref({ ...INITIAL_DATA });
const userOptions = ref([]);
const submiting = ref(false);
const route = useRoute();
const router = useRouter();
const tabsRouterStore = useTabsRouterStore();
const { tabRouters } = tabsRouterStore;

onBeforeMount(() => {
  getUserList().then((res) => {
    userOptions.value = res;
  });
});

const handleCancel = useDebounceFn(() => {
  const routeIdx = tabRouters.findIndex((i) => i.path === route.path);
  tabsRouterStore.subtractCurrentTabRouter({ path: route.path, routeIdx });
  router.replace({ path: `/work/start` });
}, 300);

const handleSubmit = useDebounceFn(({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const subimtData = {
      processDefinitionId: route.params.processDefinitionId,
      ...formData.value,
    };
    leaveProcess(subimtData)
      .then(() => {
        MessagePlugin.success('提交成功');
        handleCancel();
      })
      .finally(() => {
        submiting.value = false;
      });
  } else {
    MessagePlugin.warning(firstError);
  }
}, 300);
</script>

<style scoped></style>
