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
            <t-form-item label="资源编号" name="smsCode">
              <t-input v-model="formData.smsCode" placeholder="请输入资源编号" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item :label="templateIdName" name="templateId">
              <t-input v-model="formData.templateId" :placeholder="`请输入${templateIdName}`" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item :label="accessKeyName" name="accessKey">
              <t-input v-model="formData.accessKey" :placeholder="`请输入${accessKeyName}`" clearable />
            </t-form-item>
          </t-col>
          <t-col v-if="formData.category !== 1" :span="12">
            <t-form-item :label="secretKeyName" name="secretKey">
              <t-input v-model="formData.secretKey" :placeholder="`请输入${secretKeyName}`" clearable />
            </t-form-item>
          </t-col>
          <t-col v-if="formData.category === 3" :span="12">
            <t-form-item label="regionId" name="regionId">
              <t-input v-model="formData.regionId" placeholder="请输入regionId" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="短信签名" name="signName">
              <t-input v-model="formData.signName" placeholder="请输入短信签名" clearable />
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
import { ref, watch, computed, nextTick, inject, unref } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { getDetail, submit } from '@/api/resource/sms';

const INITIAL_DATA = {
  category: 1,
  smsCode: '',
  templateId: '',
  accessKey: '',
  secretKey: '',
  regionId: 'cn-hangzhou',
  signName: '',
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

const templateIdName = computed(() => {
  const { category } = unref(formData);
  if (category === 1) {
    return '模版内容';
  }
  return '模版ID';
});

const accessKeyName = computed(() => {
  const { category } = unref(formData);
  if (category === 1) {
    return 'apiKey';
  }
  if (category === 4) {
    return 'appId';
  }
  return 'accessKey';
});

const secretKeyName = computed(() => {
  const { category } = unref(formData);
  if (category === 4) {
    return 'appKey';
  }
  return 'secretKey';
});

const rules = ref({
  category: [{ required: true, message: '请选择分类', type: 'error', trigger: 'change' }],
  smsCode: [{ required: true, message: '请输入资源编号', type: 'error', trigger: 'blur' }],
  templateId: [{ required: true, message: `请输入${templateIdName.value}`, type: 'error', trigger: 'blur' }],
  accessKey: [{ required: true, message: `请输入${accessKeyName.value}`, type: 'error', trigger: 'blur' }],
  secretKey: [{ required: true, message: `请输入${secretKeyName.value}`, type: 'error', trigger: 'blur' }],
  regionId: [{ required: true, message: '请输入regionId', type: 'error', trigger: 'blur' }],
  signName: [{ required: true, message: '请输入短信签名', type: 'error', trigger: 'blur' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}短信配置`;
});

const formDisabled = computed(() => {
  const obj = {
    view: true,
    edit: false,
  };
  return obj[props.actionType] || false;
});

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
