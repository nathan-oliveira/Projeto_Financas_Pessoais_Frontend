<template>
  <div :class="$store.state.login ?
    ($store.state.menuActive ? 'content_web1' : 'content_web2') : 'content_web'">
    <SideBar />
    <NavBar :nomeUsuario="nameUser">
      <transition mode="out-in">
        <router-view />
      </transition>
    </NavBar>
  </div>
</template>

<script>
import api from "@/services";
import NavBar from "@/components/layouts/nav/NavBar.vue";
import SideBar from "@/components/layouts/nav/SideBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
  beforeCreate() {
    if (window.localStorage.token) {
      api.validateToken()
        .then(() => {
          this.$store.dispatch("getUsuario")
            .then((resp) => {
              this.$store.commit('UPDATE_USUARIO', { name: resp.data.name, email: resp.data.email, nivel: resp.data.nivel });
            });
        })
        .catch(() => {
          window.localStorage.removeItem("token");
          this.$router.push("/authentication");
        });
    }
  },
  computed: {
    nameUser() {
      if (this.$store.state.usuario) {
        return this.$store.state.usuario.name.split(' ')[0];
      }

      return "Carregando...";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
@import "./assets/styleGlobal.css";
</style>
