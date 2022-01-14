import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      title: '首页',
    },
    {
      path: '/user',
      component: '@/pages/user',
      title: '用户界面',
    },
  ],
  fastRefresh: {},
});
