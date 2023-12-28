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
              <t-form-item label="角色名称" name="roleName">
                <t-input v-model="formData.roleName" clearable placeholder="请输入角色名称" />
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
              <t-form-item label="角色别名" name="roleAlias">
                <t-input v-model="formData.roleAlias" clearable placeholder="请输入角色别名" />
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
              <t-button v-auth="'role_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button v-auth="'role_delete'" theme="danger" @click="removeCheck">删除</t-button>
              <t-button v-if="hasRole(['administrator', 'admin'])" variant="outline" @click="debounceAuthConfig">
                权限配置
              </t-button>
            </t-col>
          </t-row>
        </template>
        <template #tenantId="{ row }">
          {{ formatIdName(tenantOptions, row.tenantId, { id: 'tenantId', name: 'tenantName' }) }}
        </template>
        <template #op="slotProps">
          <a v-auth="'role_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a v-auth="'role_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a v-auth="'role_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
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
        @submit="dialogFormSubmit"
      />

      <t-dialog
        v-model:visible="confirmAuthVisible"
        header="角色权限配置"
        @cancel="onAuthConfigCancel"
        @confirm="debounceOnAuthConfig"
      >
        <t-tabs :default-value="1">
          <t-tab-panel :value="1" label="菜单权限">
            <t-tree
              v-model="menuTreeList"
              v-model:expanded="expandedMenuList"
              :data="menuGrantList"
              hover
              :keys="{ value: 'id', label: 'title' }"
              :checkable="true"
              style="margin-top: 15px"
            />
          </t-tab-panel>
          <t-tab-panel :value="2" label="数据权限">
            <t-tree
              v-model="dataScopeTreeList"
              v-model:expanded="expandedDataScopeList"
              :data="dataScopeGrantList"
              hover
              :keys="{ value: 'id', label: 'title' }"
              :checkable="true"
              style="margin-top: 15px"
            />
          </t-tab-panel>
          <t-tab-panel :value="3" label="接口权限">
            <t-tree
              v-model="apiScopeTreeList"
              v-model:expanded="expandedApiScopeList"
              :data="apiScopeGrantList"
              hover
              :keys="{ value: 'id', label: 'title' }"
              :checkable="true"
              style="margin-top: 15px"
            />
          </t-tab-panel>
        </t-tabs>
      </t-dialog>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { MessagePlugin } from 'tdesign-vue-next';
import { onMounted, provide, reactive, ref, unref } from 'vue';

import { getList, getRole, grant, grantTree, remove } from '@/api/system/role';
import { getTenantSelectList } from '@/api/system/tenant';
import { useSetting } from '@/hooks/setting/useSetting';
import { useDesign } from '@/hooks/web/useDesign';
import { usePermission } from '@/hooks/web/usePermission';
import { useRequset } from '@/hooks/web/useRequset';
import type { TreeDefaultRow } from '@/types/interface';
import { formatIdName } from '@/utils';
import DialogForm from '@/viewsBusiness/authority/components/role/DialogForm.vue';
import { COLUMNS } from '@/viewsBusiness/authority/constant/role/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();
const { hasRole } = usePermission();

const searchForm = {
  roleAlias: '',
  tenantId: '',
  roleName: '',
};

const treeConfig = reactive({ childrenKey: 'children', treeNodeColumnIndex: 2 });
const enhancedTable = ref(null);
const currentRow = ref<TreeDefaultRow>({});

const selectedRowKeys = ref([]);
const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');

const { fetchData, data, dataLoading } = useRequset(
  getList,
  formData.value,
  () => {
    selectedRowKeys.value = [];
  },
  false,
);

const tenantOptions = ref([]);

async function getOptions() {
  const tenant = await getTenantSelectList();
  tenantOptions.value = tenant;
}

provide('tenantOptions', tenantOptions);

onMounted(() => {
  getOptions();
  fetchData();
});
const handleAction = ({ row }, type: string) => {
  currentRow.value = row;
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

const confirmAuthVisible = ref(false);
// 菜单权限
const menuTreeList = ref([]);
const menuGrantList = ref([]);
const expandedMenuList = ref([]);

// 数据权限
const dataScopeTreeList = ref([]);
const dataScopeGrantList = ref([]);
const expandedDataScopeList = ref([]);

// 接口权限
const apiScopeTreeList = ref([]);
const apiScopeGrantList = ref([]);
const expandedApiScopeList = ref([]);

const handleAuthConfig = () => {
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
      dataScopeGrantList.value = res.dataScope;
      apiScopeGrantList.value = res.apiScope;
      return getRole(selectedRowKeys.value.join());
    })
    .then((res) => {
      menuTreeList.value = res.menu;
      dataScopeTreeList.value = res.dataScope;
      apiScopeTreeList.value = res.apiScope;
      confirmAuthVisible.value = true;
    });
};
const debounceAuthConfig = useDebounceFn(handleAuthConfig, 300);
const onConfirmAuthConfig = () => {
  grant(selectedRowKeys.value, menuTreeList.value, dataScopeTreeList.value, apiScopeTreeList.value).then(() => {
    confirmAuthVisible.value = false;
    MessagePlugin.success('操作成功');
  });
};
const onAuthConfigCancel = () => {
  expandedMenuList.value = [];
  expandedDataScopeList.value = [];
  expandedApiScopeList.value = [];
};
const debounceOnAuthConfig = useDebounceFn(onConfirmAuthConfig, 300);

const dialogFormSubmit = (data: any) => {
  const { parentId } = unref(currentRow.value);
  if (data.parentId !== parentId) {
    fetchData();
  } else {
    data.id && enhancedTable.value?.setData(data.id, { ...currentRow.value, ...data });
  }
  currentRow.value = {};
};
</script>

<style lang="less" scoped></style>
