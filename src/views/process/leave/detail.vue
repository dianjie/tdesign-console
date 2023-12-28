<template>
  <div :class="tableVar">
    <t-affix ref="affix" :offset-top="getTableHeaderAffixedTop + 15" :container="getLayoutContainer">
      <t-row justify="space-between" align="center" style="position: relative; top: -15px; background-color: #fff">
        <t-col flex="0 0 auto">
          <div class="form__title" style="margin: 22px 0">请假流程详情</div>
        </t-col>
        <t-col flex="0 0 auto">
          <t-button theme="default" variant="outline" @click="handleCancel">关闭</t-button>
        </t-col>
      </t-row>
    </t-affix>
    <t-collapse :default-expand-all="true">
      <t-collapse-panel value="0" header="审批信息" class="reset_panel-body-background">
        <t-form ref="form" :data="formData" :label-width="80" :disabled="true" :rules="rules">
          <t-row :gutter="[0, 28]">
            <t-col :span="12">
              <t-form-item label="申请人" name="assigneeName">
                <t-input v-model="formData.assigneeName" placeholder="请输入申请人" clearable />
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="开始时间" name="startTime">
                <t-date-picker
                  v-model="formData.startTime"
                  enable-time-picker
                  allow-input
                  clearable
                  placeholder="请选择开始时间"
                  style="width: 100%"
                />
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="结束时间" name="endTime">
                <t-date-picker
                  v-model="formData.endTime"
                  enable-time-picker
                  allow-input
                  clearable
                  placeholder="请选择结束时间"
                  style="width: 100%"
                />
              </t-form-item>
            </t-col>
            <t-col :span="12">
              <t-form-item label="请假理由" name="reason">
                <t-textarea v-model="formData.reason" placeholder="请输入请假理由" />
              </t-form-item>
            </t-col>
          </t-row>
        </t-form>
      </t-collapse-panel>
      <t-collapse-panel value="1" header="流程信息" class="reset_panel-body-background">
        <t-list :split="true">
          <t-list-item v-for="(flow, index) in flowList" :key="flow.id">
            <template #content>
              <t-comment :author="flow.assigneeName" :datetime="flow.createTime">
                <template #content>
                  <div class="process_content">
                    <!-- historyActivityId 流程节点的主键ID -->
                    <p v-if="!flow.assignee && flow.historyActivityId === 'start'">
                      在 [{{ flow.createTime }}] 发起流程
                    </p>
                    <p v-if="!flow.assignee && index !== 0 && !flow.endTime">
                      [{{ flow.historyActivityName }}] 环节等待签收
                    </p>
                    <p v-if="!flow.assignee && flow.historyActivityId === 'end' && flow.endTime">
                      [{{ flow.endTime }}] 流程结束
                    </p>
                    <p v-if="flow.assignee">
                      在 [{{ flow.createTime }}] 开始处理 [{{ flow.historyActivityName }}] 环节
                    </p>
                    <p v-if="flow.historyActivityDurationTime !== ''">
                      任务历时：[{{ flow.historyActivityDurationTime }}]
                    </p>
                    <p v-if="flow.comment !== ''">批复意见：[{{ flow.comment }}]</p>
                    <p v-if="flow.endTime !== '' && flow.assignee">结束时间：[{{ flow.endTime }}]</p>
                  </div>
                </template>
              </t-comment>
            </template>
          </t-list-item>
        </t-list>
      </t-collapse-panel>
      <t-collapse-panel value="2" header="流程跟踪" class="reset_panel-body-background">
        <img v-if="flowUrl" :src="flowUrl" alt="流程跟踪" style="display: block; padding: 25px 0" />
      </t-collapse-panel>
    </t-collapse>
  </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { getDiagramViewUrl } from '@/api/flow/flow';
import { leaveDetail } from '@/api/process/leave';
import { historyFlowList } from '@/api/process/process';
import { useSetting } from '@/hooks/setting/useSetting';
import { useDesign } from '@/hooks/web/useDesign';
import { useTabsRouterStore } from '@/store';
import { emptyImage, loadImage, removeImageBlanks } from '@/utils';

const { tableVar } = useDesign();
const { getTableHeaderAffixedTop, getLayoutContainer } = useSetting();

const INITIAL_DATA = {
  assigneeName: '',
  startTime: '',
  endTime: '',
  reason: '',
  comment: '',
};
const rules = ref({
  comment: [{ required: true, message: '请输入批复意见', type: 'error', trigger: 'blur' }],
});

const formData = ref({ ...INITIAL_DATA });
const route = useRoute();
const router = useRouter();
const tabsRouterStore = useTabsRouterStore();
const { tabRouters } = tabsRouterStore;

const processInstanceId = computed(() => {
  return route.params.processInstanceId || '';
});

const businessId = computed(() => {
  return route.params.businessId || '';
});

const handleCancel = useDebounceFn(() => {
  const routeIdx = tabRouters.findIndex((i) => i.path === route.path);
  tabsRouterStore.subtractCurrentTabRouter({ path: route.path, routeIdx });
  router.replace({ path: `/work/start` });
}, 300);

const flowList = ref([]);
const flowUrl = ref('');
const initData = async () => {
  const detail = await leaveDetail(businessId.value as unknown as string);
  formData.value = { ...detail, assigneeName: detail.flow.assigneeName };
  const list = await historyFlowList(processInstanceId.value as unknown as string);
  flowList.value = list;
};

const handleImage = () => {
  const imageUrl = getDiagramViewUrl({ processInstanceId: processInstanceId.value });
  loadImage(imageUrl)
    .then((image: HTMLImageElement) => {
      flowUrl.value = removeImageBlanks(image);
    })
    .catch(() => {
      flowUrl.value = emptyImage;
    });
};

onMounted(() => {
  initData();
  handleImage();
});
</script>

<style scoped>
.process_content {
  line-height: 2.2;
}
</style>
