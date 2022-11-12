import { request } from '@/utils/request';

enum Api {
  StartList = '/blade-flow/work/start-list',
  ClaimList = '/blade-flow/work/claim-list',
  TodoList = '/blade-flow/work/todo-list',
  SendList = '/blade-flow/work/send-list',
  DoneList = '/blade-flow/work/done-list',
  ClaimTask = '/blade-flow/work/claim-task',
  CompleteTask = '/blade-flow/work/complete-task',
}

export const startList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.StartList,
      params: {
        ...params,
        current,
        size,
      },
    },
    {
      joinTime: false,
    },
  );
};

export const claimList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.ClaimList,
      params: {
        ...params,
        current,
        size,
      },
    },
    {
      joinTime: false,
    },
  );
};

export const todoList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.TodoList,
      params: {
        ...params,
        current,
        size,
      },
    },
    {
      joinTime: false,
    },
  );
};

export const sendList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.SendList,
      params: {
        ...params,
        current,
        size,
      },
    },
    {
      joinTime: false,
    },
  );
};

export const doneList = (current: StrOrNum, size: StrOrNum, params: Recordable) => {
  return request.get(
    {
      url: Api.DoneList,
      params: {
        ...params,
        current,
        size,
      },
    },
    {
      joinTime: false,
    },
  );
};

export const claimTask = (taskId: string) => {
  return request.post(
    { url: Api.ClaimTask, params: { taskId } },
    {
      joinParamsToUrl: true,
      errorMessageMode: 'message',
    },
  );
};

export const completeTask = (data: Recordable) => {
  return request.post(
    {
      url: Api.CompleteTask,
      data,
    },
    {
      errorMessageMode: 'message',
    },
  );
};
