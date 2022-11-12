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
            <t-form-item label="字典编号" name="code">
              <t-input v-model="formData.code" placeholder="请输入字典编号" disabled />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="上级字典" name="parentName">
              <t-input v-model="formData.parentName" placeholder="请输入字典名称" disabled />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="字典名称" name="dictValue">
              <t-input v-model="formData.dictValue" placeholder="请输入字典名称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="字典键值" name="dictKey">
              <t-input v-model="formData.dictKey" placeholder="请输入字典键值" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="字典排序" name="sort">
              <t-input-number
                v-model="formData.sort"
                theme="column"
                placeholder="请输入字典排序"
                style="width: 100%"
              ></t-input-number>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="封存" name="isSealed">
              <t-switch v-model="formData.isSealed" :custom-value="[1, 0]"></t-switch>
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="字典备注" name="remark">
              <t-textarea v-model="formData.remark" placeholder="请输入字典备注" clearable />
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
import { getDetail, submit } from '@/api/system/dict';

const INITIAL_DATA = {
  code: '',
  parentId: '',
  parentName: '',
  dictValue: '',
  dictKey: '',
  sort: undefined,
  isSealed: 0,
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
  rowData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const rules = ref({
  code: [{ required: true, message: '请选择字典编号', type: 'error', trigger: 'blur' }],
  dictValue: [{ required: true, message: '请输入字典名称', type: 'error', trigger: 'blur' }],
  dictKey: [{ required: true, message: '请输入字典键值', type: 'error', trigger: 'blur' }],
  sort: [{ required: true, message: '请输入字典排序', type: 'error', trigger: 'blur' }],
  isSealed: [{ required: true, message: '请选择是否封存', type: 'error', trigger: 'change' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}字典`;
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

const emit = defineEmits(['update:visible', 'update:editId', 'update:actionType', 'submit', 'closed']);

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
    emit('closed');
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

watch(
  () => props.rowData,
  (val) => {
    formData.value = { ...formData.value, parentId: val.id, parentName: val.dictValue, code: val.code };
  },
);
</script>
