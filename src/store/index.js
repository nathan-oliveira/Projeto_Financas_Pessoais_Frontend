import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/services';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    loading: false,
    menuActive: false,
    formActive: false,
    login: !!(localStorage.getItem("usuario") && localStorage.getItem("token")),
    usuario: localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")) : null,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
      localStorage.setItem("usuario", JSON.stringify(payload));
    },
    UPDATE_LOADING(state, payload) {
      state.loading = payload;
    },
    UPDATE_MENUACTIVE(state, value) {
      state.menuActive = value;
    },
    UPDATE_FORMACTIVE(state, value) {
      state.formActive = value;
    },
  },
  actions: {
    authentication(context, payload) {
      return api.login({
        name: payload.name,
        email: payload.email,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      }, this.state.formActive);

      /* .then((resp) => {
          if (this.getters.getFormActive) {
            context.commit('UPDATE_LOGIN', false);
            context.commit('UPDATE_FORMACTIVE', false);
          } else {
            window.localStorage.token = `Bearer ${resp.data.token}`;

            context.commit('UPDATE_USUARIO', {
              name: payload.name,
              email: payload.email,
            });

            context.commit('UPDATE_LOGIN', true);
          }
        });
        */
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", { name: "", email: "" });

      window.localStorage.removeItem("token");
      window.localStorage.removeItem("usuario");

      context.commit("UPDATE_LOGIN", false);
    },
  },
  modules: {
  },
});
