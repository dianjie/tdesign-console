import { LAYOUT } from '@/router/constant';

export default [
  {
    path: '/work/process/leave',
    name: 'leaveProces',
    component: LAYOUT,
    redirect: '/work/process/leave/form',
    children: [
      {
        path: 'form/:processDefinitionId',
        name: 'leaveStart',
        component: () => import('@/views/process/leave/form.vue'),
        meta: { title: '发起请假流程' },
      },
      {
        path: 'handle/:taskId/:processInstanceId/:businessId',
        name: 'leaveHandle',
        component: () => import('@/views/process/leave/handle.vue'),
        meta: { title: '处理请假流程' },
      },
      {
        path: 'detail/:processInstanceId/:businessId',
        name: 'leaveDetail',
        component: () => import('@/views/process/leave/detail.vue'),
        meta: { title: '请假流程详情' },
      },
    ],
  },
];
