import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/login' },
    { path: '/first', component: '@/pages/first/index' },
    { path: '/second', component: '@/pages/second/index' },
  ],
  qiankun: {
    slave: {}
  },
  fastRefresh: {},
  proxy: {
    '/api': {
      // 'target': 'http://172.19.2.91:7001',
      'target': 'http://localhost:9090',
      'changeOrigin': true,
    },
  },

});
