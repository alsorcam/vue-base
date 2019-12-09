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
      { path: 'screenLock', name: 'screenLock', component: () => import('../views/Screen-Lock.vue')}
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
