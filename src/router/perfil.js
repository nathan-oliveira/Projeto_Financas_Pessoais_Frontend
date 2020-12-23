export default {
  path: '/minha-conta',
  component: () => import('../views/perfil/Perfil.vue'),
  meta: {
    login: true,
  },
};
