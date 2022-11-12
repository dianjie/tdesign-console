<template>
  <div :class="tableVar">
    <t-row :gutter="[16, 24]">
      <t-col :span="4">
        <t-input v-model="filterText" placeholder="请输入关键词" clearable @change="onInput">
          <template #suffix-icon>
            <search-icon size="20px" />
          </template>
        </t-input>
        <t-tree
          v-model:actived="treeActived"
          style="margin-top: 14px"
          :data="treeData"
          hover
          :activable="true"
          :keys="{ value: 'value', label: 'title' }"
          :lazy="true"
          :filter="handleFilterByText"
          :load="loadTree"
          @active="onTreeActive"
        />
      </t-col>
      <t-col :span="8">
        <t-affix ref="affix" :offset-top="getTableHeaderAffixedTop" :container="getLayoutContainer">
          <div class="x-button-group">
            <t-button v-auth="'region_add'" theme="primary" @click="addChildren">
              <template #icon>
                <add-icon />
              </template>
              新建下级
            </t-button>
            <t-button v-auth="'region_delete'" theme="primary" @click="handleDelete">
              <template #icon>
                <delete-icon />
              </template>
              删除
            </t-button>
            <t-button v-auth="'region_import'" theme="primary" @click="handleImport">
              <template #icon>
                <cloud-upload-icon />
              </template>
              导入
            </t-button>
            <t-button v-auth="'region_export'" theme="primary" @click="handleExport">
              <template #icon>
                <cloud-download-icon />
              </template>
              导出
            </t-button>
            <t-button v-auth="'region_debug'" theme="primary" @click="handleDebug">
              <template #icon>
                <play-icon />
              </template>
              调试
            </t-button>
          </div>
          <div class="form-content">
            <t-form
              ref="form"
              :data="formData"
              :rules="rules"
              :label-width="100"
              :disabled="formDisabled"
              @reset="handleRest"
              @submit="handleSubmit"
            >
              <t-row :gutter="[0, 28]">
                <t-col :span="12">
                  <t-form-item label="父区划编号" name="parentCode">
                    <t-input v-model="formData.parentCode" :disabled="true" placeholder="请输入父区划编号" clearable />
                  </t-form-item>
                </t-col>
                <t-col :span="12">
                  <t-form-item label="父区划名称" name="parentName">
                    <t-input v-model="formData.parentName" :disabled="true" placeholder="请输入父区划名称" clearable />
                  </t-form-item>
                </t-col>
                <t-col :span="12">
                  <t-form-item label="区划编号" name="subCode">
                    <t-input-group :style="{ width: '100%' }">
                      <t-input
                        v-model="formData.parentCode"
                        :disabled="true"
                        :style="{ width: '80px' }"
                        placeholder=""
                      />
                      <t-input v-model="formData.subCode" placeholder="请输入子区划编号" @change="onSubCodeChange" />
                    </t-input-group>
                  </t-form-item>
                </t-col>
                <t-col :span="12">
                  <t-form-item label="区划名称" name="name">
                    <t-input v-model="formData.name" placeholder="请输入区划名称" clearable />
                  </t-form-item>
                </t-col>
                <t-col :span="12">
                  <t-form-item label="区划等级" name="regionLevel">
                    <t-radio-group v-model="formData.regionLevel" name="regionLevel">
                      <t-radio v-for="item in dictOptions" :key="item.dictKey" :value="item.dictKey">
                        {{ item.dictValue }}
                      </t-radio>
                    </t-radio-group>
                  </t-form-item>
                </t-col>
                <t-col :span="12">
                  <t-form-item label="区划排序" name="sort">
                    <t-input-number
                      v-model="formData.sort"
                      theme="column"
                      placeholder="请输入区划排序"
                      style="width: 100%"
                    ></t-input-number>
                  </t-form-item>
                </t-col>
                <t-col :span="12">
                  <t-form-item label="区划备注" name="remark">
                    <t-textarea v-model="formData.remark" placeholder="请输入区划备注" clearable />
                  </t-form-item>
                </t-col>
                <t-col :span="12">
                  <t-form-item>
                    <t-button theme="primary" type="submit">提交</t-button>
                    <t-button type="reset" variant="base" theme="default">清空</t-button>
                  </t-form-item>
                </t-col>
              </t-row>
            </t-form>
          </div>
        </t-affix>
      </t-col>
    </t-row>
    <dialog-import v-model:visible="importVisible" @submit="initTreeData" />

    <t-dialog v-model:visible="debugBox" header="行政区划数据调试" :on-cancel="onDebugCancel" @confirm="onDebugConfirm">
      <t-tree-select
        v-model="debugSelect"
        :data="debugTreeData"
        clearable
        placeholder="请选择"
        :tree-props="{
          keys: { value: 'value', label: 'title' },
          lazy: true,
          valueMode: 'all',
          load: loadDebugTree,
        }"
      />
    </t-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, unref, watch } from 'vue';
import { SearchIcon, AddIcon, DeleteIcon, CloudUploadIcon, CloudDownloadIcon, PlayIcon } from 'tdesign-icons-vue-next';
import { MessagePlugin, DialogPlugin } from 'tdesign-vue-next';
import { useDebounceFn } from '@vueuse/core';
import { useDesign } from '@/hooks/web/useDesign';
import { useSetting } from '@/hooks/setting/useSetting';
import { getDictData } from '@/api/system/dict';
import { changeDictDataType } from '@/utils';
import { downloadByData } from '@/utils/file/download';
import { getLazyTree, getDetail, submit, remove, exportRegion } from '@/api/base/region';
import DialogImport from '@/viewsBusiness/base/components/region/DialogImport.vue';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const topCode = ref('00');
const treeCode = ref('');
const treeParentCode = ref('[]');
const treeData = ref([]);

const filterText = ref('');
const handleFilterByText = ref(null);

const INITIAL_DATA = {
  parentCode: '',
  parentName: '',
  code: '',
  subCode: '',
  name: '',
  regionLevel: undefined,
  sort: undefined,
  remark: '',
};

const formData = ref({ ...INITIAL_DATA });
const form = ref(null);
const formDisabled = ref(false);

const rules = ref({
  parentCode: [{ required: true, message: '请输入父区划编号', type: 'error', trigger: 'blur' }],
  parentName: [{ required: true, message: '请输入父区划名称', type: 'error', trigger: 'blur' }],
  code: [{ required: true, message: '请输入区划编号', type: 'error', trigger: 'blur' }],
  subCode: [{ required: true, message: '请输入区划子编号', type: 'error', trigger: 'blur' }],
  name: [{ required: true, message: '请输入区划名称', type: 'error', trigger: 'blur' }],
  regionLevel: [{ required: true, message: '请选择区划等级', type: 'error', trigger: 'change' }],
  sort: [{ required: true, message: '请输入区划排序', type: 'error', trigger: 'blur' }],
});

const initTreeData = () => {
  getLazyTree(topCode.value).then((res) => {
    treeData.value = res.map((item) => {
      return {
        ...item,
        children: item.hasChildren,
      };
    });
  });
};
const loadTree = (node) => {
  return new Promise((resolve) => {
    const parentCode = node.data.id;
    getLazyTree(parentCode).then((res) => {
      resolve(
        res.map((item) => {
          return {
            ...item,
            children: item.hasChildren,
          };
        }),
      );
    });
  });
};

const dictOptions = ref([]);
async function getOptions() {
  const dict = await getDictData('region');
  dictOptions.value = changeDictDataType(dict);
}

const onInput = useDebounceFn(() => {
  handleFilterByText.value = (node: any) => {
    return node.label.indexOf(filterText.value) >= 0;
  };
}, 350);

onBeforeMount(() => {
  initTreeData();
  getOptions();
});

const onTreeActive = useDebounceFn((value: string[], { node }) => {
  if (!value.length) {
    treeCode.value = '';
    treeParentCode.value = '';
    formData.value = { ...INITIAL_DATA };
    form.value?.clearValidate();
    return;
  }
  treeCode.value = node.data.id;
  treeParentCode.value = node.data.parentId;
  getDetail(treeCode.value).then((res) => {
    form.value?.clearValidate();
    formData.value = { ...res, subCode: res.code.replace(res.parentCode, '') };
  });
}, 300);

const onSubCodeChange = useDebounceFn((val) => {
  const { parentCode } = unref(formData);
  formData.value.code = parentCode + val;
}, 300);

watch(() => formData.value.subCode, onSubCodeChange);

const handleSubmit = useDebounceFn(({ firstError }) => {
  if (!firstError) {
    formDisabled.value = true;
    const { parentCode } = unref(formData);
    const submitForm = {
      ...formData.value,
    };
    const tempParentCode = parentCode === topCode.value ? '' : parentCode;
    submitForm.code = tempParentCode + submitForm.subCode;
    submit(submitForm)
      .then(() => {
        MessagePlugin.success('提交成功');
        initTreeData();
        form.value?.reset();
      })
      .finally(() => {
        formDisabled.value = false;
      });
  } else {
    MessagePlugin.warning(firstError);
  }
}, 300);

const addChildren = useDebounceFn(() => {
  const { code, name, regionLevel } = unref(formData);
  if (!code || !name) {
    MessagePlugin.warning('请先选择一项区划');
    return;
  }
  formData.value = {
    ...INITIAL_DATA,
    parentCode: code,
    parentName: name,
    regionLevel: regionLevel === 5 ? 5 : regionLevel + 1,
  };
}, 300);

const handleDelete = useDebounceFn(() => {
  const { code, name } = unref(formData);
  if (!code || !name) {
    MessagePlugin.warning('请先选择一项区划');
    return;
  }
  const DialogInstance = DialogPlugin.confirm({
    header: '删除区划',
    theme: 'warning',
    body: `确定将 [${name}] 数据删除?`,
    onConfirm: useDebounceFn(() => {
      return remove(treeCode.value).then(() => {
        MessagePlugin.success('操作成功!');
        DialogInstance.destroy();
        initTreeData();
        form.value?.reset();
      });
    }, 300),
  });
}, 300);

const treeActived = ref([]);
const handleRest = () => {
  treeActived.value = [];
  treeCode.value = '';
  treeParentCode.value = '';
};

const importVisible = ref(false);
const handleImport = useDebounceFn(() => {
  importVisible.value = true;
}, 300);

const handleExport = useDebounceFn(() => {
  const DialogInstance = DialogPlugin.confirm({
    header: '提示',
    theme: 'info',
    body: '是否导出行政区划数据?',
    onConfirm: useDebounceFn(() => {
      exportRegion().then((res) => {
        downloadByData(res, `行政区划数据${+new Date()}.xlsx`);
        MessagePlugin.success('操作成功!');
        DialogInstance.destroy();
      });
    }, 300),
  });
}, 300);

const debugBox = ref(false);
const debugTreeData = ref([]);
const debugSelect = ref('');

const initDebugTreeData = () => {
  getLazyTree(topCode.value).then((res) => {
    debugTreeData.value = res.map((item) => {
      return {
        ...item,
        children: item.hasChildren,
      };
    });
  });
};
const loadDebugTree = (node) => {
  return new Promise((resolve) => {
    const parentCode = node.data.id;
    getLazyTree(parentCode).then((res) => {
      resolve(
        res.map((item) => {
          return {
            ...item,
            children: item.hasChildren,
          };
        }),
      );
    });
  });
};
const handleDebug = useDebounceFn(() => {
  debugBox.value = true;
  initDebugTreeData();
}, 300);

const onDebugCancel = () => {
  debugSelect.value = '';
  debugTreeData.value = [];
};

const onDebugConfirm = () => {
  MessagePlugin.success(`选中值为${debugSelect.value}`);
};
</script>

<style lang="less" scoped>
.form-content {
  margin-top: 35px;
}
</style>
