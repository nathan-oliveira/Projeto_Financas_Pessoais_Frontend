<template>
  <div :class="this.$store.state.login ? 'content_app': ''">
    <Header />
    <Main>
      <transition mode="out-in">
        <router-view />
      </transition>
      <Footer />
    </Main>
  </div>
</template>

<script>
import api from "@/services";
import Header from "@/components/layouts/header/Header.vue";
import Main from "@/components/layouts/main/Main.vue";
import Footer from "@/components/layouts/footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  },
  beforeCreate() {
    if (this.$store.state.login) {
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
              this.$store.dispatch("deslogarUsuario", { router: this.$router });
            });
        })
        .catch(() => {
          this.$store.dispatch("deslogarUsuario", { router: this.$router });
        });
    } else {
      this.$store.dispatch("deslogarUsuario", { router: this.$router });
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");
@import "./assets/styleGlobal.css";
</style>
