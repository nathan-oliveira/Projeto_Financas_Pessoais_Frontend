import Vue from 'vue';
import VueRouter from 'vue-router';

import home from "./home";
import categoria from "./categoria";
import metas from "./metas";
import authentication from "./authentication";
import perfil from "./perfil";
import receita from "./receita";

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: () => import('../views/PaginaNaoEncontrada.vue'),
  },
  home,
  authentication,
  categoria,
  metas,
  perfil,
  receita,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.login)) {
    if (!window.localStorage.token) next("/authentication");
    next();
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.access)) {
    if (window.localStorage.token) next("/");
    next();
  } else {
    next();
  }
});

export default router;
