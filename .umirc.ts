import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/Home/index',
      title: '首页',
    },
  ],
  fastRefresh: {},
});
