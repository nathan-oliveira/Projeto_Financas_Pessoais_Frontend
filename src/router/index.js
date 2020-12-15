import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    component: () => import('../views/PaginaNaoEncontrada.vue'),
  },
  {
    path: '/',
    name: 'home',
    meta: {
      login: true,
    },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/authentication',
    name: 'authentication',
    meta: {
      access: true,
    },
    component: () => import('../views/Auth.vue'),
  },
  {
    path: '/categoria',
    component: () => import('../views/categoria/Categoria.vue'),
    meta: {
      login: true,
    },
    children: [
      {
        path: '',
        name: 'listagemCategoria',
        component: () => import('../views/categoria/Listagem.vue'),
      },
      {
        path: 'cadastrar',
        name: 'cadastrarCategoria',
        component: () => import('../views/categoria/Cadastrar.vue'),
      },
      {
        path: 'editar/:id',
        name: 'editarCategoria',
        component: () => import('../views/categoria/Editar.vue'),
      }
    ],
  },
  {
    path: '/metas',
    component: () => import('../views/metas/Metas.vue'),
    meta: {
      login: true,
    },
    children: [
      {
        path: '',
        name: 'listagemMetas',
        component: () => import('../views/metas/Listagem.vue'),
      },
    ],
  },
  {
    path: '/minha-conta',
    component: () => import('../views/perfil/Perfil.vue'),
    meta: {
      login: true,
    },
  },
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
