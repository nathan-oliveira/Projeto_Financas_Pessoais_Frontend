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
    login: localStorage.getItem("token"),
    usuario: null,
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = payload;
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
    getUsuario(context) {
      return api.get('/profile')
        .then((resp) => {
          context.commit('UPDATE_USUARIO', { name: resp.data.name, email: resp.data.email, nivel: resp.data.nivel });
        });
    },
    authentication(context, payload) {
      return api.login({
        name: payload.usuario.name,
        email: payload.usuario.email,
        password: payload.usuario.password,
        password_confirmation: payload.usuario.password_confirmation,
      }, this.state.formActive)
        .then((resp) => {
          if (resp.data.token) {
            localStorage.setItem("token", `Bearer ${resp.data.token}`);

            context.commit('UPDATE_USUARIO', { name: resp.data.name, email: resp.data.email, nivel: resp.data.nivel });
            context.commit('UPDATE_LOGIN', true);
            payload.router.push({ name: "home" });
            context.commit('UPDATE_FORMACTIVE', true);
          }

          context.commit('UPDATE_FORMACTIVE', false);
          context.commit('UPDATE_LOADING', false);
        });
    },
    deslogarUsuario(context) {
      context.commit('UPDATE_FORMACTIVE', false);
      context.commit("UPDATE_USUARIO", { name: "", email: "", nivel: "" });
      context.commit("UPDATE_LOGIN", false);

      window.localStorage.removeItem("token");
    },
  },
  modules: {
  },
});
