import { RouteRecordRaw } from 'vue-router';
import AboutLayout from '@/layout/about.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      layout: AboutLayout,
    },
  },
];

export default routes;
