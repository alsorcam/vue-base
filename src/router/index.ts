import Vue from 'vue';
import VueRouter from 'vue-router';
import Demo from '../views/Demo.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo,
    children: [
      { path: '/', redirect: '/demo/routing' },
      { path: 'screenLock', name: 'screenLock', component: () => import('../views/demo/Screen-Lock.vue')},
      { path: 'routing', name: 'routing', component: () => import('../views/demo/Routing.vue')},
      { path: 'i18n', name: 'i18n', component: () => import('../views/demo/Routing.vue')}
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
