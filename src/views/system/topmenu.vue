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
              <t-form-item label="菜单名" name="name">
                <t-input v-model="formData.name" clearable placeholder="请输入菜单名" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="菜单编号" name="code">
                <t-input v-model="formData.code" clearable placeholder="请输入菜单编号" />
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
              <t-button v-auth="'topmenu_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button v-auth="'topmenu_delete'" theme="danger" @click="removeCheck">删除</t-button>
              <t-button v-auth="'topmenu_setting'" variant="outline" @click="debounceMenuConfig">菜单配置</t-button>
            </t-col>
          </t-row>
        </template>
        <template #source="{ row }">
          <t-icon :name="row.source" />
        </template>
        <template #op="slotProps">
          <a v-auth="'topmenu_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a v-auth="'topmenu_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a v-auth="'topmenu_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
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

      <t-dialog
        v-model:visible="confirmMenuVisible"
        header="下级菜单配置"
        @cancel="onMenuConfigCancel"
        @confirm="debounceOnMenuConfig"
      >
        <t-tree
          v-model="menuTreeList"
          v-model:expanded="expandedList"
          :data="menuGrantList"
          hover
          :keys="{ value: 'id', label: 'title' }"
          :checkable="true"
        />
      </t-dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MessagePlugin, type PageInfo } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import DialogForm from '@/viewsBusiness/system/components/topmenu/DialogForm.vue';
import { getList, remove, grantTree, getTopTree, grant } from '@/api/system/topmenu';
import { COLUMNS } from '@/viewsBusiness/system/constant/topmenu/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  name: '',
  code: '',
};

const selectedRowKeys = ref([]);
const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');

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

const confirmMenuVisible = ref(false);
const menuTreeList = ref([]);
const menuGrantList = ref([]);
const expandedList = ref([]);

const handleMenuConfig = () => {
  if (!selectedRowKeys.value.length) {
    MessagePlugin.warning('至少选择一条数据');
    return;
  }
  if (selectedRowKeys.value.length !== 1) {
    MessagePlugin.warning('只能选择一条数据');
    return;
  }
  menuTreeList.value = [];
  grantTree()
    .then((res) => {
      menuGrantList.value = res.menu;
      return getTopTree(selectedRowKeys.value.join());
    })
    .then((res) => {
      menuTreeList.value = res.menu;
      confirmMenuVisible.value = true;
    });
};
const debounceMenuConfig = useDebounceFn(handleMenuConfig, 300);
const onConfirmMenuConfig = () => {
  grant(selectedRowKeys.value, menuTreeList.value).then(() => {
    confirmMenuVisible.value = false;
    MessagePlugin.success('操作成功');
  });
};
const onMenuConfigCancel = () => {
  expandedList.value = [];
};
const debounceOnMenuConfig = useDebounceFn(onConfirmMenuConfig, 300);
</script>

<style lang="less" scoped></style>
