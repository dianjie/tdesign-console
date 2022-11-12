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
      >
        <t-row :gutter="[0, 28]">
          <t-col :span="6">
            <t-form-item label="服务id" name="serviceId">
              <t-input v-model="formData.serviceId" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="服务host" name="serverHost">
              <t-input v-model="formData.serverHost" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="服务ip" name="serverIp">
              <t-input v-model="formData.serverIp" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="软件环境" name="env">
              <t-input v-model="formData.env" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="请求方法" name="method">
              <t-input v-model="formData.method" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="请求接口" name="requestUri">
              <t-input v-model="formData.requestUri" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="日志时间" name="createTime">
              <t-input v-model="formData.createTime" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="用户代理" name="userAgent">
              <t-textarea v-model="formData.userAgent" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="请求数据" name="params">
              <t-textarea v-model="formData.params" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="日志数据" name="stackTrace">
              <t-textarea v-model="formData.stackTrace" />
            </t-form-item>
          </t-col>
        </t-row>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, watch, computed, nextTick } from 'vue';
import { getDetail } from '@/api/log/error';

const INITIAL_DATA = {
  serviceId: '',
  serverHost: '',
  serverIp: '',
  env: '',
  method: '',
  requestUri: '',
  createTime: '',
  userAgent: '',
  params: '',
  stackTrace: '',
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

const rules = ref({});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}错误日志`;
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

const emit = defineEmits(['update:visible', 'update:editId', 'update:actionType']);

const onClosed = () => {
  formData.value = { ...INITIAL_DATA };
  nextTick(() => {
    emit('update:editId', '');
    emit('update:actionType', '');
  });
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
          formData.value = { ...res };
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
