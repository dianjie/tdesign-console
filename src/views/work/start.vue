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
              <t-form-item label="流程名称" name="name">
                <t-input v-model="formData.name" clearable placeholder="请输入流程名称" />
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
        <template #top-content>
          <t-row justify="space-between" style="margin-bottom: 10px">
            <t-col flex="0 0 auto">
              <t-radio-group v-model="mode" @change="debounceFetchData">
                <t-radio-button value="1">通用流程</t-radio-button>
                <t-radio-button value="2">定制流程</t-radio-button>
              </t-radio-group>
            </t-col>
          </t-row>
        </template>

        <template #op="slotProps">
          <a v-auth="'work_start_flow'" class="t-button-link" @click="handleStart(slotProps)">发起</a>
          <a v-auth="'work_start_image'" class="t-button-link" @click="handleImage(slotProps)">流程图</a>
        </template>
        <template #tenantId="{ row }">
          <t-tag theme="primary" variant="light">{{ row.tenantId ? row.tenantId : '通用' }}</t-tag>
        </template>
        <template #version="{ row }">
          <t-tag theme="primary" variant="light">v{{ row.version }}</t-tag>
        </template>
        <template #suspensionState="{ row }">
          <t-tag theme="primary" variant="light">{{ row.suspensionState === 1 ? '激活' : '挂起' }}</t-tag>
        </template>
      </t-table>

      <flow-image v-model:visible="flowImageVisible" :row-data="flowRow" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { PageInfo } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import { useRouter } from 'vue-router';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import { useDictStore } from '@/store';
import { noop } from '@/utils';
import { getFinalFlowCategory, flowRoute } from '@/utils/helper/flowHelper';
import { startList } from '@/api/work/work';
import { COLUMNS } from '@/viewsBusiness/work/constant/start/constant';
import FlowImage from '@/components/flow-image/index.vue';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  category: '',
  name: '',
};

const dictStore = useDictStore();
const formData = ref({ ...searchForm });
const flowOptions = dictStore.getFlowDict;
const mode = ref('1');

const { fetchData: oldFetchData, data, pagination, dataLoading } = useRequset(startList, formData.value, noop);

const fetchData = () => {
  oldFetchData({
    ...formData.value,
    category: getFinalFlowCategory(formData.value.category),
    mode: mode.value,
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

const handleStart = ({ row }) => {
  router.push({ path: `/work/process/${flowRoute(dictStore.getFlowRoutes, row.category)}/form/${row.id}` });
};
</script>

<style lang="less" scoped></style>
