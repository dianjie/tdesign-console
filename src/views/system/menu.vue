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
              <t-form-item label="菜单名称" name="name">
                <t-input v-model="formData.name" placeholder="请输入菜单名称" clearable />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="菜单编号" name="code">
                <t-input v-model="formData.code" placeholder="请输入菜单编号" clearable />
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
        :header-affixed-top="{ offsetTop: getTableHeaderAffixedTop, container: getLayoutContainer }"
        vertical-align="top"
        row-key="id"
        bordered
        stripe
        @select-change="rehandleSelectChange"
      >
        <template #top-content>
          <t-row justify="space-between" style="margin-bottom: 10px">
            <t-col flex="0 0 auto">
              <t-button v-auth="'menu_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button v-auth="'menu_delete'" theme="danger" @click="removeCheck">删除</t-button>
            </t-col>
            <t-col flex="0 0 auto">
              <t-button theme="default" @click="debounceOnExpandAllToggle">{{
                expandAll ? '收起全部' : '展开全部'
              }}</t-button>
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
          <a v-auth="'menu_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a v-auth="'menu_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a v-auth="'menu_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
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
        v-model:parentId="parentId"
        @submit="dialogFormSubmit"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, unref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import type { TreeDefaultRow } from '@/types/interface';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import { usePermission } from '@/hooks/web/usePermission';
import { COLUMNS } from '@/viewsBusiness/system/constant/menu/constant';
import DialogForm from '@/viewsBusiness/system/components/menu/DialogForm.vue';
import { getLazyList, removeByIds } from '@/api/system/menu';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();
const { hasRole } = usePermission();

const searchForm = {
  name: '',
  code: '',
};

const selectedRowKeys = ref([]);
const formData = ref({ ...searchForm });
const treeConfig = reactive({ childrenKey: 'children', treeNodeColumnIndex: 2 });
const confirmVisible = ref(false);
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');
const parentId = ref('');
const currentRow = ref<TreeDefaultRow>({});

const { fetchData, data, dataLoading } = useRequset(
  getLazyList,
  formData.value,
  () => {
    selectedRowKeys.value = [];
  },
  false,
);

onMounted(() => {
  fetchData();
});
const handleAction = ({ row }, type: string) => {
  currentRow.value = row;
  editId.value = row.id;
  formActionType.value = type;
  formDialogVisible.value = true;
};
const handleAddSubitem = ({ row }) => {
  parentId.value = row.id;
  formActionType.value = 'add';
  formDialogVisible.value = true;
};
const handleClickDelete = ({ row }) => {
  deleteIdx.value = row.id;
  deleteType.value = 'one';
  confirmVisible.value = true;
};
const expandAll = ref(false);
const enhancedTable = ref(null);
const onExpandAllToggle = () => {
  expandAll.value = !expandAll.value;
  expandAll.value ? enhancedTable.value.expandAll() : enhancedTable.value.foldAll();
};

const debounceFetchData = useDebounceFn(() => {
  fetchData();
}, 300);
const debounceOnExpandAllToggle = useDebounceFn(onExpandAllToggle, 300);

const rehandleSelectChange = (value) => {
  selectedRowKeys.value = value;
};

const onRemove = async (ids: string[]) => {
  try {
    await removeByIds(ids);
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
</script>

<style lang="less" scoped></style>
