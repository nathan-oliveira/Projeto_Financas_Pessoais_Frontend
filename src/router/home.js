export default {
  path: '/',
  name: 'home',
  meta: {
    login: true,
  },
  component: () => import('../views/Home.vue'),
};
