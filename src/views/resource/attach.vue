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
              <t-form-item label="附件域名" name="domainUrl">
                <t-input v-model="formData.domainUrl" clearable placeholder="请输入附件域名" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="附件名称" name="name">
                <t-input v-model="formData.name" clearable placeholder="请输入附件名称" />
              </t-form-item>
            </t-col>
            <t-col :span="4">
              <t-form-item label="附件原名" name="originalName">
                <t-input v-model="formData.originalName" clearable placeholder="请输入附件原名" />
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
              <t-button v-auth="'attach_upload'" @click="handleUpload">上传</t-button>
              <t-button v-auth="'attach_delete'" theme="danger" @click="removeCheck">删除</t-button>
            </t-col>
          </t-row>
        </template>
        <template #op="slotProps">
          <a v-auth="'attach_download'" class="t-button-link" @click="handleDownload(slotProps)">下载</a>
        </template>
      </t-table>

      <t-dialog v-model:visible="confirmVisible" header="确认删除当前所选数据？" @confirm="onConfirmDelete" />

      <dialog-upload v-model:visible="debugVisible" />
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
import DialogUpload from '@/viewsBusiness/resource/components/attach/DialogUpload.vue';
import { getList, remove } from '@/api/resource/attach';
import { COLUMNS } from '@/viewsBusiness/resource/constant/attach/constant';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  domainUrl: '',
  name: '',
  originalName: '',
};

const selectedRowKeys = ref([]);
const formData = ref({ ...searchForm });
const confirmVisible = ref(false);
const debugVisible = ref(false);

const { fetchData, data, pagination, dataLoading } = useRequset(getList, formData.value, () => {
  selectedRowKeys.value = [];
});

onMounted(() => {
  fetchData();
});
const handleDownload = ({ row }) => {
  window.open(`${row.link}`);
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

const removeCheck = () => {
  if (!selectedRowKeys.value.length) return;
  confirmVisible.value = true;
};

const onRemove = async (ids: string[]) => {
  try {
    await remove(ids);
    confirmVisible.value = false;
    MessagePlugin.success('删除成功');
    debounceFetchData();
  } catch (error) {
    confirmVisible.value = false;
  }
};
const debounceRemove = useDebounceFn(onRemove, 300);

const onConfirmDelete = () => {
  debounceRemove(selectedRowKeys.value);
};

const handleUpload = useDebounceFn(() => {
  debugVisible.value = true;
}, 300);
</script>

<style lang="less" scoped></style>
