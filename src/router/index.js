import Vue from 'vue';
import VueRouter from 'vue-router';

const LoginPage = () => import('../views/LoginPage/LoginPage.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginPage,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
