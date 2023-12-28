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
            <t-form-item label="分类" name="category">
              <t-radio-group v-model="formData.category" name="category">
                <t-radio v-for="item in categoryOptions" :key="item.dictKey" :value="item.dictKey">
                  {{ item.dictValue }}
                </t-radio>
              </t-radio-group>
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="资源编号" name="ossCode">
              <t-input v-model="formData.ossCode" placeholder="请输入资源编号" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="资源地址" name="endpoint">
              <t-input v-model="formData.endpoint" placeholder="请输入资源地址" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="空间名" name="bucketName">
              <t-input v-model="formData.bucketName" placeholder="请输入空间名" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="accessKey" name="accessKey">
              <t-input v-model="formData.accessKey" placeholder="请输入accessKey" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="secretKey" name="secretKey">
              <t-input v-model="formData.secretKey" placeholder="请输入secretKey" clearable />
            </t-form-item>
          </t-col>
          <t-col v-if="formData.category === 4" :span="12">
            <t-form-item label="appId" name="appId">
              <t-input v-model="formData.appId" placeholder="请输入appId" clearable />
            </t-form-item>
          </t-col>
          <t-col v-if="formData.category === 4" :span="12">
            <t-form-item label="region" name="region">
              <t-input v-model="formData.region" placeholder="请输入region" clearable />
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
import { computed, inject, nextTick, ref, unref, watch } from 'vue';

import { getOssDetail, submitOss } from '@/api/resource/oss';

const INITIAL_DATA = {
  category: undefined,
  ossCode: '',
  endpoint: '',
  bucketName: '',
  accessKey: '',
  secretKey: '',
  appId: '',
  region: '',
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
  category: [{ required: true, message: '请选择分类', type: 'error', trigger: 'change' }],
  ossCode: [{ required: true, message: '请输入资源编号', type: 'error', trigger: 'blur' }],
  endpoint: [{ required: true, message: '请输入资源地址', type: 'error', trigger: 'blur' }],
  bucketName: [{ required: true, message: '请输入空间名', type: 'error', trigger: 'blur' }],
  accessKey: [{ required: true, message: '请输入accessKey', type: 'error', trigger: 'blur' }],
  secretKey: [{ required: true, message: '请输入secretKey', type: 'error', trigger: 'blur' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return obj[props.actionType] || '';
});
const formDisabled = computed(() => {
  const obj = {
    view: true,
    edit: false,
  };
  return obj[props.actionType] || false;
});

type DicItem = {
  dictKey: string | number;
  dictValue: string | number;
};
const categoryOptions: DicItem[] = inject('categoryOptions') || [];
const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);

const emit = defineEmits(['update:visible', 'update:editId', 'update:actionType', 'submit']);

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const { category, appId, region } = unref(formData);
    const otherData = {
      appId: category === 4 ? appId : '',
      region: category === 4 ? region : '',
    };
    const subimtData = {
      ...formData.value,
      ...otherData,
      id: props.editId,
    };
    submitOss(subimtData)
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
        getOssDetail(props.editId).then((res) => {
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
