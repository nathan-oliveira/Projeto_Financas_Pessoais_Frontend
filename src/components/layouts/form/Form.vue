<template>
  <form class="form">
    <div class="form-group" v-if="this.$store.getters.getFormActive">
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
    <div class="form-group" v-if="this.$store.getters.getFormActive">
      <label>Confirmar Senha:</label>
      <input
        type="password"
        placeholder="Confirmar Senha"
        v-model="usuario.password_confirmation"
      />
    </div>
    <div class="form-button">
      <slot></slot>
      <a class="btn" @click="auth()">
        {{this.$store.getters.getFormActive ? 'Cadastrar': 'Entrar'}}
      </a>
    </div>
  </form>
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
  methods: {
    auth() {
      this.$store
        .dispatch("authentication", this.usuario)
        .then((resp) => {
          if (this.$store.getters.getFormActive) {
            this.$store.commit('UPDATE_LOGIN', false);
          } else {
            console.log(resp.data.name);
            localStorage.setItem("token", `Bearer ${resp.data.token}`);

            this.$store.commit('UPDATE_USUARIO', {
              name: resp.data.name,
              email: resp.data.email,
            });

            this.$store.commit('UPDATE_LOGIN', true);
            this.$router.push({ name: "home" });
          }

          this.$store.commit('setFormActive', false);
        })
        .catch((err) => {
          console.log('ERROR => ', err.response.data);
        });
    },
    actionForms() {
      this.$store.commit('setFormActive', !this.$store.getters.getFormActive);
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
}

.form-button {
  margin-top: 3%;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.form-group {
  padding: 2% 0;
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

@media screen and (max-width: 518px) {
  .form-group label {
    font-size: 1rem;
  }

  .form-group input,
  .form-group textarea {
    padding: 12px;
  }
}

.form-button a {
  cursor: pointer;
}
</style>
