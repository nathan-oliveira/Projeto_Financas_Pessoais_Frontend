export default {
  path: '/authentication',
  name: 'authentication',
  meta: {
    access: true,
  },
  component: () => import('../views/Auth.vue'),
};
