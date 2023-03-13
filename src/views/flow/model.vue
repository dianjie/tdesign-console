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
              <t-form-item label="模型标识" name="modelKey">
                <t-input v-model="formData.modelKey" clearable placeholder="请输入模型标识" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="模型名称" name="name">
                <t-input v-model="formData.name" clearable placeholder="请输入模型名称" />
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
              <t-button v-auth="'flow_model_create'" @click="handleCreate">创建</t-button>
            </t-col>
          </t-row>
        </template>

        <template #op="slotProps">
          <a v-auth="'flow_model_update'" class="t-button-link" @click="handleUpdate(slotProps)">配置</a>
          <a v-auth="'flow_model_deploy'" class="t-button-link" @click="handleDeploy(slotProps)">部署</a>
          <a v-auth="'flow_model_download'" class="t-button-link" @click="handleDownload(slotProps)">下载</a>
          <a v-auth="'flow_model_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
        </template>
        <template #version="{ row }">
          <t-tag theme="primary" variant="light">v{{ row.version }}</t-tag>
        </template>
      </t-table>

      <t-dialog v-model:visible="confirmVisible" header="确认删除当前所选数据？" @confirm="onConfirmDelete" />

      <t-dialog v-model:visible="flowBox" header="流程配置" mode="full-screen">
        <frame-page :frame-src="flowUrl" />
      </t-dialog>

      <dialog-deploy v-model:visible="deployBox" :model-id="selectionId" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MessagePlugin, type PageInfo } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import FramePage from '@/layouts/frame/index.vue';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import { noop } from '@/utils';
import DialogDeploy from '@/viewsBusiness/flow/components/DialogDeploy.vue';
import { getFlowDesignUrl } from '@/utils/helper/flowHelper';
import { modelList, removeModel } from '@/api/flow/flow';
import { COLUMNS } from '@/viewsBusiness/flow/constant/model/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  modelKey: '',
  name: '',
};

const formData = ref({ ...searchForm });
const confirmVisible = ref(false);

const { fetchData, data, pagination, dataLoading } = useRequset(modelList, formData.value, noop);

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

const selectionId = ref('');
const handleClickDelete = ({ row }) => {
  selectionId.value = row.id;
  confirmVisible.value = true;
};

const onConfirmDelete = useDebounceFn(async () => {
  try {
    await removeModel(selectionId.value);
    confirmVisible.value = false;
    MessagePlugin.success('删除成功');
    debounceFetchData();
  } catch (error) {
    confirmVisible.value = false;
  }
}, 300);

const flowDesignUrl = getFlowDesignUrl();

const handleDownload = useDebounceFn(({ row }) => {
  window.open(`${flowDesignUrl}/app/rest/models/${row.id}/bpmn20`);
});

const flowBox = ref(false);
const flowUrl = ref('');
const handleCreate = useDebounceFn(() => {
  flowUrl.value = `${flowDesignUrl}/index.html`;
  flowBox.value = true;
}, 300);

const handleUpdate = useDebounceFn(({ row }) => {
  flowUrl.value = `${flowDesignUrl}/index.html#/editor/${row.id}`;
  flowBox.value = true;
}, 300);

const deployBox = ref(false);
const handleDeploy = ({ row }) => {
  selectionId.value = row.id;
  deployBox.value = true;
};
</script>

<style lang="less" scoped></style>
