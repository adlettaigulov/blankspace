import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '../components/Catalog/Catalog.vue';
import Cart from '../components/Cart/Cart.vue';
import Checkout from '../components/Checkout/Checkout.vue';
import About from '../components/Static/About.vue';
import Delivery from '../components/Static/Delivery.vue';
import Payment from '../components/Static/Payment.vue';
import Admin from '../components/Admin/Admin.vue';
import Login from '../components/Admin/Login.vue';
import PageNotFound from '../components/Static/PageNotFound.vue';
import firebase from 'firebase/app';
import 'firebase/auth';

const routes = [
  {
    path: '/',
    redirect: '/catalog',
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: Catalog,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: Delivery,
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/:pathMatch(.*)*',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
