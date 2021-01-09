export default {
  setError(context, payload) {
    context.commit('UPDATE_ERROS', payload);

    setTimeout(() => {
      context.commit('UPDATE_ERROS', []);
    }, 3000);
  },
  setSuccess(context, payload) {
    context.commit('UPDATE_SUCCESS', payload);

    setTimeout(() => {
      context.commit('UPDATE_SUCCESS', []);
    }, 3000);
  },
};
