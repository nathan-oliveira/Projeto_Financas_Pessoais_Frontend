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
    erros: [],
    success: [],
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
    UPDATE_MENUACTIVE(state, payload) {
      state.menuActive = payload;
    },
    UPDATE_FORMACTIVE(state, payload) {
      state.formActive = payload;
    },
    UPDATE_ERROS(state, payload) {
      state.erros = payload;
    },
    UPDATE_SUCCESS(state, payload) {
      state.success = payload;
    },
  },
  actions: {
    getUsuario() {
      return api.get("/profile");
    },
    updateUser(context, payload) {
      return api.put("/users", payload);
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

            context.commit("UPDATE_USUARIO", { name: resp.data.name, email: resp.data.email, nivel: resp.data.nivel });
            context.commit("UPDATE_LOGIN", true);
            payload.router.push({ name: "home" });
            context.commit("UPDATE_FORMACTIVE", true);
          }

          context.commit("UPDATE_FORMACTIVE", false);
          context.commit("UPDATE_LOADING", false);
        });
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_FORMACTIVE", false);
      context.commit("UPDATE_USUARIO", { name: "", email: "", nivel: "" });
      context.commit("UPDATE_LOGIN", false);

      window.localStorage.removeItem("token");
    },
  },
  modules: {
  },
});
