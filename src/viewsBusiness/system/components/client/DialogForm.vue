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
          <t-col :span="6">
            <t-form-item label="应用ID" name="clientId">
              <t-input v-model="formData.clientId" placeholder="请输入应用ID" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="应用密钥" name="clientSecret">
              <t-input v-model="formData.clientSecret" placeholder="请输入应用密钥" clearable />
            </t-form-item>
          </t-col>

          <t-col :span="6">
            <t-form-item label="授权类型" name="authorizedGrantTypes">
              <t-checkbox-group
                v-model="formData.authorizedGrantTypes"
                :options="scopeOptions"
                placeholder="请选择授权类型"
              />
            </t-form-item>
          </t-col>

          <t-col :span="6">
            <t-form-item label="授权范围" name="scope">
              <t-input v-model="formData.scope" placeholder="请输入授权范围" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="令牌秒数" name="accessTokenValidity">
              <t-input-number
                v-model="formData.accessTokenValidity"
                theme="column"
                placeholder="请输入令牌秒数"
                style="width: 100%"
              ></t-input-number>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="刷新秒数" name="refreshTokenValidity">
              <t-input-number
                v-model="formData.refreshTokenValidity"
                theme="column"
                placeholder="请输入刷新秒数"
                style="width: 100%"
              ></t-input-number>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="回调地址" name="webServerRedirectUri">
              <t-input v-model="formData.webServerRedirectUri" placeholder="请输入回调地址" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="资源集合" name="resourceIds">
              <t-input v-model="formData.resourceIds" placeholder="请输入资源集合" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="权限" name="authorities">
              <t-input v-model="formData.authorities" placeholder="请输入权限" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="自动授权" name="autoapprove">
              <t-input v-model="formData.autoapprove" placeholder="请输入自动授权" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="附加说明" name="additionalInformation">
              <t-textarea v-model="formData.additionalInformation" placeholder="请输入附加说明" clearable />
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

import { getDetail, submit } from '@/api/system/client';

import { scopeOptions } from '../../constant/client/constant';

const INITIAL_DATA = {
  clientId: '',
  clientSecret: '',
  authorizedGrantTypes: ['refresh_token', 'password', 'authorization_code'],
  scope: 'all',
  accessTokenValidity: 3600,
  refreshTokenValidity: 604800,
  webServerRedirectUri: '',
  resourceIds: '',
  authorities: '',
  autoapprove: '',
  additionalInformation: '',
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
  clientId: [{ required: true, message: '请输入应用ID', type: 'error', trigger: 'blur' }],
  clientSecret: [{ required: true, message: '请输入应用密钥', type: 'error', trigger: 'blur' }],
  authorizedGrantTypes: [{ required: true, message: '请选择授权类型', type: 'error', trigger: 'change' }],
  scope: [{ required: true, message: '请输入授权范围', type: 'error', trigger: 'blur' }],
  accessTokenValidity: [{ required: true, message: '请输入令牌秒数', type: 'error', trigger: 'blur' }],
  refreshTokenValidity: [{ required: true, message: '请输入刷新秒数', type: 'error', trigger: 'blur' }],
  webServerRedirectUri: [{ required: true, message: '请输入回调地址', type: 'error', trigger: 'blur' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}应用`;
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
      authorizedGrantTypes: formData.value.authorizedGrantTypes.join(','),
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
          formData.value = { ...res, authorizedGrantTypes: res.authorizedGrantTypes.split(',') };
        });
      });
    }
    nextTick(() => {
      form.value?.clearValidate();
    });
    formVisible.value = val;
  },
);
</script>
