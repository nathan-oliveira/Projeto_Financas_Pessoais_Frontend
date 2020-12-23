export default {
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
};
