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
        :header-affixed-top="{ offsetTop: getTableHeaderAffixedTop, container: getLayoutContainer }"
        vertical-align="top"
        row-key="id"
        bordered
        stripe
      >
        <template #top-content>
          <t-row justify="space-between" style="margin-bottom: 10px">
            <t-col flex="0 0 auto"> </t-col>
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
        <template #op="slotProps">
          <a v-auth="'api_scope_setting'" class="t-button-link" @click="handleClickConfig(slotProps)">权限配置</a>
        </template>
      </t-enhanced-table>

      <dialog-authority v-model:visible="dialogVisible" :row-data="currentRow" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { useRequset } from '@/hooks/web/useRequset';
import { noop } from '@/utils';
import { COLUMNS } from '@/viewsBusiness/authority/constant/apiscope/constant';
import { getLazyMenuList } from '@/api/system/menu';
import DialogAuthority from '@/viewsBusiness/authority/components/apiscope/DialogAuthority.vue';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const searchForm = {
  name: '',
  code: '',
};

const formData = ref({ ...searchForm });
const treeConfig = reactive({ childrenKey: 'children', treeNodeColumnIndex: 1 });
const dialogVisible = ref(false);
const currentRow = ref({});

const { fetchData, data, dataLoading } = useRequset(getLazyMenuList, formData.value, noop, false);

onMounted(() => {
  fetchData();
});
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

const handleClickConfig = ({ row }) => {
  currentRow.value = row;
  dialogVisible.value = true;
};
</script>

<style lang="less" scoped></style>
