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
            <t-form-item label="岗位类型" name="category">
              <t-select
                v-model="formData.category"
                :options="postCategoryOptions"
                :keys="{
                  value: 'dictKey',
                  label: 'dictValue',
                }"
                clearable
                placeholder="请选择岗位类型"
              />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="岗位编号" name="postCode">
              <t-input v-model="formData.postCode" placeholder="请输入岗位编号" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="岗位名称" name="postName">
              <t-input v-model="formData.postName" placeholder="请输入岗位名称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="岗位排序" name="sort">
              <t-input-number
                v-model="formData.sort"
                theme="column"
                placeholder="请输入岗位排序"
                style="width: 100%"
              ></t-input-number>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="岗位描述" name="remark">
              <t-textarea v-model="formData.remark" placeholder="请输入岗位描述" clearable />
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
import { ref, watch, computed, nextTick, inject } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { getDetail, submit } from '@/api/system/post';

const INITIAL_DATA = {
  category: '',
  postCode: '',
  postName: '',
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
});

const rules = ref({
  category: [{ required: true, message: '请选择岗位类型', type: 'error', trigger: 'change' }],
  postCode: [{ required: true, message: '请输入岗位编号', type: 'error', trigger: 'blur' }],
  postName: [{ required: true, message: '请输入岗位名称', type: 'error', trigger: 'blur' }],
  sort: [{ required: true, message: '请输入岗位排序', type: 'error', trigger: 'blur' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}岗位`;
});
const formDisabled = computed(() => {
  const obj = {
    view: true,
    edit: false,
  };
  return obj[props.actionType] || false;
});

const postCategoryOptions: Record<string, any>[] = inject('postCategoryOptions') || [];

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
