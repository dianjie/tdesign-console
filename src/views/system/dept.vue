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
              <t-form-item label="机构名称" name="deptName">
                <t-input v-model="formData.deptName" clearable placeholder="请输入机构名称" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="所属租户" name="tenantId">
                <t-select
                  v-model="formData.tenantId"
                  :options="tenantOptions"
                  :keys="{
                    value: 'tenantId',
                    label: 'tenantName',
                  }"
                  clearable
                  placeholder="请选择所属租户"
                />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="机构全称" name="fullName">
                <t-input v-model="formData.fullName" clearable placeholder="请输入机构全称" />
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
              <t-button v-auth="'dept_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button v-auth="'dept_delete'" theme="danger" @click="removeCheck">删除</t-button>
            </t-col>
            <t-col flex="0 0 auto">
              <t-button theme="default" @click="debounceOnExpandAllToggle">{{
                expandAll ? '收起全部' : '展开全部'
              }}</t-button>
            </t-col>
          </t-row>
        </template>
        <template #tenantId="{ row }">
          {{ formatIdName(tenantOptions, row.tenantId, { id: 'tenantId', name: 'tenantName' }) }}
        </template>
        <template #deptCategory="{ row }">
          {{ formatDictValue(deptCategoryOptions, row.deptCategory) }}
        </template>
        <template #op="slotProps">
          <a v-auth="'dept_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a v-auth="'dept_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a v-auth="'dept_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
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
import { ref, reactive, onBeforeMount, onMounted, provide, unref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import type { TreeDefaultRow } from '@/types/interface';
import { formatIdName, formatDictValue, changeDictDataType } from '@/utils';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import { usePermission } from '@/hooks/web/usePermission';
import { getDictData } from '@/api/system/dict';
import { getTenantSelectList } from '@/api/system/tenant';
import { getLazyList, removeDepts } from '@/api/system/dept';
import { COLUMNS } from '@/viewsBusiness/system/constant/dept/constant';
import DialogForm from '@/viewsBusiness/system/components/dept/DialogForm.vue';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();
const { hasRole } = usePermission();

const searchForm = {
  deptName: '',
  fullName: '',
  tenantId: '',
  parentId: '',
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

const tenantOptions = ref([]);
const deptCategoryOptions = ref([]);

async function getOptions() {
  const tenant = await getTenantSelectList();
  const dict = await getDictData('org_category');
  tenantOptions.value = tenant;
  deptCategoryOptions.value = changeDictDataType(dict);
}

provide('deptCategoryOptions', deptCategoryOptions);

onBeforeMount(() => {
  getOptions();
});

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
    await removeDepts(ids);
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
