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
              <t-form-item label="分类" name="category">
                <t-select
                  v-model="formData.category"
                  :options="categoryOptions"
                  :keys="{
                    value: 'dictKey',
                    label: 'dictValue',
                  }"
                  clearable
                  placeholder="请选择分类"
                />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="资源编号" name="ossCode">
                <t-input v-model="formData.ossCode" clearable placeholder="请输入资源编号" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="accessKey" name="accessKey">
                <t-input v-model="formData.accessKey" clearable placeholder="请输入accessKey" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="是否启用" name="status">
                <t-select
                  v-model="formData.status"
                  :options="yesNoOptions"
                  :keys="{
                    value: 'dictKey',
                    label: 'dictValue',
                  }"
                  clearable
                  placeholder="请选择是否启用"
                />
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
              <t-button v-auth="'oss_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button v-auth="'oss_delete'" theme="danger" @click="removeCheck">删除</t-button>
            </t-col>
          </t-row>
        </template>
        <template #category="{ row }">
          {{ formatDictValue(categoryOptions, row.category) }}
        </template>
        <template #op="slotProps">
          <a v-auth="'oss_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a v-auth="'oss_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a v-auth="'oss_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
          <a v-if="hasRole(['administrator', 'admin'])" class="t-button-link" @click="handleDebug(slotProps)">调试</a>
          <a v-auth="'oss_enable'" class="t-button-link" @click="handleEnable(slotProps)">启用</a>
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

      <dialog-debug v-model:visible="debugBox" :code="debugCode" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { DialogPlugin, MessagePlugin, type PageInfo } from 'tdesign-vue-next';
import { onMounted, provide, ref } from 'vue';

import { enableOss, getOssList, removeOss } from '@/api/resource/oss';
import { getDictData } from '@/api/system/dict';
import { useSetting } from '@/hooks/setting/useSetting';
import { useDesign } from '@/hooks/web/useDesign';
import { usePermission } from '@/hooks/web/usePermission';
import { useRequset } from '@/hooks/web/useRequset';
import { changeDictDataType, formatDictValue } from '@/utils';
import DialogDebug from '@/viewsBusiness/resource/components/oss/DialogDebug.vue';
import DialogForm from '@/viewsBusiness/resource/components/oss/DialogForm.vue';
import { COLUMNS } from '@/viewsBusiness/resource/constant/oss/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();
const { hasRole } = usePermission();

const searchForm = {
  category: '',
  ossCode: '',
  accessKey: '',
  status: undefined,
};

const selectedRowKeys = ref([]);
const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');

const { fetchData, data, pagination, dataLoading } = useRequset(getOssList, formData.value, () => {
  selectedRowKeys.value = [];
});

const categoryOptions = ref([]);
const yesNoOptions = ref([]);
provide('categoryOptions', categoryOptions);
async function getOptions() {
  const dict = await getDictData('oss');
  const yesNoDict = await getDictData('yes_no');
  categoryOptions.value = changeDictDataType(dict);
  yesNoOptions.value = changeDictDataType(yesNoDict);
}

onMounted(() => {
  getOptions();
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
    await removeOss(ids);
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

const debugBox = ref(false);
const debugCode = ref('');
const handleDebug = useDebounceFn(({ row }) => {
  debugCode.value = row.ossCode;
  debugBox.value = true;
}, 300);

const handleEnable = useDebounceFn(({ row }) => {
  const DialogInstance = DialogPlugin.confirm({
    header: '提示',
    theme: 'info',
    body: '是否确定启用这条配置?',
    onConfirm: useDebounceFn(() => {
      enableOss(row.id).then(() => {
        MessagePlugin.success('启用成功');
        DialogInstance.destroy();
        debounceFetchData();
      });
    }, 300),
  });
}, 300);
</script>

<style lang="less" scoped></style>
