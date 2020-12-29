export default {
  path: '/receita',
  component: () => import('../views/receita/Receita.vue'),
  meta: {
    login: true,
  },
  children: [
    {
      path: '',
      name: 'listagemReceita',
      component: () => import('../views/receita/Listagem.vue'),
    },
    {
      path: 'cadastrar',
      name: 'cadastrarReceita',
      component: () => import('../views/receita/Cadastrar.vue')
    }
  ]
};
