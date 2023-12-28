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
            <t-form-item label="角色名称" name="roleName">
              <t-input v-model="formData.roleName" clearable placeholder="请输入角色名称" />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="角色别名" name="roleAlias">
              <t-input v-model="formData.roleAlias" clearable placeholder="请输入角色别名" />
            </t-form-item>
          </t-col>
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
                @change="debounceTenantChange"
              />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="上级角色" name="parentId">
              <t-tree-select
                v-model="formData.parentId"
                :data="dictOptions"
                :tree-props="{
                  keys: {
                    label: 'title',
                    value: 'id',
                    children: 'children',
                  },
                }"
                clearable
                placeholder="请选择上级角色"
              />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="角色排序" name="sort">
              <t-input-number
                v-model="formData.sort"
                theme="column"
                placeholder="请输入角色排序"
                style="width: 100%"
              ></t-input-number>
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
import { useDebounceFn } from '@vueuse/core';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, inject, nextTick, ref, unref, watch } from 'vue';

import { getDetail, getRoleTree, submit } from '@/api/system/role';

const INITIAL_DATA = {
  roleName: '',
  roleAlias: '',
  tenantId: '',
  parentId: '',
  sort: undefined,
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
  rowData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const rules = ref({
  roleName: [{ required: true, message: '请输入角色名称', type: 'error', trigger: 'blur' }],
  roleAlias: [{ required: true, message: '请输入角色别名', type: 'error', trigger: 'blur' }],
  tenantId: [{ required: true, message: '请选择所属租户', type: 'error', trigger: 'change' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}角色`;
});
const formDisabled = computed(() => {
  const obj = {
    view: true,
    edit: false,
  };
  return obj[props.actionType] || false;
});

const tenantOptions: Record<string, any>[] = inject('tenantOptions') || [];

const dictOptions = ref([]);
async function getOptions(val?: string) {
  const { tenantId } = unref(props.rowData);
  const dict = await getRoleTree(val || tenantId);
  dictOptions.value = dict;
}

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
    if (val) {
      getOptions();
    }
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

const debounceTenantChange = useDebounceFn((val) => {
  getOptions(val);
  formData.value.parentId = '0';
}, 500);
</script>
