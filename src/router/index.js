import Vue from 'vue';
import VueRouter from 'vue-router';
import { DEFAULT_TITLE } from '../../dev.env.js';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue'),
    meta: {
      title: `Home | ${DEFAULT_TITLE}`,
    },
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail/ProductDetail.vue'),
    meta: {
      title: `Product Detail | ${DEFAULT_TITLE}`,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/About.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin/Admin.vue'),
    children: [
      { path: '/', name: 'AdminMain', component: () => import('@/components/Admin/Main.vue') },
      {
        path: 'product/create',
        name: 'AdminCreateProduct',
        component: () => import('@/components/Admin/CreateProduct.vue'),
      },
      {
        path: 'product/:id/update',
        name: 'AdminCreateProduct',
        component: () => import('@/components/Admin/UpdateProduct.vue'),
      },
    ],
  },
  {
    path: '/sign-in',
    name: 'SignIn', 
    component: () => import('@/views/Auth/SignIn.vue'),
    meta: {
      title: `Sign In | ${DEFAULT_TITLE}`,
    },
  },
  {
    path: '/sign-up',
    name: 'SignUp', 
    component: () => import('@/views/Auth/SignUp.vue'),
    meta: {
      title: `Sign Up | ${DEFAULT_TITLE}`,
    },
  },
  { path: '*', component: () => import('@/views/404/PageNotFound.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
