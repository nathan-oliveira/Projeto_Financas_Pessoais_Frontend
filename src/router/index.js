import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      login: true,
    },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: () => import(/* webpackChunkName: "authentication" */ '../views/Auth.vue'),
  },
  {
    path: '/cadastrar',
    component: () => import(/* webpackChunkName: "home" */ '../views/category/Cadastrar.vue'),
    meta: {
      login: true,
    },
    children: [
      {
        path: '',
        name: 'cadastrar',
        component: () => import(/* webpackChunkName: "home" */ '../views/category/Cadastrar.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.login)) {
    if (!window.localStorage.token) {
      next("/authentication");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
