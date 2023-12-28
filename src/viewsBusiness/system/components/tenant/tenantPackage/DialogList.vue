<template>
  <t-dialog v-model:visible="dialogVisible" header="租户产品包管理" :width="980" :footer="false">
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
              <t-form-item label="产品包名" name="packageName">
                <t-input v-model="formData.packageName" clearable placeholder="请输入产品包名" />
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
        :selected-row-keys="selectedRowKeys"
        vertical-align="top"
        row-key="id"
        bordered
        stripe
        @page-change="rehandlePageChange"
        @select-change="rehandleSelectChange"
      >
        <template #top-content>
          <t-row justify="space-between" style="margin-bottom: 10px">
            <t-col flex="0 0 auto">
              <t-button @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button theme="danger" @click="removeCheck">删除</t-button>
            </t-col>
          </t-row>
        </template>
        <template #op="slotProps">
          <a class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
        </template>
      </t-table>
      <t-dialog
        v-model:visible="confirmVisible"
        header="确认删除当前所选数据？"
        :on-cancel="onCancel"
        @confirm="onConfirmDelete"
      />

      <dialog-form
        v-model:visible="formDialogVisible"
        v-model:editId="editId"
        v-model:actionType="formActionType"
        @submit="debounceFetchData"
      />
    </div>
  </t-dialog>
</template>
<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { MessagePlugin, type PageInfo } from 'tdesign-vue-next';
import { ref, watch } from 'vue';

import { getList, remove } from '@/api/system/tenantPackage';
import { useRequset } from '@/hooks/web/useRequset';
import { COLUMNS } from '@/viewsBusiness/system/constant/tenant/tenantPackage/constant';

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
  packageName: '',
};

const selectedRowKeys = ref([]);
const dialogVisible = ref(false);
const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');

const { fetchData, data, pagination, dataLoading } = useRequset(getList, formData.value, () => {
  selectedRowKeys.value = [];
});

const handleAction = ({ row }, type: string) => {
  editId.value = row.id;
  formActionType.value = type;
  formDialogVisible.value = true;
};
const handleClickDelete = ({ row }) => {
  deleteIdx.value = row.id;
  deleteType.value = 'one';
  confirmVisible.value = true;
};
const debounceFetchData = useDebounceFn(() => {
  fetchData();
}, 300);

const rehandleSelectChange = (value) => {
  selectedRowKeys.value = value;
};
const rehandlePageChange = (pageInfo: PageInfo) => {
  pagination.value = {
    ...pagination.value,
    current: pageInfo.current || 1,
    pageSize: pageInfo.pageSize,
  };
  debounceFetchData();
};

const onRemove = async (ids: string[]) => {
  try {
    await remove(ids);
    confirmVisible.value = false;
    MessagePlugin.success('删除成功');
    resetIdx();
    debounceFetchData();
  } catch (error) {
    confirmVisible.value = false;
  }
};
const debounceRemove = useDebounceFn(onRemove, 300);

const removeCheck = () => {
  if (!selectedRowKeys.value.length) return;
  deleteType.value = 'check';
  confirmVisible.value = true;
};

const deleteIdx = ref(-1);
const deleteType = ref();
const resetIdx = () => {
  deleteIdx.value = -1;
  deleteType.value = '';
};

const onConfirmDelete = () => {
  if (deleteType.value === 'check') {
    debounceRemove(selectedRowKeys.value);
  }
  if (deleteType.value === 'one') {
    debounceRemove([`${deleteIdx.value}`]);
  }
};

const onCancel = () => {
  resetIdx();
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
