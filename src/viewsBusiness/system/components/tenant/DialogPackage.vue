<template>
  <t-dialog v-model:visible="formVisible" header="租户产品包配置" :width="480" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="产品包" name="packageId">
              <t-select
                v-model="formData.packageId"
                :options="packageOptions"
                :keys="{
                  value: 'id',
                  label: 'packageName',
                }"
                clearable
                placeholder="请选择产品包"
              />
            </t-form-item>
          </t-col>
          <t-col :span="12">
            <t-form-item label="菜单预览" name="menuId">
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
import { ref, watch, nextTick, onBeforeMount } from 'vue';
import { MessagePlugin } from 'tdesign-vue-next';
import { packageSetting, packageInfo } from '@/api/system/tenant';
import { getTreeMenu } from '@/api/system/menu';
import { getSelect, getDetail as packageDetail } from '@/api/system/tenantPackage';

const INITIAL_DATA = {
  packageId: '',
  menuId: [],
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
  tenantId: {
    type: String,
    default: '',
  },
});

const rules = ref({});

const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);

const emit = defineEmits(['update:visible', 'update:editId', 'submit']);

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    packageSetting(props.tenantId, formData.value.packageId)
      .then(() => {
        emit('submit', {});
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
  });
};

const onClickCloseBtn = () => {
  formVisible.value = false;
};

const menuOptions = ref([]);
const packageOptions = ref([]);

async function getOptions() {
  const res = await getTreeMenu();
  menuOptions.value = res;
}

function getPackageOp() {
  getSelect().then((res) => {
    packageOptions.value = res;
  });
}

onBeforeMount(() => {
  getOptions();
});

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
      getPackageOp();
    }
    if (val && props.editId) {
      nextTick(() => {
        if (props.editId.split(',').length === 1) {
          packageInfo(props.editId).then((res) => {
            formData.value = {
              packageId: res.id,
              menuId: res.menuId?.split(',') || [],
            };
          });
        } else {
          formData.value = { ...INITIAL_DATA };
        }
      });
    }
    nextTick(() => {
      form.value?.clearValidate();
    });
    formVisible.value = val;
  },
);

watch(
  () => formData.value.packageId,
  (val) => {
    if (val) {
      packageDetail(val).then((res) => {
        formData.value.menuId = res.menuId.split(',');
      });
    } else {
      formData.value = { ...INITIAL_DATA };
    }
  },
);
</script>
