import { request } from '@/utils/request';

enum Api {
  HistoryFlowList = '/blade-flow/process/history-flow-list',
}

export const historyFlowList = (processInstanceId: string) => {
  return request.get({
    url: Api.HistoryFlowList,
    params: {
      processInstanceId,
    },
  });
};
