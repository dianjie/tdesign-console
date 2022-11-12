import { request } from '@/utils/request';

enum Api {
  LeaveProcess = '/blade-desk/process/leave/start-process',
  LeaveDetail = '/blade-desk/process/leave/detail',
}

export const leaveProcess = (data: Recordable) => {
  return request.post(
    {
      url: Api.LeaveProcess,
      data,
    },
    {
      errorMessageMode: 'message',
    },
  );
};
export const leaveDetail = (businessId: string) => {
  return request.get({
    url: Api.LeaveDetail,
    params: {
      businessId,
    },
  });
};
