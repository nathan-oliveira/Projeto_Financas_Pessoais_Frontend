import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    menuActive: true,
    formActive: false,
    usuario: localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")) : null,
  },
  getters: {
    getUsuario(state) {
      return state.usuario;
    },
    getToken(state) {
      return state.usuario.token;
    },
    getMenuActive(state) {
      return state.menuActive;
    },
    getFormActive(state) {
      return state.formActive;
    },
  },
  mutations: {
    setUsuario(state, value) {
      state.usuario = value;
    },
    setConteudosLinhaTempo(state, value) {
      state.conteudosLinhaTempo = value;
    },
    setMenuActive(state, value) {
      state.menuActive = value;
    },
    setFormActive(state, value) {
      state.formActive = value;
    },
  },
});
