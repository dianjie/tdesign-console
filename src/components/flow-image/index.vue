<template>
  <t-dialog
    v-model:visible="flowImageVisible"
    header="流程图"
    width="65%"
    :cancel-btn="null"
    @confirm="
      () => {
        flowImageVisible = false;
      }
    "
  >
    <template #body>
      <img :src="flowUrl" alt="流程图" style="display: block; margin: 0 auto; padding: 25px 0" />
    </template>
  </t-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { loadImage, removeImageBlanks, emptyImage } from '@/utils';
import { getDiagramViewUrl, getResourceViewUrl } from '@/api/flow/flow';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'resource',
    validator(value: string) {
      return ['diagram', 'resource'].includes(value);
    },
  },
  rowData: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const emit = defineEmits(['update:visible']);

const flowImageVisible = ref(false);
const flowUrl = ref('');

const handleImage = (row) => {
  let apiMethod = null;
  switch (props.type) {
    case 'diagram':
      apiMethod = getDiagramViewUrl;
      break;
    case 'resource':
      apiMethod = getResourceViewUrl;
      break;
    default:
      apiMethod = getResourceViewUrl;
      break;
  }
  const imageUrl = apiMethod(row);
  loadImage(imageUrl)
    .then((image: HTMLImageElement) => {
      flowUrl.value = removeImageBlanks(image);
    })
    .catch(() => {
      flowUrl.value = emptyImage;
    })
    .finally(() => {
      flowImageVisible.value = true;
    });
};

watch(
  () => flowImageVisible.value,
  (val) => {
    emit('update:visible', val);
  },
);

watch(
  () => props.visible,
  (val) => {
    if (val) {
      handleImage(props.rowData);
    }
  },
);
</script>
