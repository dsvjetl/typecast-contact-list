import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/AllContacts.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/AllContacts.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
