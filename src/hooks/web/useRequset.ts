import type { Ref } from 'vue';
import { ref, unref } from 'vue';

import type { BasicPagination } from '@/api/model/baseModel';

export function useRequset(fn: Fn<any>, formData: any, callback: Fn<any>, hasPagination = true) {
  const data = ref([]);
  const pagination: Ref<BasicPagination> = ref({
    pageSize: 10,
    total: 0,
    current: 1,
  });
  const dataLoading = ref(false);

  const fetchData = async (newFormData?: any) => {
    dataLoading.value = true;
    try {
      if (hasPagination) {
        const { pageSize, current } = unref(pagination);
        const list = await fn(current, pageSize, newFormData || formData);
        data.value = list.records;
        pagination.value = {
          ...pagination.value,
          total: list.total,
        };
      } else {
        const list = await fn(newFormData || formData);
        data.value = list;
      }
    } catch (e) {
      console.log(e);
    } finally {
      dataLoading.value = false;
      callback();
    }
  };

  function setData(list: any[]) {
    data.value = list;
  }

  function setPagination(paginationData: BasicPagination) {
    pagination.value = paginationData;
  }

  function setDataLoading(loading: boolean) {
    dataLoading.value = loading;
  }

  return { fetchData, data, dataLoading, pagination, setData, setPagination, setDataLoading };
}
