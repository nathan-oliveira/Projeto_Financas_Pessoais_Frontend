<template>
  <form class="form">
    <MensagemErro />
    <div class="col-12">
      <div class="form-group col-3 col-right">
        <label>Descrição:</label>
        <input
          type="text"
          placeholder="Descrição da categoria"
          v-model="categoria.name"
        />
      </div>
      <div class="form-group col-7">
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
  name: "categoriaCadastrar",
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
    adicionarCategoria(event) {
      event.target.classList.toggle("disabled");

      api.post("/category", this.categoria)
        .then(() => {
          this.$router.push({ name: "listagemCategoria" });
        })
        .catch((err) => {
          event.target.classList.toggle("disabled");
          if (err.response.data.message) {
            this.$store.commit("UPDATE_ERROS", [err.response.data.message]);
          } else {
            this.$store.commit("UPDATE_ERROS", [
              "Categoria e Icone deve conter no mínimo 6 caracteres.",
            ]);
          }

          setTimeout(() => {
            this.$store.commit("UPDATE_ERROS", []);
          }, 3000);
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
