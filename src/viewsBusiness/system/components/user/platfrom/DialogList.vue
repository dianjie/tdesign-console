<template>
  <t-dialog v-model:visible="dialogVisible" header="用户平台配置" :width="980" :footer="false">
    <t-form
      ref="form"
      :data="formData"
      :label-width="80"
      colon
      :style="{ marginBottom: '8px' }"
      @reset="debounceFetchData"
      @submit="debounceFetchData"
    >
      <t-row>
        <t-col :span="10">
          <t-row :gutter="[16, 24]">
            <t-col :span="4">
              <t-form-item label="登录账号" name="account">
                <t-input v-model="formData.account" clearable placeholder="请输入登录账号" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="用户姓名" name="realName">
                <t-input v-model="formData.realName" clearable placeholder="请输入用户姓名" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="用户平台" name="userType">
                <t-select
                  v-model="formData.userType"
                  :options="userTypeOptions"
                  :keys="{
                    value: 'dictKey',
                    label: 'dictValue',
                  }"
                  clearable
                  placeholder="请选择用户平台"
                />
              </t-form-item>
            </t-col>
          </t-row>
        </t-col>

        <t-col :span="2" class="operation-wrapper">
          <t-button theme="primary" type="submit" :style="{ marginLeft: '8px' }"> 查询 </t-button>
          <t-button type="reset" variant="base" theme="default"> 重置 </t-button>
        </t-col>
      </t-row>
    </t-form>

    <div class="table-wrapper">
      <t-table
        :data="data"
        :columns="COLUMNS"
        :hover="true"
        :loading="dataLoading"
        :pagination="pagination"
        vertical-align="top"
        row-key="id"
        bordered
        stripe
        @page-change="rehandlePageChange"
      >
        <template #op="slotProps">
          <a class="t-button-link" @click="handlePlatformSeeting(slotProps)">配置</a>
        </template>
      </t-table>
    </div>

    <dialog-form v-model:visible="formDialogVisible" v-model:editId="editId" @submit="debounceFetchData" />
  </t-dialog>
</template>
<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import type { PageInfo } from 'tdesign-vue-next';
import { inject, ref, watch } from 'vue';

import { getList } from '@/api/system/user';
import { useRequset } from '@/hooks/web/useRequset';
import { noop } from '@/utils';
import { COLUMNS } from '@/viewsBusiness/system/constant/user/platform';

import DialogForm from './DialogForm.vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  deptId: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:visible']);

const searchForm = {
  account: '',
  realName: '',
  userType: '',
};

const dialogVisible = ref(false);
const formData = ref({ ...searchForm });
const formDialogVisible = ref(false);
const editId = ref('');

const userTypeOptions: Record<string, any>[] = inject('userTypeOptions') || [];

const { fetchData: oldFetchData, data, pagination, dataLoading } = useRequset(getList, formData.value, noop);

const fetchData = () => {
  oldFetchData({ ...formData.value, deptId: props.deptId });
};

const handlePlatformSeeting = ({ row }) => {
  editId.value = row.id;
  formDialogVisible.value = true;
};
const debounceFetchData = useDebounceFn(() => {
  fetchData();
}, 300);

const rehandlePageChange = (pageInfo: PageInfo) => {
  pagination.value = {
    ...pagination.value,
    current: pageInfo.current || 1,
    pageSize: pageInfo.pageSize,
  };
  debounceFetchData();
};

watch(
  () => dialogVisible.value,
  (val) => {
    emit('update:visible', val);
  },
);

watch(
  () => props.visible,
  (val) => {
    if (val) {
      fetchData();
    }
    dialogVisible.value = val;
  },
);
</script>

<style lang="less" scoped></style>
