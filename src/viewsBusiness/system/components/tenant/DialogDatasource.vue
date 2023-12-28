<template>
  <t-dialog v-model:visible="formVisible" header="租户数据源配置" :width="480" :footer="false" @closed="onClosed">
    <template #body>
      <!-- 表单内容 -->
      <t-form ref="form" :data="formData" :rules="rules" :label-width="100" :disabled="submiting" @submit="onSubmit">
        <t-row :gutter="[0, 28]">
          <t-col :span="12">
            <t-form-item label="数据源" name="datasourceId">
              <t-select
                v-model="formData.datasourceId"
                :options="datasourceOptions"
                :keys="{
                  value: 'id',
                  label: 'name',
                }"
                clearable
                placeholder="请选择数据源"
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
import { MessagePlugin } from 'tdesign-vue-next';
import { nextTick, onBeforeMount, ref, watch } from 'vue';

import { datasource, datasourceSelect, getDetail } from '@/api/system/tenant';

const INITIAL_DATA = {
  datasourceId: '',
  tenantId: '',
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
});

const rules = ref({
  datasourceId: [{ required: true, message: '请选择数据源', type: 'error', trigger: 'change' }],
});

const formVisible = ref(false);
const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const submiting = ref(false);

const emit = defineEmits(['update:visible', 'update:editId', 'submit']);

const onSubmit = ({ firstError }) => {
  if (!firstError) {
    submiting.value = true;
    datasource(formData.value.tenantId, formData.value.datasourceId)
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
        if (props.editId.split(',').length === 1) {
          getDetail(props.editId).then((res) => {
            formData.value = {
              datasourceId: res.datasourceId,
              tenantId: res.tenantId,
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

const datasourceOptions = ref([]);

async function getOptions() {
  const res = await datasourceSelect();
  datasourceOptions.value = res;
}

onBeforeMount(() => {
  getOptions();
});
</script>
