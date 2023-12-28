<template>
  <div :class="tableVar">
    <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
      <t-row :gutter="[0, 28]">
        <t-col :span="6">
          <t-form-item label="流程类型" name="categoryValue">
            <t-select
              v-model="formData.categoryValue"
              :options="flowOptions"
              :keys="{
                value: 'dictKey',
                label: 'dictValue',
              }"
              clearable
              placeholder="请选择流程类型"
            />
          </t-form-item>
        </t-col>
        <t-col :span="12">
          <t-form-item label="流程模式" name="flowMode">
            <t-radio-group v-model="formData.flowMode">
              <t-radio :value="1">通用流程</t-radio>
              <t-radio :value="2">定制流程</t-radio>
            </t-radio-group>
          </t-form-item>
        </t-col>
        <t-col v-if="formData.flowMode === 2" :span="6">
          <t-form-item label="所属租户" name="tenantId">
            <t-select
              v-model="formData.tenantId"
              multiple
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
        <t-col :span="12">
          <t-form-item label="附件上传" name="attachFile">
            <t-upload
              ref="uploadRef"
              v-model="formData.attachFile"
              tips="请上传 bpmn20.xml 标准格式文件"
              :auto-upload="false"
              :request-method="requestMethod"
              :disabled="submiting"
              @fail="handleFail"
              @success="handleSuccess"
            ></t-upload>
          </t-form-item>
        </t-col>
        <t-col :span="12">
          <t-form-item>
            <t-button theme="primary" :disabled="submiting" type="submit">部署</t-button>
          </t-form-item>
        </t-col>
      </t-row>
    </t-form>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { MessagePlugin } from 'tdesign-vue-next';
import { onBeforeMount, ref, unref } from 'vue';

import { deployUpload } from '@/api/flow/flow';
import { getTenantSelectList } from '@/api/system/tenant';
import { useDesign } from '@/hooks/web/useDesign';
import { useDictStore } from '@/store';
import { getFinalFlowCategory } from '@/utils/helper/flowHelper';

const { tableVar } = useDesign();

const flowOptions = useDictStore().getFlowDict;
const tenantOptions = ref([]);
async function getOptions() {
  const tenant = await getTenantSelectList();
  tenantOptions.value = tenant;
}

onBeforeMount(() => {
  getOptions();
});

const INITIAL_DATA = {
  categoryValue: '',
  flowMode: 1,
  tenantId: [],
  attachFile: [],
};

const rules = ref({
  categoryValue: [{ required: true, message: '请选择流程类型', type: 'error', trigger: 'change' }],
  flowMode: [{ required: true, message: '请选择流程模式', type: 'error', trigger: 'change' }],
  tenantId: [{ required: true, message: '请选择所属租户', type: 'error', trigger: 'change' }],
  attachFile: [{ required: true, message: '请选择附件', type: 'error', trigger: 'change' }],
});

const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);
const uploadRef = ref();

const onSubmit = useDebounceFn(({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    uploadRef.value.uploadFiles();
  } else {
    MessagePlugin.warning(firstError);
  }
}, 300);

const handleFail = ({ file }) => {
  MessagePlugin.error(`流程 ${file.name} 部署失败`);
  submiting.value = false;
};

// 上传接口，可根据实际情况自己修改
const requestMethod = async (param) => {
  try {
    const { categoryValue, flowMode, tenantId } = unref(formData);
    const otherData = {
      tenantId: flowMode === 2 ? tenantId.join(',') : '',
    };
    const data = await deployUpload(getFinalFlowCategory(categoryValue), otherData.tenantId, param.raw);
    return { status: 'success', response: { ...data, url: 'success' } };
  } catch (error) {
    return { status: 'fail', error: '部署失败' };
  }
};

const handleSuccess = () => {
  MessagePlugin.success('部署成功');
  submiting.value = false;
};
</script>
