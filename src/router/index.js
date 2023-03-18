import CounterApp from '../components/CounterApp.vue';
import {createRouter, createWebHashHistory} from "vue-router"


const routes = [
  {
    path: '/counter',
    name: 'Counter',
    component: CounterApp,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
  },
  {
    path: '/',
    redirect: '/counter',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;