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
      <!-- <Button
        type="button"
        :title="this.$store.getters.getFormActive ? 'Cadastrar': 'Entrar'"
        v-on:click="auth"
      /> -->
    </div>
  </form>
</template>

<script>
import api from "@/services";
// import Button from "@/components/layouts/button/Button.vue";

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
      api.login({
        name: this.usuario.name,
        email: this.usuario.email,
        password: this.usuario.password,
        password_confirmation: this.usuario.password_confirmation,
      }, this.$store.getters.getFormActive)
        .then((resp) => {
          this.$store.commit('setFormActive', false);

          if (resp.data.token) {
            this.$store.commit('setUsuario', resp.data);
            localStorage.setItem("usuario", JSON.stringify(resp.data));
            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.log('ERROR =>', err.response.data);
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
