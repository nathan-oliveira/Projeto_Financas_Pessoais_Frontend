<template>
  <form class="form">
    <MensagemErro />
    <div class="form-row">
      <div class="form-group col-4 col-right">
        <label>Descrição:</label>
        <input
          type="text"
          placeholder="Descrição da categoria"
          v-model.trim="categoria.name"
          maxlength="200"
        />
      </div>
      <div class="form-group col-8">
        <label>Icone:</label>
        <input
          type="text"
          placeholder="URL do icone"
          v-model.trim="categoria.icon"
          maxlength="200"
        />
      </div>
    </div>
    <div class="form-button">
      <button class="btn" @click.prevent="adicionarCategoria">Cadastrar</button>
    </div>
  </form>
</template>

<script>
import api from "@/services";

export default {
  name: "categoriaCadastrar",
  data() {
    return {
      categoria: {
        name: "",
        icon: "",
      },
    };
  },
  methods: {
    adicionarCategoria(event) {
      event.target.classList.toggle("disabled");

      api.post("/category", this.categoria)
        .then(() => {
          this.$router.push({ name: "listagemCategoria" });
        })
        .catch((err) => {
          event.target.classList.toggle("disabled");
          this.$store.dispatch("setError", [err.response.data.message]);
        });
    },
  },
};
</script>

<style scoped>
.erros {
  margin: 0 0 10px 0;
}

.grid {
  margin-top: -5px;
}

.form-group {
  margin-bottom: 0px;
}

@media screen and (max-width: 518px) {
  .form-group {
    margin-top: 1%;
  }
}

.form-button {
  float: right;
}

.form-button {
  margin-top: 2%;
}
</style>
