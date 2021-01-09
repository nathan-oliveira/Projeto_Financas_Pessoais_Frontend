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
          const urlFoto = resp.data.foto ? resp.data.foto : 'https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png';
          localStorage.setItem("token", `Bearer ${resp.data.token}`);

          context.commit("UPDATE_LOGIN", true);
          payload.router.push({ name: "home" });

          context.commit("UPDATE_USUARIO", {
            name: resp.data.name,
            email: resp.data.email,
            nivel: resp.data.nivel,
            foto: urlFoto,
            password: undefined,
            password_confirmation: undefined,
          });
        }

        context.commit("UPDATE_FORMACTIVE", false);
        context.commit("UPDATE_LOADING", false);
      });
  },
  deslogarUsuario(context, payload) {
    context.commit("UPDATE_LOGIN", false);
    context.commit("UPDATE_FORMACTIVE", false);
    context.commit("UPDATE_USUARIO", {
      name: "",
      email: "",
      nivel: "",
      foto: "",
      password: undefined,
      password_confirmation: undefined,
    });

    window.localStorage.removeItem("token");
    payload.router.push({ name: "authentication" });
  },
};
