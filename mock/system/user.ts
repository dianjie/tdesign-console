import type { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/blade-auth/oauth/token',
    method: 'post',
    response: () => ({
      tenant_id: '000000',
      user_id: '1123598821738675201',
      dept_id: '1123598813738675201',
      post_id: '1123598817738675201',
      role_id: '1123598816738675201',
      oauth_id: '',
      account: 'admin',
      user_name: 'admin',
      nick_name: '管理员',
      role_name: 'administrator',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
      access_token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicG9zdF9pZCI6IjExMjM1OTg4MTc3Mzg2NzUyMDEiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidXNlcl9uYW1lIjoiYWRtaW4iLCJuaWNrX25hbWUiOiLnrqHnkIblkZgiLCJkZXRhaWwiOnsidHlwZSI6IndlYiJ9LCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiZGVwdF9pZCI6IjExMjM1OTg4MTM3Mzg2NzUyMDEiLCJhY2NvdW50IjoiYWRtaW4iLCJjbGllbnRfaWQiOiJzYWJlciIsImV4cCI6MTY2ODIxODMyMCwibmJmIjoxNjY4MjE0NzIwfQ.i-2QsO-e36wMbRt_xjGa8ljeqZD-LJ-BI4_PCF2YDQAuQSOG2eI5czB7SV3qMmzWGRnZJCVKEyBSRwNT67Gtlg',
      refresh_token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInJvbGVfaWQiOiIxMTIzNTk4ODE2NzM4Njc1MjAxIiwidG9rZW5fdHlwZSI6InJlZnJlc2hfdG9rZW4iLCJkZXB0X2lkIjoiMTEyMzU5ODgxMzczODY3NTIwMSIsImNsaWVudF9pZCI6InNhYmVyIiwiZXhwIjoxNjY4ODE5NTIwLCJuYmYiOjE2NjgyMTQ3MjB9.EMem9xkgsc1wSligeRYhfSGEY91np2hErGgvqkOC3nYiRKADvQbun2zhctfU7czquz34tH17EkP81jsaH84PQQ',
      token_type: 'bearer',
      expires_in: 3600,
      detail: { type: 'web' },
      license: 'powered by bladex',
    }),
  },
] as MockMethod[];
