<template>
  <div :class="tableVar">
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
              <t-form-item label="服务id" name="serviceId">
                <t-input v-model="formData.serviceId" clearable placeholder="请输入服务id" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="服务host" name="serverHost">
                <t-input v-model="formData.serverHost" clearable placeholder="请输入服务host" />
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
        :header-affixed-top="{ offsetTop: getTableHeaderAffixedTop, container: getLayoutContainer }"
        vertical-align="top"
        row-key="id"
        bordered
        stripe
        @page-change="rehandlePageChange"
      >
        <template #op="slotProps">
          <a v-auth="'log_error_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
        </template>
      </t-table>

      <dialog-form v-model:visible="formDialogVisible" v-model:editId="editId" v-model:actionType="formActionType" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { PageInfo } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import { noop } from '@/utils';
import DialogForm from '@/viewsBusiness/monitor/log/components/error/DialogForm.vue';
import { getList } from '@/api/log/error';
import { COLUMNS } from '@/viewsBusiness/monitor/log/constant/error/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  serviceId: '',
  serverHost: '',
};

const formData = ref({ ...searchForm });
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');

const { fetchData, data, pagination, dataLoading } = useRequset(getList, formData.value, noop);

onMounted(() => {
  fetchData();
});
const handleAction = ({ row }, type: string) => {
  editId.value = row.id;
  formActionType.value = type;
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
</script>

<style lang="less" scoped></style>
