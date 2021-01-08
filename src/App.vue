<template>
  <div>
    <div :class="$store.state.login ?
      ($store.state.menuActive ? 'content_web1' : 'content_web2') : 'content_web'">
      <SideBar v-if="this.$store.state.login" />
      <NavBar>
        <transition mode="out-in">
          <router-view />
        </transition>
        <Footer />
      </NavBar>
    </div>
  </div>
</template>

<script>
import api from "@/services";
import NavBar from "@/components/layouts/nav/NavBar.vue";
import SideBar from "@/components/layouts/nav/SideBar.vue";
import Footer from "@/components/layouts/footer/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
    Footer
  },
  beforeCreate() {
    if (window.localStorage.token) {
      api.validateToken()
        .then(() => {
          this.$store.dispatch("getUsuario")
            .then((resp) => {
              const urlFoto = resp.data.foto ? resp.data.foto : 'https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png';
              this.$store.commit('UPDATE_USUARIO', {
                name: resp.data.name,
                email: resp.data.email,
                nivel: resp.data.nivel,
                foto: urlFoto
              });
            })
            .catch(() => {
              this.$router.push("/authentication");
              this.$store.dispatch("deslogarUsuario");
              window.localStorage.removeItem("token");
            });
        })
        .catch(() => {
          this.$router.push("/authentication");
          this.$store.dispatch("deslogarUsuario");
          window.localStorage.removeItem("token");
        });
    } else {
      this.$router.push("/authentication");
      this.$store.dispatch("deslogarUsuario");
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
@import "./assets/styleGlobal.css";
</style>
