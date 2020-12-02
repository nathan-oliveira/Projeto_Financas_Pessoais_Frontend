<template>
  <div>
    <form class="form">
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
  </div>
</template>

<script>
export default {
  name: "Form",
  props: ["dataUser"],
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
  asyncComputed: {
    async user() {
      const resp = await this.$store.dispatch("getUsuario");
      console.log('asyncComputed', resp.data);
      this.$store.commit('UPDATE_USUARIO', { name: resp.data.name, email: resp.data.email, nivel: resp.data.nivel });
      return resp.data;
    },
  },
  methods: {
    authentication() {
      this.$store.commit('UPDATE_LOADING', true);
      this.$store
        .dispatch("authentication", { usuario: this.usuario, router: this.$router })
        .catch((err) => {
          console.log('ERROR => ', err.response.data);
          this.$store.commit('UPDATE_LOADING', false);
        });
    },
    updated() {
      if (window.localStorage.token) {
        if (!this.usuario.password) {
          this.$delete(this.usuario, 'password');
          this.$delete(this.usuario, 'password_confirmation');
        }

        this.$store
          .dispatch("updateUser", this.usuario)
          .catch((err) => {
            console.log('ERROR => ', err.response.data);
          });
      }
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

@media screen and (max-width: 739px) {
  .btn {
    width: 100%;
  }

  .updated {
    float: none;
  }
}
</style>
