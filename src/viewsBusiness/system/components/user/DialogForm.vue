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
        <div class="form-basic-container-title">基础信息</div>
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="所属租户" name="tenantId">
              <t-select
                v-model="formData.tenantId"
                :options="tenantOptions"
                :keys="{
                  value: 'tenantId',
                  label: 'tenantName',
                }"
                clearable
                placeholder="请选择所属租户"
                @change="onTenantChange"
              />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="登录账号" name="account">
              <t-input v-model="formData.account" placeholder="请输入登录账号" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="用户平台" name="userType">
              <t-select
                v-model="formData.userType"
                :options="userTypeOptions"
                :keys="{
                  value: 'dictKey',
                  label: 'dictValue',
                }"
                clearable
                placeholder="请选择用户平台"
              />
            </t-form-item>
          </t-col>
          <t-col v-if="props.actionType === 'add'" :span="6">
            <t-form-item label="密码" name="password">
              <t-input v-model="formData.password" placeholder="请输入密码" clearable />
            </t-form-item>
          </t-col>
          <t-col v-if="props.actionType === 'add'" :span="6">
            <t-form-item label="确认密码" name="password2">
              <t-input v-model="formData.password2" placeholder="请输入确认密码" clearable />
            </t-form-item>
          </t-col>
        </t-row>

        <div class="form-basic-container-title">详细信息</div>
        <t-row :gutter="[0, 28]">
          <t-col :span="6">
            <t-form-item label="用户昵称" name="name">
              <t-input v-model="formData.name" placeholder="请输入用户昵称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="用户姓名" name="realName">
              <t-input v-model="formData.realName" placeholder="请输入用户姓名" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="手机号码" name="phone">
              <t-input v-model="formData.phone" placeholder="请输入手机号码" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="电子邮箱" name="email">
              <t-input v-model="formData.email" placeholder="请输入电子邮箱" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="用户性别" name="sex">
              <t-select
                v-model="formData.sex"
                :options="sexOptions"
                :keys="{
                  value: 'dictKey',
                  label: 'dictValue',
                }"
                clearable
                placeholder="请选择用户性别"
              />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="用户生日" name="birthday">
              <t-date-picker v-model="formData.birthday" style="width: 100%" placeholder="请选择用户生日" clearable />
            </t-form-item>
          </t-col>
        </t-row>

        <div class="form-basic-container-title">职责信息</div>

        <t-row :gutter="[0, 28]">
          <t-col :span="6">
            <t-form-item label="用户编号" name="code">
              <t-input v-model="formData.code" placeholder="请输入用户编号" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
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
          <t-col :span="6">
            <t-form-item label="所属部门" name="deptId">
              <t-tree-select
                v-model="formData.deptId"
                :data="deptOptions"
                :tree-props="{ keys: { value: 'id', label: 'title' }, valueMode: 'all', checkStrictly: true }"
                multiple
                clearable
              />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="所属岗位" name="postId">
              <t-select
                v-model="formData.postId"
                :options="postOptions"
                :keys="{ value: 'id', label: 'postName' }"
                multiple
                clearable
              />
            </t-form-item>
          </t-col>
        </t-row>

        <t-form-item v-show="!formDisabled" style="float: right; margin-top: 25px">
          <t-button variant="outline" @click="onClickCloseBtn">取消</t-button>
          <t-button theme="primary" type="submit">确定</t-button>
        </t-form-item>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, inject, nextTick, onBeforeMount, ref, unref, watch } from 'vue';

import { getDeptTree } from '@/api/system/dept';
import { getDictData } from '@/api/system/dict';
import { getPostList } from '@/api/system/post';
import { getRoleTree } from '@/api/system/role';
import { getTenantSelectList } from '@/api/system/tenant';
import { getDetail, submit, update } from '@/api/system/user';
import { changeDictDataType } from '@/utils';

const INITIAL_DATA = {
  tenantId: '',
  account: '',
  userType: '',
  password: '',
  password2: '',
  name: '',
  realName: '',
  phone: '',
  email: '',
  sex: '',
  birthday: '',
  code: '',
  roleId: [],
  deptId: [],
  postId: [],
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

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}用户`;
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
const tenantOptions = ref([]);
const sexOptions = ref([]);
const roleOptions = ref([]);
const deptOptions = ref([]);
const postOptions = ref([]);

const userTypeOptions: Record<string, any>[] = inject('userTypeOptions') || [];

const emit = defineEmits(['update:visible', 'update:editId', 'update:actionType', 'submit']);

const rePassword = (val: string) => {
  return new Promise((resolve) => {
    resolve(formData.value.password === val);
  });
};

const rules = ref({
  tenantId: [{ required: true, message: '请选择所属租户', type: 'error', trigger: 'blur' }],
  account: [{ required: true, message: '请输入登录账号', type: 'error', trigger: 'blur' }],
  userType: [{ required: true, message: '请选择用户平台', type: 'error', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', type: 'error', trigger: 'blur' }],
  password2: [
    { required: true, message: '请输入确认密码', type: 'error', trigger: 'blur' },
    { validator: rePassword, message: '两次密码不一致', trigger: 'blur' },
  ],
  name: [{ required: true, message: '请输入用户昵称', type: 'error', trigger: 'blur' }],
  realName: [{ required: true, message: '请输入用户姓名', type: 'error', trigger: 'blur' }],
  roleId: [{ required: true, message: '请选择所属角色', type: 'error', trigger: 'change' }],
  deptId: [{ required: true, message: '请选择所属部门', type: 'error', trigger: 'change' }],
  postId: [{ required: true, message: '请选择所属岗位', type: 'error', trigger: 'change' }],
});

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const { deptId, roleId, postId } = unref(formData);
    const subimtData = {
      ...formData.value,
      deptId: deptId.join(','),
      roleId: roleId.join(','),
      postId: postId.join(','),
      id: props.editId,
    };
    const obj = {
      edit: update,
      add: submit,
    };
    const api = obj[props.actionType];
    api(subimtData)
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
  initTenantData('');
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
          formData.value = {
            ...res,
            deptId: res.deptId.split(','),
            roleId: res.roleId.split(','),
            postId: res.postId.split(','),
          };
          initTenantData(res.tenantId);
        });
      });
    }
    nextTick(() => {
      form.value?.clearValidate();
    });
    formVisible.value = val;
  },
);

async function getOptions() {
  const tenant = await getTenantSelectList();
  const dict = await getDictData('sex');
  tenantOptions.value = tenant;
  sexOptions.value = changeDictDataType(dict);
}

onBeforeMount(() => {
  getOptions();
});

function initTenantData(tenantId: string) {
  if (!tenantId) {
    roleOptions.value = [];
    deptOptions.value = [];
    postOptions.value = [];
    return;
  }
  getRoleTree(tenantId).then((res) => {
    roleOptions.value = res;
  });
  getDeptTree(tenantId).then((res) => {
    deptOptions.value = res;
  });
  getPostList(tenantId).then((res) => {
    postOptions.value = res;
  });
}

const onTenantChange = useDebounceFn((selectValue) => {
  initTenantData(selectValue);
  formData.value = { ...formData.value, roleId: [], deptId: [], postId: [] };
}, 300);
</script>

<style lang="less" scoped>
.form-basic-container-title {
  &:first-child {
    margin-top: 15px;
  }

  font-size: 16px;
  line-height: 16px;
  color: var(--td-text-color-primary);
  margin: 32px 0;
}
</style>
