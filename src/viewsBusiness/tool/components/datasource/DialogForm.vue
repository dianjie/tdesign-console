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
            <t-form-item label="名称" name="name">
              <t-input v-model="formData.name" clearable placeholder="请输入名称" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="驱动类" name="driverClass">
              <t-select
                v-model="formData.driverClass"
                :options="DRIVER_CLASS"
                :keys="{
                  value: 'dictKey',
                  label: 'dictValue',
                }"
                clearable
                placeholder="请选择驱动类"
              />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="用户名" name="username">
              <t-input v-model="formData.username" clearable placeholder="请输入用户名" />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="密码" name="password">
              <t-input v-model="formData.password" clearable placeholder="请输入密码" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="连接地址" name="url">
              <t-textarea v-model="formData.url" placeholder="请输入连接地址" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="备注" name="remark">
              <t-textarea v-model="formData.remark" placeholder="请输入备注" clearable />
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
import { ref, watch, computed, nextTick } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { getDetail, submit } from '@/api/tool/datasource';
import { DRIVER_CLASS } from '@/viewsBusiness/tool/constant/datasource/constant';

const INITIAL_DATA = {
  name: '',
  driverClass: '',
  username: '',
  password: '',
  url: '',
  remark: '',
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
  name: [{ required: true, message: '请输入名称', type: 'error', trigger: 'blur' }],
  driverClass: [{ required: true, message: '请选择驱动类', type: 'error', trigger: 'blur' }],
  username: [{ required: true, message: '请输入用户名', type: 'error', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', type: 'error', trigger: 'blur' }],
  url: [{ required: true, message: '请输入连接地址', type: 'error', trigger: 'blur' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}数据源`;
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
