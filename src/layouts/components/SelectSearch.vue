<template>
  <div
    :class="{
      'header-menu-search': isSide,
      'header-menu-search-left': !isSide,
    }"
  >
    <t-select-input
      :value="searchData"
      :popup-visible="popupVisible"
      placeholder="请输入搜索内容"
      :borderless="true"
      allow-input
      clearable
      overlay-class-name="t-select__dropdown narrow-scrollbar"
      @popup-visible-change="onPopupVisibleChange"
      @clear="onClear"
      @input-change="onInputChange"
    >
      <template #label>
        <t-icon class="icon" name="search" size="20" style="margin-right: 6px" />
      </template>
      <template #panel>
        <ul
          v-show="filterMenuList.length && popupVisible"
          class="my-autocomplete t-select__dropdown-inner t-select__dropdown-inner--size-m"
        >
          <li v-for="(item, index) in filterMenuList" :key="`${item.name}${index}`" @click="menuItemClick(item)">
            <div class="title">
              <t-icon v-if="beIcon(item)" class="title__icon" :name="item.icon" />
              <component :is="beRender(item).render" v-else-if="beRender(item).can" class="title__icon" />
              <span class="title__name">{{ item.title }}</span>
            </div>
            <div class="addr">
              <span> {{ item.path }}</span>
            </div>
          </li>
        </ul>
        <div v-show="!filterMenuList.length && popupVisible" style="text-align: center; padding: 8px">暂无数据</div>
      </template>
    </t-select-input>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { isEmpty, isObject } from 'lodash-es';
import { useRouter } from 'vue-router';
import { useDebounceFn } from '@vueuse/core';
import { usePermissionStore } from '@/store';
import type { MenuRoute } from '@/types/interface';

const props = defineProps({
  layout: String,
});

const permissionStore = usePermissionStore();
const { backMenuList: menuRouters } = storeToRefs(permissionStore);

const searchData = ref('');
const popupVisible = ref(false);

const isSide = computed(() => {
  return props.layout === 'side';
});

const onPopupVisibleChange = (val) => {
  popupVisible.value = val;
};

const flatMenu = (list) => {
  const result = [];
  function flatten(arr) {
    arr.forEach((ele) => {
      if (!isEmpty(ele.children)) {
        flatten(ele.children);
      } else {
        result.push(ele);
      }
    });
  }
  flatten(list);
  return result;
};

const menuList = computed(() => {
  return flatMenu(menuRouters.value);
});

const filterMenuList = computed(() => {
  if (searchData.value) {
    return menuList.value.filter((item) => {
      return item.title.includes(searchData.value);
    });
  }
  return menuList.value;
});

const getHref = (item: MenuRoute) => {
  return item.path.match(/(http|https):\/\/([\w.]+\/?)\S*/);
};

const getPath = (item) => {
  return item.meta?.single ? item.redirect : item.path;
};

const beIcon = (item: MenuRoute) => {
  return item.icon && typeof item.icon === 'string';
};

const beRender = (item: MenuRoute) => {
  if (isObject(item.icon) && typeof item.icon.render === 'function') {
    return {
      can: true,
      render: item.icon.render,
    };
  }
  return {
    can: false,
    render: null,
  };
};

const openHref = (url: string) => {
  url && window.open(url);
};

const router = useRouter();

const menuItemClick = (item) => {
  const herfMatch = getHref(item);
  if (herfMatch) {
    openHref(herfMatch[0]);
  } else {
    const lastPath = getPath(item);
    router.push({
      path: lastPath,
    });
  }
  popupVisible.value = false;
  searchData.value = undefined;
};
const onInputChange = useDebounceFn((val) => {
  searchData.value = val;
}, 500);
const onClear = () => {
  searchData.value = undefined;
};
</script>
<style lang="less" scoped>
.header-menu-search {
  display: flex;
  margin-left: 16px;

  :deep(.t-input) {
    padding-right: 30px;

    .t-input__clear {
      position: absolute;
      right: 8px;
    }
  }
}

.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    cursor: pointer;

    &:hover {
      background-color: var(--td-brand-color-light);
    }

    .title__icon {
      margin-right: 5px;
      display: inline-block;
      vertical-align: middle;
    }

    .title__name {
      display: inline-block;
      text-overflow: ellipsis;
      overflow: hidden;
      vertical-align: middle;
    }

    .addr {
      padding-top: 5px;
      width: 100%;
      font-size: 12px;
      color: #b4b4b4;
    }
  }
}

.header-menu-search-left {
  display: flex;
  align-items: center;

  :deep(.t-input) {
    padding-right: 30px;

    .t-input__clear {
      position: absolute;
      right: 8px;
    }
  }
}
</style>
