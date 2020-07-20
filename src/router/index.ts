import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'AllContacts',
    component: () => import('../views/AllContacts.vue'),
  },
  {
    path: '/contact-detail',
    name: 'Contact',
    component: () => import('../views/ContactDetail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
