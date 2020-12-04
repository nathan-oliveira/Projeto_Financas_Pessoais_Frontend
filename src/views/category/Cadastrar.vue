<template>
  <form class="form">
    <div class="grid">
      <div class="form-group">
        <label>Categoria:</label>
        <input
          type="text"
          placeholder="Nome da Categoria"
          v-model="categoria.name"
        />
      </div>
      <div class="form-group">
        <label>Icone:</label>
        <input
          type="text"
          placeholder="URL do icone"
          v-model="categoria.icon"
        />
      </div>
    </div>
    <div class="form-button">
      <a class="btn" @click.prevent="adicionarCategoria">Cadastrar</a>
    </div>
  </form>
</template>

<script>
import api from "@/services";

export default {
  name: "Cadastrar",
  data() {
    return {
      categoria: {
        name: "",
        icon: "",
      },
    };
  },
  methods: {
    adicionarCategoria() {
      // const button = event.currentTarget;
      // button.value = "Adicionando...";
      // button.setAttribute("disabled", "");
      api.post("/category", { name: this.categoria.name, email: this.categoria.email })
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });

      // button.value = "Cadastrar";
      // button.removeAttribute("disabled", "");
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 518px) {
  .form-group {
    margin-top: 1%;
  }
}

.form-button {
  float: right;
}
</style>
