<template>
  <t-dialog v-model:visible="formVisible" header="租户授权配置" :width="480" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="所属角色" name="roleId">
              <t-tree-select
                v-model="formData.roleId"
                :data="roleOptions"
                :tree-props="{ keys: { value: 'id', label: 'title' }, valueMode: 'all', checkStrictly: true }"
                multiple
                clearable
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

import { getRoleTree } from '@/api/system/role';
import { getDetail, grant } from '@/api/system/user';

const INITIAL_DATA = {
  roleId: [],
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
  tenantId: {
    type: String,
    default: '',
  },
});

const rules = ref({
  roleId: [{ required: true, message: '请选择所属角色', type: 'error', trigger: 'change' }],
});

const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);
const roleOptions = ref([]);

const emit = defineEmits(['update:visible', 'update:editId', 'submit']);

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    grant(props.editId, formData.value.roleId)
      .then(() => {
        emit('submit', {});
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
      getRoleTree(props.tenantId).then((res) => {
        roleOptions.value = res;
      });
      nextTick(() => {
        if (props.editId.split(',').length === 1) {
          getDetail(props.editId).then((res) => {
            formData.value = {
              roleId: res.roleId.split(','),
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
