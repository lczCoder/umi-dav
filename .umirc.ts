import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [{ path: '/user', component: '@/pages/user', title: '用户页面' }],
    },
  ],
  fastRefresh: {},
});
