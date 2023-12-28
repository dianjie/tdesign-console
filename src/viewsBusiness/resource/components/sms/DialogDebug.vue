<template>
  <t-dialog v-model:visible="formVisible" header="手机短信发送调试" :width="780" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="资源编号" name="code">
              <t-input v-model="formData.code" placeholder="请输入资源编号" clearable disabled />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="发送手机" name="phones">
              <t-input v-model="formData.phones" placeholder="请输入发送手机" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="发送参数" name="params">
              <t-input v-model="formData.params" placeholder="例: {'code':2333,'title':'通知标题'}" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item style="float: right">
              <t-button variant="outline" @click="onClickCloseBtn">取消</t-button>
              <t-button theme="primary" :disabled="submiting" type="submit">提交</t-button>
            </t-form-item>
          </t-col>
        </t-row>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { MessagePlugin } from 'tdesign-vue-next';
import { ref, watch } from 'vue';

import { sendMessage } from '@/api/resource/sms';

const INITIAL_DATA = {
  code: '',
  phones: '',
  params: '',
};

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  code: {
    type: String,
    default: '',
  },
});

const rules = ref({
  phones: [{ required: true, message: '请输入发送手机', type: 'error', trigger: 'blur' }],
  params: [{ required: true, message: '请输入发送参数', type: 'error', trigger: 'blur' }],
});

const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);

const emit = defineEmits(['update:visible', 'submit']);

const onSubmit = useDebounceFn(({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    sendMessage(formData.value)
      .then(() => {
        emit('submit', formData.value);
        MessagePlugin.success('提交成功');
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
  formData.value = { ...INITIAL_DATA };
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
    formData.value.code = props.code;
    formVisible.value = val;
  },
);
</script>
