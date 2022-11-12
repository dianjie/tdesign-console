<template>
  <t-dialog v-model:visible="formVisible" header="对象存储上传调试" :width="580" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="附件上传" name="attachFile">
              <t-upload
                ref="uploadRef"
                v-model="formData.attachFile"
                :auto-upload="false"
                :request-method="requestMethod"
                :disabled="submiting"
                @fail="handleFail"
                @success="handleSuccess"
              ></t-upload>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item style="float: right">
              <t-button variant="outline" @click="onClickCloseBtn">关闭</t-button>
              <t-button theme="primary" :disabled="submiting" type="submit">上传</t-button>
            </t-form-item>
          </t-col>
        </t-row>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import { uploadAttachOss } from '@/api/resource/oss';

const INITIAL_DATA = {
  attachFile: [],
};

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const rules = ref({
  attachFile: [{ required: true, message: '请选择附件', type: 'error', trigger: 'change' }],
});

const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);
const uploadRef = ref();

const emit = defineEmits(['update:visible', 'submit']);

const onSubmit = useDebounceFn(({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    uploadRef.value.uploadFiles();
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
    formVisible.value = val;
  },
);

const handleFail = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 上传失败`);
  submiting.value = false;
};

// 上传接口，可根据实际情况自己修改
const requestMethod = async (param) => {
  try {
    const data = await uploadAttachOss({ file: param.raw });
    return { status: 'success', response: { ...data, url: data.link } };
  } catch (error) {
    return { status: 'fail', error: '上传失败' };
  }
};

const handleSuccess = () => {
  emit('submit', {});
  MessagePlugin.success('上传成功');
  submiting.value = false;
};
</script>
