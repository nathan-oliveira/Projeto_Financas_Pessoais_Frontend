<template>
  <div class="formulario">
    <MensagemErro />
    <form class="form" v-if="registro">
      <div class="form-row">
        <div class="form-group col-4 col-right">
          <label>Descrição:</label>
          <input
            type="text"
            placeholder="Descrição da Categoria"
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
        <button class="btn" @click.prevent="atualizarCategoria"
        id="atualizar">Atualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
import api from "@/services";

export default {
  name: "categoriaEditar",
  data() {
    return {
      registro: false,
      categoria: {
        name: "",
        icon: "",
      },
    };
  },
  created() {
    this.buscarCategoria();
  },
  mounted() {
    document.getElementById("categoriaBreadcrumbItem").innerText = 'Editar';
  },
  methods: {
    buscarCategoria() {
      api.get(`/category/${this.$route.params.id}`)
        .then((resp) => {
          this.registro = true;
          this.categoria.name = resp.data[0].name;
          this.categoria.icon = resp.data[0].icon;
        })
        .catch((err) => {
          this.$store.commit("UPDATE_ERROS", [err.response.data.message]);

          setTimeout(() => {
            this.$store.commit("UPDATE_ERROS", []);
            this.$router.push("/categoria/");
          }, 3000);
        });
    },
    atualizarCategoria(event) {
      event.target.classList.toggle("disabled");

      api.put(`/category/${this.$route.params.id}`, this.categoria)
        .then(() => {
          this.$router.push({ name: "listagemCategoria" });
        })
        .catch((err) => {
          event.target.classList.toggle("disabled");

          this.$store.commit("UPDATE_ERROS", [err.response.data.message]);

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
