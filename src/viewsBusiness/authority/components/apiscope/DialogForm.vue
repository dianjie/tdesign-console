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
            <t-form-item label="权限名称" name="scopeName">
              <t-input v-model="formData.scopeName" placeholder="请输入权限名称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="权限编号" name="resourceCode">
              <t-input v-model="formData.resourceCode" placeholder="请输入权限编号" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="权限路径" name="scopePath">
              <t-input v-model="formData.scopePath" placeholder="请输入权限路径" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="6">
            <t-form-item label="接口类型" name="scopeType">
              <t-select
                v-model="formData.scopeType"
                :options="dictOptions"
                :keys="{
                  value: 'dictKey',
                  label: 'dictValue',
                }"
                clearable
                placeholder="请选择接口类型"
              />
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
import { ref, watch, computed, nextTick, onBeforeMount } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { getDictData } from '@/api/system/dict';
import { changeDictDataType } from '@/utils';
import { getDetail, submit } from '@/api/authority/apiscope';

const INITIAL_DATA = {
  scopeName: '',
  resourceCode: '',
  scopePath: '',
  scopeType: '',
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
  scopeName: [{ required: true, message: '请输入权限编号', type: 'error', trigger: 'blur' }],
  resourceCode: [{ required: true, message: '请输入权限编号', type: 'error', trigger: 'blur' }],
  scopePath: [{ required: true, message: '请输入权限路径', type: 'error', trigger: 'blur' }],
  scopeType: [{ required: true, message: '请选择接口类型', type: 'error', trigger: 'change' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}接口权限`;
});
const formDisabled = computed(() => {
  const obj = {
    view: true,
    edit: false,
  };
  return obj[props.actionType] || false;
});

const dictOptions = ref([]);
async function getOptions() {
  const dict = await getDictData('api_scope_type');
  dictOptions.value = changeDictDataType(dict);
}

onBeforeMount(() => {
  getOptions();
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
      menuId: props.rowData.id,
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
