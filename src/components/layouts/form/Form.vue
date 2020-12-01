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
  created() {
    if (window.localStorage.token) {
      if (this.$store.state.usuario) {
        this.usuario.name = this.$store.state.usuario.name;
        this.usuario.email = this.$store.state.usuario.email;
      }
    } else {
      this.$store.commit('UPDATE_LOGIN', false);
      this.$store.commit('UPDATE_FORMACTIVE', false);
    }
  },
  computed: {
    usuariosState() {
      if (this.$store.state.usuario) {
        return {
          usuario: this.$store.state.usuario.name,
          email: this.$store.state.usuario.email,
        };
      }
      return {
        usuario: "",
        email: "",
      };
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
        console.log(this.$store.state.usuario.name);
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

.form {
  width: 100%;
}

.form-button {
  margin-top: 3%;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.form-button a {
  cursor: pointer;
}

.form-group {
  padding: 1% 0;
}

.form-group label {
  display: block;
  width: 100%;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.767);
  margin-bottom: 6px;
}

.form-group input,
.form-group textarea {
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  font-size: 1rem;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  margin-bottom: 0px;
  width: 100%;
  outline: none;
}

.form-group input:hover,
.form-group input:focus,
.form-group textarea:hover,
.form-group textarea:focus {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.1);
  border-color: #87f;
}

@media screen and (max-width: 739px) {
  .btn {
    width: 100%;
  }

  .updated {
    float: none;
  }
}

@media screen and (max-width: 518px) {
  .form-group label {
    font-size: 1rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 12px;
  }
}
</style>
