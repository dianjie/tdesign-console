<template>
  <t-dialog v-model:visible="dialogVisible" :header="dialogTitle" :width="980" :footer="false">
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
              <t-form-item label="字典编号" name="code">
                <t-input v-model="formData.code" clearable placeholder="请输入字典编号" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="字典名称" name="dictValue">
                <t-input v-model="formData.dictValue" clearable placeholder="请输入字典名称" />
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
      <t-enhanced-table
        ref="enhancedTable"
        :data="data"
        :columns="COLUMNS"
        :hover="true"
        :loading="dataLoading"
        :tree="treeConfig"
        :selected-row-keys="selectedRowKeys"
        vertical-align="top"
        row-key="id"
        bordered
        stripe
        @select-change="rehandleSelectChange"
      >
        <template #top-content>
          <t-row justify="space-between" style="margin-bottom: 10px">
            <t-col flex="0 0 auto">
              <t-button v-auth="'dictbiz_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button v-auth="'dictbiz_delete'" theme="danger" @click="removeCheck">删除</t-button>
            </t-col>
          </t-row>
        </template>
        <template #source="{ row }">
          <t-icon :name="row.source" />
        </template>
        <template #isOpen="{ row }">
          <t-tag v-if="row.isOpen === 0" theme="warning" variant="light"> 否 </t-tag>
          <t-tag v-if="row.isOpen === 1" theme="success" variant="light"> 是 </t-tag>
        </template>
        <template #op="slotProps">
          <a class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a v-auth="'dictbiz_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a v-auth="'dictbiz_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
          <a v-if="hasRole(['administrator', 'admin'])" class="t-button-link" @click="handleAddSubitem(slotProps)">
            新增子项
          </a>
        </template>
      </t-enhanced-table>
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
        :row-data="currentRow"
        @closed="dialogFormClosed"
        @submit="dialogFormSubmit"
      />
    </div>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch, reactive, unref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import type { TreeDefaultRow } from '@/types/interface';
import { useRequset } from '@/hooks/web/useRequset';
import { usePermission } from '@/hooks/web/usePermission';
import { COLUMNS } from '@/viewsBusiness/system/constant/dictbiz/child/constant';
import DialogForm from './DialogForm.vue';
import { getChildList, remove } from '@/api/system/dictbiz';

const { hasRole } = usePermission();

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  rowData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
const currentRow = ref<TreeDefaultRow>({});

const emit = defineEmits(['update:visible']);

const dialogTitle = computed(() => {
  return `[${props.rowData.dictValue}]字典配置`;
});

const searchForm = {
  code: '',
  dictValue: '',
};

const selectedRowKeys = ref([]);
const treeConfig = reactive({ childrenKey: 'children', treeNodeColumnIndex: 2 });
const dialogVisible = ref(false);
const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');
const enhancedTable = ref(null);

const {
  fetchData: oldFetchData,
  data,
  dataLoading,
} = useRequset(
  getChildList,
  {},
  () => {
    selectedRowKeys.value = [];
  },
  false,
);

const fetchData = () => {
  oldFetchData({ ...formData.value, parentId: props.rowData.id });
};

const handleAction = ({ row }, type: string) => {
  editId.value = row.id;
  formActionType.value = type;
  formDialogVisible.value = true;
};
const handleAddSubitem = ({ row }) => {
  currentRow.value = row;
  formActionType.value = 'add';
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

const dialogFormSubmit = (data: any) => {
  const { parentId } = unref(currentRow.value);
  if (data.parentId !== parentId) {
    fetchData();
  } else {
    data.id && enhancedTable.value?.setData(data.id, { ...currentRow.value, ...data });
  }
};
const dialogFormClosed = () => {
  currentRow.value = {
    ...props.rowData,
  };
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
    if (val && props.rowData.id) {
      fetchData();
    }
    dialogVisible.value = val;
    currentRow.value = {
      ...props.rowData,
    };
  },
);
</script>

<style scoped></style>
