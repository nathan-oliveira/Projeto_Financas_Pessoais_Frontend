<template>
  <form class="form">
    <MensagemErro />
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
import MensagemErro from "@/components/layouts/MensagemErro.vue";
import api from "@/services";

export default {
  name: "Cadastrar",
  components: {
    MensagemErro,
  },
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
        .then(() => {
          this.$router.push({ name: 'listagemCategoria' });
        })
        .catch((err) => {
          this.$store.commit("UPDATE_ERROS", [err.response.data.message]);

          setTimeout(() => {
            this.$store.commit("UPDATE_ERROS", []);
          }, 2000);
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
