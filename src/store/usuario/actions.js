import api from '@/services';

export default {
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

          context.commit("UPDATE_USUARIO", {
            name: resp.data.name,
            email: resp.data.email,
            nivel: resp.data.nivel,
            password: undefined,
            password_confirmation: undefined,
          });

          context.commit("UPDATE_LOGIN", true);
          payload.router.push({ name: "home" });
        }

        context.commit("UPDATE_FORMACTIVE", false);
        context.commit("UPDATE_LOADING", false);
      });
  },
  deslogarUsuario(context) {
    context.commit("UPDATE_FORMACTIVE", false);
    context.commit("UPDATE_USUARIO", {
      name: "",
      email: "",
      nivel: "",
      password: undefined,
      password_confirmation: undefined,
    });
    context.commit("UPDATE_LOGIN", false);

    window.localStorage.removeItem("token");
  },
};
