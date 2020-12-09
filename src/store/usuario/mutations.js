export default {
  UPDATE_LOGIN(state, payload) {
    state.login = payload;
  },
  UPDATE_USUARIO(state, payload) {
    state.usuario = Object.assign(state.usuario, payload);
  },
};
