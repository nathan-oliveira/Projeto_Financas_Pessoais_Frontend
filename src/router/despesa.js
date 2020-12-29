export default {
  path: '/despesa',
  component: () => import('../views/financeiro/Despesa.vue'),
  meta: {
    login: true,
    types: "despesa",
  },
  children: [
    {
      path: '',
      name: 'listagemDespesa',
      component: () => import('../views/financeiro/Listagem.vue'),
      meta: {
        types: "despesa",
      }
    },
    {
      path: 'cadastrar',
      name: 'cadastrarDespesa',
      component: () => import('../views/financeiro/Cadastrar.vue'),
      meta: {
        types: "despesa",
      }
    },
    {
      path: 'editar/:id',
      name: 'editarDespesa',
      component: () => import('../views/financeiro/Editar.vue'),
      meta: {
        types: "despesa",
      }
    }
  ]
};
