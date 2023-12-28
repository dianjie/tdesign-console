<template>
  <t-dialog v-model:visible="formVisible" :header="dialogTitle" :width="780" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form
        ref="form"
        :class="{ 'xy-form__detail': actionType === 'view' }"
        :data="formData"
        :rules="rules"
        :label-width="100"
        :disabled="formDisabled || submiting"
        @submit="onSubmit"
      >
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="租户名称" name="tenantName">
              <t-input v-model="formData.tenantName" placeholder="请输入租户名称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="联系人" name="linkman">
              <t-input v-model="formData.linkman" placeholder="请输入联系人" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="联系电话" name="contactNumber">
              <t-input v-model="formData.contactNumber" placeholder="请输入联系电话" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="联系地址" name="address">
              <t-input v-model="formData.address" theme="column" placeholder="请输入联系地址" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="绑定域名" name="domainUrl">
              <t-input v-model="formData.domainUrl" theme="column" placeholder="请输入绑定域名" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="背景图片" name="backgroundUrl">
              <t-upload
                ref="uploadRef"
                v-model="formData.backgroundUrl"
                theme="image"
                tips="单张图片文件上传"
                accept="image/*"
                :locale="{
                  triggerUploadText: {
                    image: '请选择图片',
                  },
                }"
                :request-method="requestMethod"
                :disabled="formDisabled || submiting"
                @fail="handleFail"
              ></t-upload>
            </t-form-item>
          </t-col>
          <t-col v-show="!formDisabled" :span="12">
            <t-form-item style="float: right">
              <t-button variant="outline" @click="onClickCloseBtn">取消</t-button>
              <t-button theme="primary" type="submit">确定</t-button>
            </t-form-item>
          </t-col>
        </t-row>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, nextTick, ref, watch } from 'vue';

import { uploadOssDefult } from '@/api/resource/oss';
import { getDetail, submit } from '@/api/system/tenant';

const INITIAL_DATA = {
  tenantName: '',
  linkman: '',
  contactNumber: '',
  address: '',
  domainUrl: '',
  backgroundUrl: [],
};

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  editId: {
    type: String,
    default: '',
  },
  actionType: {
    type: String,
    default: '',
  },
});

const rules = ref({
  tenantName: [{ required: true, message: '请输入租户名称', type: 'error', trigger: 'blur' }],
  linkman: [{ required: true, message: '请输入联系人', type: 'error', trigger: 'blur' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}租户`;
});
const formDisabled = computed(() => {
  const obj = {
    view: true,
    edit: false,
  };
  return obj[props.actionType] || false;
});
const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);

const emit = defineEmits(['update:visible', 'update:editId', 'update:actionType', 'submit']);

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const subimtData = {
      ...formData.value,
      backgroundUrl: formData.value.backgroundUrl.length ? formData.value.backgroundUrl[0]?.url : '',
      id: props.editId,
    };
    submit(subimtData)
      .then(() => {
        emit('submit', subimtData);
        MessagePlugin.success('提交成功');
        formVisible.value = false;
      })
      .finally(() => {
        submiting.value = false;
      });
  } else {
    MessagePlugin.warning(firstError);
  }
};

const onClosed = () => {
  formData.value = { ...INITIAL_DATA };
  nextTick(() => {
    emit('update:editId', '');
    emit('update:actionType', '');
  });
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
    if (val && props.editId) {
      nextTick(() => {
        getDetail(props.editId).then((res) => {
          formData.value = { ...res, backgroundUrl: res.backgroundUrl ? [{ url: res.backgroundUrl }] : [] };
        });
      });
    }
    nextTick(() => {
      form.value?.clearValidate();
    });
    formVisible.value = val;
  },
);

const handleFail = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 上传失败`);
};

// 上传接口，可根据实际情况自己修改
const requestMethod = async (param) => {
  // TODO: 待验证
  try {
    const data = await uploadOssDefult({ file: param.raw });
    return { status: 'success', response: { ...data, url: data.link } };
  } catch (error) {
    return { status: 'fail', error: '上传失败' };
  }
};
</script>
