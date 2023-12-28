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
              <t-form-item label="流程分类" name="category">
                <t-select
                  v-model="formData.category"
                  :options="flowOptions"
                  :keys="{
                    value: 'dictKey',
                    label: 'dictValue',
                  }"
                  clearable
                  placeholder="请选择流程分类"
                />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="流程名称" name="processDefinitionName">
                <t-input v-model="formData.processDefinitionName" clearable placeholder="请输入流程名称" />
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
          <a v-auth="'work_claim_sign'" class="t-button-link" @click="handleClaim(slotProps)">签收</a>
          <a v-auth="'work_claim_detail'" class="t-button-link" @click="handleDetail(slotProps)">详情</a>
          <a v-auth="'work_claim_follow'" class="t-button-link" @click="handleImage(slotProps)">流程图</a>
        </template>
        <template #processDefinitionVersion="{ row }">
          <t-tag theme="primary" variant="light">v{{ row.processDefinitionVersion }}</t-tag>
        </template>
      </t-table>

      <flow-image v-model:visible="flowImageVisible" :row-data="flowRow" type="diagram" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { DialogPlugin, MessagePlugin, type PageInfo } from 'tdesign-vue-next';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import { claimList, claimTask } from '@/api/work/work';
import FlowImage from '@/components/flow-image/index.vue';
import { useSetting } from '@/hooks/setting/useSetting';
import { useDesign } from '@/hooks/web/useDesign';
import { useRequset } from '@/hooks/web/useRequset';
import { useDictStore } from '@/store';
import { noop } from '@/utils';
import { flowRoute, getFinalFlowCategory } from '@/utils/helper/flowHelper';
import { COLUMNS } from '@/viewsBusiness/work/constant/claim/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  category: '',
  processDefinitionName: '',
};

const dictStore = useDictStore();
const formData = ref({ ...searchForm });
const flowOptions = dictStore.getFlowDict;

const { fetchData: oldFetchData, data, pagination, dataLoading } = useRequset(claimList, formData.value, noop);

const fetchData = () => {
  oldFetchData({
    ...formData.value,
    category: getFinalFlowCategory(formData.value.category),
  });
};

onMounted(() => {
  fetchData();
});
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

const flowImageVisible = ref(false);
const flowRow = ref({});

const handleImage = ({ row }) => {
  flowRow.value = row;
  flowImageVisible.value = true;
};

const router = useRouter();

const handleDetail = ({ row }) => {
  router.push({
    path: `/work/process/${flowRoute(dictStore.getFlowRoutes, row.category)}/detail/${row.processInstanceId}/${
      row.businessId
    }`,
  });
};

const handleClaim = ({ row }) => {
  const DialogInstance = DialogPlugin.confirm({
    header: '提示',
    theme: 'info',
    body: '确定签收此任务?',
    onConfirm: useDebounceFn(async () => {
      await claimTask(row.taskId);
      MessagePlugin.success('删除成功');
      DialogInstance.destroy();
      debounceFetchData();
    }, 300),
  });
};
</script>

<style lang="less" scoped></style>
