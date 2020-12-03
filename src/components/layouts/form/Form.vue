<template>
  <form class="form">
    <MensagemErro />
    <MensagemSuccess />
    <div class="form-group" v-if="$store.state.formActive || $store.state.login">
      <label>Nome:</label>
      <input
        type="text"
        placeholder="Nome"
        v-model="usuario.name"
      />
    </div>
    <div class="form-group">
      <label>E-mail:</label>
      <input
        type="text"
        placeholder="E-mail"
        v-model="usuario.email"
      />
    </div>
    <div class="form-group">
      <label>Senha:</label>
      <input
        type="password"
        placeholder="Senha"
        v-model="usuario.password"
      />
    </div>
    <div class="form-group" v-if="$store.state.formActive || $store.state.login">
      <label>Confirmar Senha:</label>
      <input
        type="password"
        placeholder="Confirmar Senha"
        v-model="usuario.password_confirmation"
      />
    </div>
    <div :class="`form-button${$store.state.login ? ' updated' : ''}`">
      <slot></slot>
      <a
        class="btn"
        @click.prevent="updated"
        v-if="$store.state.login"
      >
        Atualizar
      </a>
      <a
        class="btn"
        @click.prevent="authentication" v-else
      >
        {{$store.state.formActive ? 'Cadastrar': 'Entrar'}}
      </a>
    </div>
  </form>
</template>

<script>
import MensagemErro from "@/components/layouts/MensagemErro.vue";
import MensagemSuccess from "@/components/layouts/MensagemSuccess.vue";

export default {
  name: "Form",
  components: {
    MensagemErro,
    MensagemSuccess,
  },
  data() {
    return {
      usuario: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  beforeCreate() {
    if (window.localStorage.token) {
      this.$store.dispatch("getUsuario")
        .then((resp) => {
          this.$store.commit('UPDATE_USUARIO', { name: resp.data.name, email: resp.data.email, nivel: resp.data.nivel });
          this.usuario.name = resp.data.name;
          this.usuario.email = resp.data.email;
        });
    }
  },
  methods: {
    authentication() {
      this.$store
        .dispatch("authentication", { usuario: this.usuario, router: this.$router })
        .catch((err) => {
          this.$store.commit('UPDATE_ERROS', [err.response.data.message]);

          setTimeout(() => {
            this.$store.commit('UPDATE_ERROS', []);
          }, 4000);
        });
    },
    async updated() {
      if (!this.usuario.password) {
        this.$delete(this.usuario, 'password');
        this.$delete(this.usuario, 'password_confirmation');
      }

      this.$store
        .dispatch("updateUser", this.usuario)
        .then((resp) => {
          this.$store.commit('UPDATE_USUARIO', { name: resp.data.name, email: resp.data.email, nivel: resp.data.nivel });

          this.$store.commit('UPDATE_SUCCESS', ["Perfil atualizado com sucesso!"]);
          setTimeout(() => {
            this.$store.commit('UPDATE_SUCCESS', []);
          }, 4000);
        })
        .catch((err) => {
          this.$store.commit('UPDATE_ERROS', [err.response.data.message]);

          setTimeout(() => {
            this.$store.commit('UPDATE_ERROS', []);
          }, 4000);
        });
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 22px;
}

.updated {
  float: right;
}

.form-group {
  margin-top: 1%;
}

@media screen and (max-width: 739px) {
  .btn {
    width: 100%;
  }

  .updated {
    float: none;
  }
}
</style>
