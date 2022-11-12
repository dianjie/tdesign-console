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
            <t-form-item label="菜单排序" name="sort">
              <t-input-number
                v-model="formData.sort"
                theme="column"
                placeholder="请输入菜单排序"
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
import { ref, watch, computed, nextTick } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { manifest } from 'tdesign-icons-vue-next/lib/manifest';
import { getDetail, submit } from '@/api/system/topmenu';

const INITIAL_DATA = {
  name: '',
  source: null,
  code: '',
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
});

const rules = ref({
  name: [{ required: true, message: '请输入菜单名称', type: 'error', trigger: 'blur' }],
  source: [{ required: true, message: '请选择菜单图标', type: 'error', trigger: 'change' }],
  code: [{ required: true, message: '请输入菜单编号', type: 'error', trigger: 'blur' }],
  sort: [{ required: true, message: '请输入菜单排序', type: 'error', trigger: 'blur' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}顶部菜单`;
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
