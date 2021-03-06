export default {
  path: '/receita',
  component: () => import('../views/financeiro/Receita.vue'),
  meta: {
    login: true,
    types: "receita",
  },
  children: [
    {
      path: '',
      name: 'listagemReceita',
      component: () => import('../views/financeiro/Listagem.vue'),
      meta: {
        types: "receita",
      }
    },
    {
      path: 'cadastrar',
      name: 'cadastrarReceita',
      component: () => import('../views/financeiro/Cadastrar.vue'),
      meta: {
        types: "receita",
      }
    },
    {
      path: 'editar/:id',
      name: 'editarReceita',
      component: () => import('../views/financeiro/Editar.vue'),
      meta: {
        types: "receita",
      }
    }
  ]
};
