<template>
  <t-dialog v-model:visible="formVisible" header="流程部署" :width="580" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
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
          <t-col v-if="formData.flowMode === 2" :span="12">
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
            <t-form-item style="float: right">
              <t-button variant="outline" @click="onClickCloseBtn">关闭</t-button>
              <t-button theme="primary" :disabled="submiting" type="submit">部署</t-button>
            </t-form-item>
          </t-col>
        </t-row>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, unref, watch } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import { useDictStore } from '@/store';
import { getTenantSelectList } from '@/api/system/tenant';
import { deployModel } from '@/api/flow/flow';
import { getFinalFlowCategory } from '@/utils/helper/flowHelper';

const isGetOption = ref(false);
const flowOptions = useDictStore().getFlowDict;
const tenantOptions = ref([]);
async function getOptions() {
  const tenant = await getTenantSelectList();
  tenantOptions.value = tenant;
  isGetOption.value = true;
}

const INITIAL_DATA = {
  categoryValue: '',
  flowMode: 1,
  tenantId: [],
};

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  modelId: {
    type: String,
    default: '',
  },
});

const rules = ref({
  categoryValue: [{ required: true, message: '请选择流程类型', type: 'error', trigger: 'change' }],
  flowMode: [{ required: true, message: '请选择流程模式', type: 'error', trigger: 'change' }],
  tenantId: [{ required: true, message: '请选择所属租户', type: 'error', trigger: 'change' }],
});

const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);

const emit = defineEmits(['update:visible', 'submit']);

const onSubmit = useDebounceFn(({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const { categoryValue, flowMode, tenantId } = unref(formData);
    const subimtData = {
      modelId: props.modelId,
      category: getFinalFlowCategory(categoryValue),
      tenantIds: flowMode === 2 ? tenantId.join(',') : '',
    };
    deployModel(subimtData)
      .then(() => {
        emit('submit', subimtData);
        MessagePlugin.success('部署成功');
        formVisible.value = false;
      })
      .finally(() => {
        submiting.value = false;
      });
  } else {
    MessagePlugin.warning(firstError);
  }
}, 300);

const onClosed = () => {
  form.value?.reset();
};

const onClickCloseBtn = () => {
  formVisible.value = false;
};

watch(
  () => formVisible.value,
  (val) => {
    emit('update:visible', val);
  },
);

watch(
  () => props.visible,
  (val) => {
    if (!isGetOption.value) {
      getOptions();
    }
    formVisible.value = val;
  },
);
</script>
