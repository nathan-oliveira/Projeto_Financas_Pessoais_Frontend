export default {
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
    {
      path: 'cadastrar',
      name: 'cadastrarMetas',
      component: () => import('../views/metas/Cadastrar.vue'),
    },
    {
      path: 'editar/:id',
      name: 'editarMetas',
      component: () => import('../views/metas/Editar.vue'),
    }
  ],
};
