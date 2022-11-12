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
              <t-form-item label="租户ID" name="tenantId">
                <t-input v-model="formData.tenantId" clearable placeholder="请输入租户ID" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="租户名称" name="tenantName">
                <t-input v-model="formData.tenantName" clearable placeholder="请输入租户名称" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="联系人" name="linkman">
                <t-input v-model="formData.linkman" clearable placeholder="请输入联系人" />
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
              <t-button v-auth="'tenant_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
              <t-button v-auth="'tenant_delete'" theme="danger" @click="removeCheck">删除</t-button>
              <t-tooltip
                v-if="hasRole('administrator')"
                content="给租户配置账号额度、过期时间等授权信息"
                placement="top"
                show-arrow
              >
                <t-button variant="outline" @click="handleSetting">授权配置</t-button>
              </t-tooltip>
              <t-tooltip
                v-if="hasRole('administrator')"
                content="给租户配置独立数据源以实现数据库隔离"
                placement="top"
                show-arrow
              >
                <t-button variant="outline" @click="handleDatasource">数据源配置</t-button>
              </t-tooltip>
              <t-tooltip
                v-if="hasRole('administrator')"
                content="将菜单产品包与租户配置绑定"
                placement="top"
                show-arrow
              >
                <t-button variant="outline" @click="handlePackage">产品包配置</t-button>
              </t-tooltip>
              <t-tooltip
                v-if="hasRole('administrator')"
                content="将自定义的菜单集合定制为租户绑定的菜单产品包"
                placement="top"
                show-arrow
              >
                <t-button variant="outline" @click="handlePackageSetting">产品包管理</t-button>
              </t-tooltip>
            </t-col>
          </t-row>
        </template>
        <template #accountNumber="{ row }">
          <t-tag theme="primary" variant="light">{{ row.accountNumber > 0 ? row.accountNumber : '不限制' }}</t-tag>
        </template>
        <template #expireTime="{ row }">
          <t-tag theme="primary" variant="light">{{ row.expireTime ? row.expireTime : '不限制' }}</t-tag>
        </template>
        <template #op="slotProps">
          <a v-auth="'tenant_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
          <a v-auth="'tenant_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
          <a v-auth="'tenant_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
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

      <dialog-setting v-model:visible="dialogSettingVisible" v-model:editId="editId" @submit="debounceFetchData" />
      <dialog-datasource v-model:visible="datasourceVisible" v-model:editId="editId" @submit="debounceFetchData" />
      <dialog-package
        v-model:visible="packageVisible"
        v-model:editId="editId"
        :tenant-id="tenantId"
        @submit="debounceFetchData"
      />
      <dialog-package-manage v-model:visible="packageManageVisible" />
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
import { usePermission } from '@/hooks/web/usePermission';
import DialogForm from '@/viewsBusiness/system/components/tenant/DialogForm.vue';
import { getList, remove } from '@/api/system/tenant';
import { COLUMNS } from '@/viewsBusiness/system/constant/tenant/constant';
import DialogSetting from '@/viewsBusiness/system/components/tenant/DialogSetting.vue';
import DialogDatasource from '@/viewsBusiness/system/components/tenant/DialogDatasource.vue';
import DialogPackage from '@/viewsBusiness/system/components/tenant/DialogPackage.vue';
import DialogPackageManage from '@/viewsBusiness/system/components/tenant/tenantPackage/DialogList.vue';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();
const { hasRole } = usePermission();

const searchForm = {
  tenantId: '',
  tenantName: '',
  linkman: '',
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

const dialogSettingVisible = ref(false);
const datasourceVisible = ref(false);
const packageVisible = ref(false);
const packageManageVisible = ref(false);
const tenantId = ref('');

const handleSetting = useDebounceFn(() => {
  if (!selectedRowKeys.value.length) {
    MessagePlugin.error('至少选择一条数据');
    return;
  }
  editId.value = selectedRowKeys.value.join(',');
  dialogSettingVisible.value = true;
}, 300);

const handleDatasource = useDebounceFn(() => {
  if (!selectedRowKeys.value.length) {
    MessagePlugin.error('至少选择一条数据');
    return;
  }
  if (selectedRowKeys.value.length !== 1) {
    MessagePlugin.error('只能选择一条数据');
    return;
  }
  editId.value = selectedRowKeys.value.join(',');
  datasourceVisible.value = true;
}, 300);
const handlePackage = useDebounceFn(() => {
  if (!selectedRowKeys.value.length) {
    MessagePlugin.error('至少选择一条数据');
    return;
  }
  if (selectedRowKeys.value.length !== 1) {
    MessagePlugin.error('只能选择一条数据');
    return;
  }
  editId.value = selectedRowKeys.value.join(',');
  const findRow = data.value.find((item) => item.id === editId.value);
  tenantId.value = findRow.tenantId;
  packageVisible.value = true;
}, 300);
const handlePackageSetting = useDebounceFn(() => {
  packageManageVisible.value = true;
}, 300);
</script>

<style lang="less" scoped></style>
