<template>
  <t-dialog v-model:visible="formVisible" header="租户授权配置" :width="480" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="账号额度" name="accountNumber">
              <t-input-number
                v-model="formData.accountNumber"
                theme="column"
                placeholder="请输入账号额度"
                style="width: 100%"
              ></t-input-number>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="过期时间" name="expireTime">
              <t-date-picker
                v-model="formData.expireTime"
                enable-time-picker
                allow-input
                clearable
                placeholder="请选择过期时间"
                style="width: 100%"
              />
            </t-form-item>
          </t-col>
          <t-col :span="12">
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
import { nextTick, ref, watch } from 'vue';

import { getDetail, setting } from '@/api/system/tenant';

const INITIAL_DATA = {
  accountNumber: -1,
  expireTime: '',
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
});

const rules = ref({});

const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);

const emit = defineEmits(['update:visible', 'update:editId', 'submit']);

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const subimtData = {
      ...formData.value,
      ids: props.editId,
    };
    setting(subimtData)
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
        if (props.editId.split(',').length === 1) {
          getDetail(props.editId).then((res) => {
            formData.value = {
              accountNumber: res.accountNumber,
              expireTime: res.expireTime,
            };
          });
        } else {
          formData.value = { ...INITIAL_DATA };
        }
      });
    }
    nextTick(() => {
      form.value?.clearValidate();
    });
    formVisible.value = val;
  },
);
</script>
