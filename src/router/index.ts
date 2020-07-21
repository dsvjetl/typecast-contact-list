import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'ContactsAll',
    component: () => import('../views/ContactsAll.vue'),
  },
  {
    path: '/contact-details',
    name: 'ContactDetails',
    component: () => import('../views/ContactDetails.vue'),
  },
  {
    path: '/contact-new',
    name: 'ContactNew',
    component: () => import('../views/ContactNew.vue'),
  },
  {
    path: '/contact-edit',
    name: 'ContactEdit',
    component: () => import('../views/ContactEdit.vue'),
  },
  {
    path: '/contacts-favorites',
    name: 'ContactsFavorites',
    component: () => import('../views/ContactsFavorites.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
