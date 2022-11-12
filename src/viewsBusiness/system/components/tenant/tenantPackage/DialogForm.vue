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
            <t-form-item label="产品包名" name="packageName">
              <t-input v-model="formData.packageName" placeholder="请输入产品包名称" clearable />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="菜单列表" name="menuId">
              <t-tree-select
                v-model="formData.menuId"
                :data="menuOptions"
                :tree-props="{ keys: { value: 'id', label: 'title' }, valueMode: 'all' }"
                multiple
                clearable
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
import { getDetail, submit } from '@/api/system/tenantPackage';
import { getTreeMenu } from '@/api/system/menu';

const INITIAL_DATA = {
  packageName: '',
  menuId: [],
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
  packageName: [{ required: true, message: '请输入产品包名', type: 'error', trigger: 'blur' }],
  menuId: [{ required: true, message: '请选择菜单列表', type: 'error', trigger: 'change' }],
});

const dialogTitle = computed(() => {
  const obj = {
    view: '查看',
    edit: '编辑',
    add: '新增',
  };
  return `${obj[props.actionType] || ''}产品包`;
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

const emit = defineEmits(['update:visible', 'update:editId', 'update:actionType', 'submit']);

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    const subimtData = {
      ...formData.value,
      menuId: formData.value.menuId.join(','),
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
          formData.value = { ...res, menuId: res.menuId.split(',') };
        });
      });
    }
    nextTick(() => {
      form.value?.clearValidate();
    });
    formVisible.value = val;
  },
);

const menuOptions = ref([]);
async function getOptions() {
  const res = await getTreeMenu();
  menuOptions.value = res;
}
onBeforeMount(() => {
  getOptions();
});
</script>
