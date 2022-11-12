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
              <t-form-item label="执行id" name="executionId">
                <t-input v-model="formData.executionId" clearable placeholder="请输入执行id" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="流程key" name="processDefinitionKey">
                <t-input v-model="formData.processDefinitionKey" clearable placeholder="请输入流程key" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="实例id" name="processInstanceId">
                <t-input v-model="formData.processInstanceId" clearable placeholder="请输入实例id" />
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
          <a v-auth="'flow_follow_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
        </template>
        <template #suspensionState="{ row }">
          <t-tag>{{ row.suspensionState === 1 ? '激活' : '挂起' }}</t-tag>
        </template>
      </t-table>

      <t-dialog v-model:visible="confirmVisible" header="流程删除" @confirm="onConfirmDelete" @closed="onClosed">
        <template #body>
          <t-input v-model="deleteReason" label="删除原因：" placeholder="请输入删除原因" clearable />
        </template>
      </t-dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MessagePlugin, DialogPlugin, type PageInfo } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import { noop } from '@/utils';
import { followList, deleteProcessInstance } from '@/api/flow/flow';
import { COLUMNS } from '@/viewsBusiness/flow/constant/follow/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  executionId: '',
  processDefinitionKey: '',
  processInstanceId: '',
};

const formData = ref({ ...searchForm });
const confirmVisible = ref(false);

const { fetchData, data, pagination, dataLoading } = useRequset(followList, formData.value, noop);

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

const deleteInstanceId = ref('');
const deleteReason = ref('');
const handleClickDelete = ({ row }) => {
  deleteInstanceId.value = row.processInstanceId;
  confirmVisible.value = true;
};

const onConfirmDelete = () => {
  const DialogInstance = DialogPlugin.confirm({
    header: '提示',
    theme: 'warning',
    body: '确定将选择数据删除?',
    onConfirm: useDebounceFn(async () => {
      await deleteProcessInstance({
        deleteReason: deleteReason.value,
        processInstanceId: deleteInstanceId.value,
      });
      confirmVisible.value = false;
      MessagePlugin.success('删除成功');
      DialogInstance.destroy();
      debounceFetchData();
    }, 300),
  });
};

const onClosed = () => {
  deleteReason.value = '';
  deleteInstanceId.value = '';
};
</script>

<style lang="less" scoped></style>
