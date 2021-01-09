export default {
  login: localStorage.getItem("token") ? true : false,
  usuario: {
    name: "", email: "", nivel: "", foto: "", password: undefined, password_confirmation: undefined,
  },
};
