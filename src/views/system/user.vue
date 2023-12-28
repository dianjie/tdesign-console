<template>
  <t-row :class="tableVar" :gutter="[16, 24]">
    <t-col :span="2">
      <t-input v-model="filterText" placeholder="请输入关键词" clearable @change="onInput">
        <template #suffix-icon>
          <search-icon size="20px" />
        </template>
      </t-input>
      <t-tree
        style="margin-top: 14px"
        :data="deptTree"
        hover
        :activable="true"
        :keys="{ value: 'id', label: 'deptName' }"
        :filter="handleFilterByText"
        @active="onTreeActive"
      />
    </t-col>
    <t-col :span="10">
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
                <t-form-item label="登录账号" name="account">
                  <t-input v-model="formData.account" clearable placeholder="请输入登录账号" />
                </t-form-item>
              </t-col>
              <t-col :span="4">
                <t-form-item label="用户姓名" name="realName">
                  <t-input v-model="formData.realName" clearable placeholder="请输入用户姓名" />
                </t-form-item>
              </t-col>
              <t-col :span="4">
                <t-form-item label="用户平台" name="userType">
                  <t-select
                    v-model="formData.userType"
                    :options="userTypeOptions"
                    :keys="{
                      value: 'dictKey',
                      label: 'dictValue',
                    }"
                    clearable
                    placeholder="请选择用户平台"
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
                <t-button v-auth="'user_add'" @click="handleAction({ row: {} }, 'add')">新增</t-button>
                <t-button v-auth="'user_delete'" theme="danger" @click="removeCheck">删除</t-button>
                <t-button v-auth="'user_role'" variant="outline" @click="handleGrant">角色配置</t-button>
                <t-button v-auth="'user_reset'" variant="outline" @click="handleReset">密码重置</t-button>
                <t-button v-if="hasRole(['administrator', 'admin'])" variant="outline" @click="handlePlatform">
                  平台配置
                </t-button>
                <t-button v-if="hasRole(['administrator', 'admin'])" variant="outline" @click="handleUnlock">
                  账号解封
                </t-button>
                <t-button v-if="hasRole(['administrator', 'admin'])" variant="outline" @click="handleImport">
                  导入
                </t-button>
                <t-button v-if="hasRole(['administrator', 'admin'])" variant="outline" @click="handleExport">
                  导出
                </t-button>
              </t-col>
            </t-row>
          </template>
          <template #op="slotProps">
            <a v-auth="'user_view'" class="t-button-link" @click="handleAction(slotProps, 'view')">查看</a>
            <a v-auth="'user_edit'" class="t-button-link" @click="handleAction(slotProps, 'edit')">编辑</a>
            <a v-auth="'user_delete'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
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

        <dialog-role
          v-model:visible="dialogRoleVisible"
          v-model:editId="editId"
          :tenant-id="tenantId"
          @submit="debounceFetchData"
        />

        <dialog-platform v-model:visible="platformManageVisible" :dept-id="currentDeptId" />

        <dialog-import v-model:visible="importUserVisible" @submit="debounceFetchData" />
      </div>
    </t-col>
  </t-row>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { SearchIcon } from 'tdesign-icons-vue-next';
import { DialogPlugin, MessagePlugin, type PageInfo, type SelectOptions } from 'tdesign-vue-next';
import { onBeforeMount, provide, ref } from 'vue';

import { getLazyList } from '@/api/system/dept';
import { getDictData } from '@/api/system/dict';
import { exportUser, getList, remove, resetPassword, unlock } from '@/api/system/user';
import { useSetting } from '@/hooks/setting/useSetting';
import { useDesign } from '@/hooks/web/useDesign';
import { usePermission } from '@/hooks/web/usePermission';
import { useRequset } from '@/hooks/web/useRequset';
import { changeDictDataType } from '@/utils';
import { downloadByData } from '@/utils/file/download';
import DialogForm from '@/viewsBusiness/system/components/user/DialogForm.vue';
import DialogImport from '@/viewsBusiness/system/components/user/DialogImport.vue';
import DialogRole from '@/viewsBusiness/system/components/user/DialogRole.vue';
import DialogPlatform from '@/viewsBusiness/system/components/user/platfrom/DialogList.vue';
import { COLUMNS } from '@/viewsBusiness/system/constant/user/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();
const { hasRole } = usePermission();

const searchForm = {
  account: '',
  realName: '',
  userType: '',
};

const selectedRowKeys = ref([]);
const selectedRowData = ref([]);
const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const formDialogVisible = ref(false);
const editId = ref('');
const formActionType = ref('');

const filterText = ref('');
const handleFilterByText = ref(null);
const currentDeptId = ref('');
const deptTree = ref([]);

const userTypeOptions = ref([]);

provide('userTypeOptions', userTypeOptions);

async function getOptions() {
  const dict = await getDictData('user_type');
  userTypeOptions.value = changeDictDataType(dict);
}

const onInput = useDebounceFn(() => {
  handleFilterByText.value = (node: any) => {
    return node.label.indexOf(filterText.value) >= 0;
  };
}, 350);

const {
  fetchData: oldFetchData,
  data,
  pagination,
  dataLoading,
} = useRequset(getList, {}, () => {
  selectedRowKeys.value = [];
});

const fetchData = () => {
  oldFetchData({ ...formData.value, deptId: currentDeptId.value });
};

onBeforeMount(() => {
  getLazyList({ parentId: '' }).then((res) => {
    deptTree.value = res;
  });
  fetchData();
  getOptions();
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

const rehandleSelectChange = (value: string[], options: SelectOptions<any>) => {
  selectedRowKeys.value = value;
  selectedRowData.value = options.selectedRowData;
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

const onTreeActive = useDebounceFn((value: string[]) => {
  currentDeptId.value = value.join();
  pagination.value = {
    ...pagination.value,
    current: 1,
  };
  debounceFetchData();
}, 300);

const dialogRoleVisible = ref(false);
const tenantId = ref('');
const platformManageVisible = ref(false);
const importUserVisible = ref(false);

const handleGrant = useDebounceFn(() => {
  if (!selectedRowKeys.value.length) {
    MessagePlugin.error('至少选择一条数据');
    return;
  }
  const firstTenantId = selectedRowData.value[0].tenantId;
  let tenantIdSame = true;
  if (selectedRowKeys.value.length !== 1) {
    tenantIdSame = selectedRowData.value.every((item) => item.tenantId === firstTenantId);
    if (!tenantIdSame) {
      MessagePlugin.error('批量设置，需要勾选相同租户的用户');
      return;
    }
  }
  tenantId.value = firstTenantId;
  editId.value = selectedRowKeys.value.join(',');
  dialogRoleVisible.value = true;
}, 300);

const handleReset = useDebounceFn(() => {
  if (!selectedRowKeys.value.length) {
    MessagePlugin.error('至少选择一条数据');
    return;
  }
  const DialogInstance = DialogPlugin.confirm({
    header: '密码重置',
    theme: 'warning',
    body: '确定将选择账号密码重置为123456?',
    onConfirm: useDebounceFn(() => {
      resetPassword(selectedRowKeys.value).then(() => {
        MessagePlugin.success('操作成功!');
        DialogInstance.destroy();
      });
    }, 300),
  });
}, 300);

const handlePlatform = useDebounceFn(() => {
  platformManageVisible.value = true;
}, 300);

const handleUnlock = useDebounceFn(() => {
  if (!selectedRowKeys.value.length) {
    MessagePlugin.error('至少选择一条数据');
    return;
  }
  const DialogInstance = DialogPlugin.confirm({
    header: '账号解封',
    theme: 'warning',
    body: '确定将选择账号解封?',
    onConfirm: useDebounceFn(() => {
      unlock(selectedRowKeys.value).then(() => {
        MessagePlugin.success('操作成功!');
        DialogInstance.destroy();
      });
    }, 300),
  });
}, 300);

const handleImport = useDebounceFn(() => {
  importUserVisible.value = true;
}, 300);

const handleExport = useDebounceFn(() => {
  const DialogInstance = DialogPlugin.confirm({
    header: '账号导出',
    theme: 'info',
    body: '是否导出用户数据?',
    onConfirm: useDebounceFn(() => {
      exportUser(formData.value).then((res) => {
        downloadByData(res, `用户数据表${+new Date()}.xlsx`);
        MessagePlugin.success('操作成功!');
        DialogInstance.destroy();
      });
    }, 300),
  });
}, 300);
</script>

<style lang="less" scoped></style>
