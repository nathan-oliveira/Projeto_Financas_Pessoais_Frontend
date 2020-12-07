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
      <button class="btn" @click.prevent="adicionarCategoria">Cadastrar</button>
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
      api.post("/category", this.categoria)
        .then((resp) => {
          // this.$router.push({ name: 'listagemCategoria' });
          console.log('RESP => ', resp);
        })
        .catch((err) => {
          console.log('ERR => ', err);
        });
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
