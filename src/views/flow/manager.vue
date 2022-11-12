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
              <t-form-item label="流程标识" name="key">
                <t-input v-model="formData.key" clearable placeholder="请输入流程标识" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="流程分类" name="category">
                <t-select
                  v-model="formData.category"
                  :options="flowOptions"
                  :keys="{
                    value: 'dictKey',
                    label: 'dictValue',
                  }"
                  clearable
                  placeholder="请选择流程分类"
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
        :header-affixed-top="{ offsetTop: getTableHeaderAffixedTop, container: getLayoutContainer }"
        vertical-align="top"
        row-key="id"
        bordered
        stripe
        @page-change="rehandlePageChange"
      >
        <template #top-content>
          <t-row justify="space-between" style="margin-bottom: 10px">
            <t-col flex="0 0 auto">
              <t-radio-group v-model="mode" @change="debounceFetchData">
                <t-radio-button value="1">通用流程</t-radio-button>
                <t-radio-button value="2">定制流程</t-radio-button>
              </t-radio-group>
            </t-col>
          </t-row>
        </template>

        <template #op="slotProps">
          <a v-auth="'flow_manager_state'" class="t-button-link" @click="handleState(slotProps)">变更状态</a>
          <a v-auth="'flow_manager_image'" class="t-button-link" @click="handleImage(slotProps)">流程图</a>
          <a v-auth="'flow_manager_remove'" class="t-button-link" @click="handleClickDelete(slotProps)">删除</a>
        </template>
        <template #tenantId="{ row }">
          <t-tag theme="primary" variant="light">{{ row.tenantId ? row.tenantId : '通用' }}</t-tag>
        </template>
        <template #version="{ row }">
          <t-tag theme="primary" variant="light">v{{ row.version }}</t-tag>
        </template>
        <template #suspensionState="{ row }">
          <t-tag theme="primary" variant="light">{{ row.suspensionState === 1 ? '激活' : '挂起' }}</t-tag>
        </template>
      </t-table>

      <t-dialog
        v-model:visible="confirmVisible"
        header="流程变更"
        :confirm-btn="{
          loading: formDisabled,
        }"
        @confirm="onConfirm"
        @closed="onClosed"
      >
        <template #body>
          <t-form
            ref="form2"
            :data="changeFormData"
            :rules="rules"
            :label-width="100"
            :disabled="formDisabled"
            style="padding: 25px 0"
          >
            <t-form-item label="流程状态" name="type">
              <t-select
                v-model="changeFormData.type"
                :options="stateOptions"
                placeholder="请选择流程状态"
                clearable
              ></t-select>
            </t-form-item>
          </t-form>
        </template>
      </t-dialog>

      <flow-image v-model:visible="flowImageVisible" :row-data="flowRow" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MessagePlugin, DialogPlugin, type PageInfo } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import { useDictStore } from '@/store';
import { noop } from '@/utils';
import { getFinalFlowCategory } from '@/utils/helper/flowHelper';
import { managerList, deleteDeployment, changeState } from '@/api/flow/flow';
import { COLUMNS } from '@/viewsBusiness/flow/constant/manager/constant';
import FlowImage from '@/components/flow-image/index.vue';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  key: '',
  category: '',
};

const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const flowOptions = useDictStore().getFlowDict;
const mode = ref('1');

const { fetchData: oldFetchData, data, pagination, dataLoading } = useRequset(managerList, formData.value, noop);

const fetchData = () => {
  oldFetchData({
    ...formData.value,
    category: getFinalFlowCategory(formData.value.category),
    mode: mode.value,
  });
};

onMounted(() => {
  fetchData();
});
const debounceFetchData = useDebounceFn(() => {
  fetchData();
}, 300);

const rehandlePageChange = (pageInfo: PageInfo) => {
  pagination.value = {
    ...pagination.value,
    current: pageInfo.current || 1,
    pageSize: pageInfo.pageSize,
  };
  debounceFetchData();
};

const handleClickDelete = ({ row }) => {
  const DialogInstance = DialogPlugin.confirm({
    header: '提示',
    theme: 'warning',
    body: '确认删除当前所选数据?',
    onConfirm: useDebounceFn(async () => {
      await deleteDeployment(row.deploymentId);
      MessagePlugin.success('删除成功');
      DialogInstance.destroy();
      debounceFetchData();
    }, 300),
  });
};

const INITIAL_DATA = {
  type: '',
};
const rules = ref({
  type: [{ required: true, message: '请选择流程状态', type: 'error', trigger: 'change' }],
});

const stateOptions = [
  {
    value: 'active',
    label: '激活',
  },
  {
    value: 'suspend',
    label: '挂起',
  },
];
const formDisabled = ref(false);
const changeFormData = ref({ ...INITIAL_DATA });
const form2 = ref(null);
const deleteProcessId = ref('');

const onConfirm = () => {
  form2.value?.validate({ fields: ['type'] }).then(async (res) => {
    if (res === true) {
      formDisabled.value = true;
      try {
        await changeState({ processId: deleteProcessId.value, state: changeFormData.value.type });
        confirmVisible.value = false;
        formDisabled.value = false;
        MessagePlugin.success('变更成功');
        debounceFetchData();
      } catch (error) {
        formDisabled.value = false;
      }
    }
  });
};

const onClosed = () => {
  form2.value?.reset();
  deleteProcessId.value = '';
};

const handleState = ({ row }) => {
  deleteProcessId.value = row.id;
  confirmVisible.value = true;
};

const flowImageVisible = ref(false);
const flowRow = ref({});

const handleImage = ({ row }) => {
  flowRow.value = row;
  flowImageVisible.value = true;
};
</script>

<style lang="less" scoped></style>
