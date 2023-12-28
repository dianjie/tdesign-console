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
              <t-form-item label="岗位类型" name="category">
                <t-select
                  v-model="formData.category"
                  :options="postCategoryOptions"
                  :keys="{
                    value: 'dictKey',
                    label: 'dictValue',
                  }"
                  clearable
                  placeholder="请选择岗位类型"
                />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="岗位编号" name="postCode">
                <t-input v-model="formData.postCode" clearable placeholder="请输入岗位编号" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="岗位名称" name="postName">
                <t-input v-model="formData.postName" clearable placeholder="请输入岗位名称" />
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
        :header-affixed-top="{ offsetTop: getTableHeaderAffixedTop, container: getLayoutContainer }"
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
              <t-button v-auth="'post_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button v-auth="'post_delete'" theme="danger" @click="removeCheck">删除</t-button>
            </t-col>
          </t-row>
        </template>
        <template #tenantId="{ row }">
          {{ formatIdName(tenantOptions, row.tenantId, { id: 'tenantId', name: 'tenantName' }) }}
        </template>
        <template #category="{ row }">
          {{ formatDictValue(postCategoryOptions, row.category) }}
        </template>
        <template #op="slotProps">
          <a v-auth="'post_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a v-auth="'post_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a v-auth="'post_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
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
  </div>
</template>
<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { MessagePlugin, type PageInfo } from 'tdesign-vue-next';
import { onBeforeMount, onMounted, provide, ref } from 'vue';

import { getDictData } from '@/api/system/dict';
import { getList, remove } from '@/api/system/post';
import { getTenantSelectList } from '@/api/system/tenant';
import { useSetting } from '@/hooks/setting/useSetting';
import { useDesign } from '@/hooks/web/useDesign';
import { useRequset } from '@/hooks/web/useRequset';
import { changeDictDataType, formatDictValue, formatIdName } from '@/utils';
import DialogForm from '@/viewsBusiness/system/components/post/DialogForm.vue';
import { COLUMNS } from '@/viewsBusiness/system/constant/post/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  category: '',
  postCode: '',
  postName: '',
};

const selectedRowKeys = ref([]);
const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');

const tenantOptions = ref([]);
const postCategoryOptions = ref([]);

async function getOptions() {
  const tenant = await getTenantSelectList();
  const dict = await getDictData('post_category');
  tenantOptions.value = tenant;
  postCategoryOptions.value = changeDictDataType(dict);
}

provide('postCategoryOptions', postCategoryOptions);

onBeforeMount(() => {
  getOptions();
});

const { fetchData, data, pagination, dataLoading } = useRequset(getList, formData.value, () => {
  selectedRowKeys.value = [];
});

onMounted(() => {
  fetchData();
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
</script>

<style lang="less" scoped></style>
