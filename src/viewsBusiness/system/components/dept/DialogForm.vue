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
            <t-form-item label="机构名称" name="deptName">
              <t-input v-model="formData.deptName" placeholder="请输入机构名称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="机构全称" name="fullName">
              <t-input v-model="formData.fullName" placeholder="请输入机构全称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="上级机构" name="parentId">
              <t-tree-select
                v-model="formData.parentId"
                :data="treeOptions"
                :popup-props="{ overlayStyle: { width: '300px' }, overlayInnerStyle: { width: '300px' } }"
                :tree-props="{
                  keys: {
                    label: 'title',
                    value: 'id',
                    children: 'children',
                  },
                }"
                :disabled="!!props.parentId"
                clearable
                placeholder="请选择上级机构"
              />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="机构类型" name="deptCategory">
              <t-select
                v-model="formData.deptCategory"
                :options="deptCategoryOptions"
                :keys="{
                  value: 'dictKey',
                  label: 'dictValue',
                }"
                clearable
                placeholder="请选择机构类型"
              />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="排序" name="sort">
              <t-input-number
                v-model="formData.sort"
                theme="column"
                placeholder="请输入排序"
                style="width: 100%"
              ></t-input-number>
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
import { MessagePlugin } from 'tdesign-vue-next';
import { computed, inject, nextTick, ref, watch } from 'vue';

import { getDeptDetail, getDeptTree, submitDept } from '@/api/system/dept';

const INITIAL_DATA = {
  deptName: '',
  fullName: '',
  parentId: null,
  deptCategory: undefined,
  sort: undefined,
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
  deptName: [{ required: true, message: '请输入机构名称', type: 'error', trigger: 'blur' }],
  fullName: [{ required: true, message: '请输入机构全称', type: 'error', trigger: 'blur' }],
  deptCategory: [{ required: true, message: '请选择机构类型', type: 'error', trigger: 'change' }],
  sort: [{ required: true, message: '请输入排序', type: 'error', trigger: 'blur' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}机构`;
});
const formDisabled = computed(() => {
  const obj = {
    view: true,
    edit: false,
  };
  return obj[props.actionType] || false;
});

const deptCategoryOptions: Record<string, any>[] = inject('deptCategoryOptions') || [];

const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const treeOptions = ref([]);
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
    submitDept(subimtData)
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
  getDeptTree().then((res) => {
    treeOptions.value = res;
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
        getDeptDetail(props.editId).then((res) => {
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
