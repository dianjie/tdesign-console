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
            <t-form-item label="菜单名称" name="name">
              <t-input v-model="formData.name" placeholder="请输入菜单名称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="菜单类型" name="category" placeholder="请选择菜单类型">
              <t-radio-group v-model="formData.category">
                <t-radio :value="1">菜单</t-radio>
                <t-radio :value="2">按钮</t-radio>
              </t-radio-group>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="上级菜单" name="parentId">
              <t-tree-select
                v-model="formData.parentId"
                :data="menuOptions"
                :popup-props="{ overlayStyle: { width: '300px' }, overlayInnerStyle: { width: '300px' } }"
                :tree-props="{
                  keys: {
                    label: 'title',
                    value: 'id',
                    children: 'children',
                  },
                }"
                clearable
                placeholder="请选择上级菜单"
              />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="路由地址" name="path">
              <t-input v-model="formData.path" placeholder="请输入路由地址" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="菜单图标" name="source">
              <t-select
                v-model="formData.source"
                placeholder="请选择菜单图标"
                clearable
                :popup-props="{ overlayStyle: { width: '350px' }, overlayInnerStyle: { width: '350px' } }"
              >
                <template #prefixIcon>
                  <t-icon v-if="formData.source" :name="formData.source" :style="{ marginRight: '8px' }" />
                </template>
                <t-option
                  v-for="item in iconOptions"
                  :key="item.stem"
                  :value="item.stem"
                  :label="item.stem"
                  style="display: inline-block; font-size: 20px"
                >
                  <div>
                    <t-icon :name="item.stem" />
                  </div>
                </t-option>
              </t-select>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="菜单编号" name="code">
              <t-input v-model="formData.code" theme="column" placeholder="请输入菜单编号" clearable></t-input>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="菜单别名" name="alias">
              <t-input v-model="formData.alias" placeholder="请输入菜单别名" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="菜单排序" name="sort">
              <t-input-number
                v-model="formData.sort"
                theme="column"
                placeholder="请输入菜单排序"
                style="width: 100%"
              ></t-input-number>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="是否新窗口" name="isOpen">
              <t-radio-group v-model="formData.isOpen" placeholder="请选择是否新窗口">
                <t-radio :value="0">否</t-radio>
                <t-radio :value="1">是</t-radio>
              </t-radio-group>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="菜单备注" name="remark">
              <t-textarea v-model="formData.remark" placeholder="请输入菜单备注" clearable />
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
import { manifest } from 'tdesign-icons-vue-next/lib/manifest';
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, nextTick, ref, watch } from 'vue';

import { getMenuDetail, getTreeMenu, submitMenu } from '@/api/system/menu';

const INITIAL_DATA = {
  name: '',
  path: '',
  parentId: null,
  source: null,
  code: '',
  category: undefined,
  alias: '',
  sort: undefined,
  isOpen: null,
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
  parentId: {
    type: String,
    default: '',
  },
});

const rules = ref({
  name: [{ required: true, message: '请输入菜单名称', type: 'error', trigger: 'blur' }],
  path: [{ required: false, message: '请输入路由地址', type: 'error', trigger: 'blur' }],
  source: [{ required: true, message: '请选择菜单图标', type: 'error', trigger: 'change' }],
  code: [{ required: true, message: '请输入菜单编号', type: 'error', trigger: 'blur' }],
  category: [{ required: true, message: '请选择菜单类型', type: 'error', trigger: 'change' }],
  alias: [{ required: true, message: '请输入菜单别名', type: 'error', trigger: 'blur' }],
  sort: [{ required: true, message: '请输入菜单排序', type: 'error', trigger: 'blur' }],
  isOpen: [{ required: true, message: '请选择是否新开窗口', type: 'error', trigger: 'change' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}菜单`;
});
const formDisabled = computed(() => {
  const obj = {
    view: true,
    edit: false,
  };
  return obj[props.actionType] || false;
});

const iconOptions = ref(manifest);
const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const menuOptions = ref([]);
const form = ref(null);
const submiting = ref(false);

const emit = defineEmits(['update:visible', 'update:editId', 'update:actionType', 'update:parentId', 'submit']);

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const subimtData = {
      ...formData.value,
      id: props.editId,
    };
    submitMenu(subimtData)
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
    emit('update:parentId', '');
  });
};

const onClickCloseBtn = () => {
  formVisible.value = false;
};

const getTreeOp = () => {
  getTreeMenu().then((res) => {
    menuOptions.value = res;
  });
};

watch(
  () => formVisible.value,
  (val) => {
    emit('update:visible', val);
  },
);

watch(
  () => props.parentId,
  (val) => {
    formData.value.parentId = val;
  },
);

watch(
  () => props.visible,
  (val) => {
    if (val) {
      getTreeOp();
    }
    if (val && props.editId) {
      nextTick(() => {
        getMenuDetail(props.editId).then((res) => {
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

watch(
  () => formData.value.category,
  (val) => {
    rules.value.path[0].required = val === 1;
    rules.value.source[0].required = val === 1;
  },
);
</script>
