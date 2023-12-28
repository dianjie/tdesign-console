<template>
  <t-dialog v-model:visible="formVisible" header="用户数据导入" :width="780" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="模板上传" name="excelFile">
              <t-upload
                ref="uploadRef"
                v-model="formData.excelFile"
                :auto-upload="false"
                accept=".xlsx, .xls, .csv"
                :request-method="requestMethod"
                :disabled="submiting"
                @fail="handleFail"
                @success="handleSuccess"
              ></t-upload>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="数据覆盖" name="isCovered">
              <t-switch v-model="formData.isCovered" :custom-value="[1, 0]"></t-switch>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="下载模板" name="exportTemplate">
              <t-button theme="primary" @click="handleTemplate">
                <template #icon>
                  <cloud-download-icon />
                </template>
                下载模板
              </t-button>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item style="float: right">
              <t-button variant="outline" @click="onClickCloseBtn">取消</t-button>
              <t-button theme="primary" :disabled="submiting" type="submit">确定</t-button>
            </t-form-item>
          </t-col>
        </t-row>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { CloudDownloadIcon } from 'tdesign-icons-vue-next';
import { MessagePlugin } from 'tdesign-vue-next';
import { nextTick, ref, unref, watch } from 'vue';

import { exportTemplate, importUser } from '@/api/system/user';
import { downloadByData } from '@/utils/file/download';

const INITIAL_DATA = {
  excelFile: [],
  isCovered: 0,
};

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const rules = ref({
  excelFile: [{ required: true, message: '请选择模板', type: 'error', trigger: 'change' }],
  isCovered: [{ required: true, message: '请选择数据覆盖', type: 'error', trigger: 'change' }],
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
    nextTick(() => {
      form.value?.clearValidate();
    });
    formVisible.value = val;
  },
);

const handleFail = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 导入失败`);
  submiting.value = false;
};

// 上传接口，可根据实际情况自己修改
const requestMethod = async (param) => {
  try {
    const { isCovered } = unref(formData);
    const data = await importUser(isCovered, { file: param.raw });
    // url: 'success',这里是为了组件出现警告
    return { status: 'success', response: { ...data, url: 'success' } };
  } catch (error) {
    return { status: 'fail', error: '导入失败' };
  }
};

const handleSuccess = () => {
  emit('submit', {});
  MessagePlugin.success('导入成功');
  formVisible.value = false;
  submiting.value = false;
};

const handleTemplate = useDebounceFn(() => {
  exportTemplate().then((res) => {
    downloadByData(res, '用户数据模板.xlsx');
  });
}, 300);
</script>
