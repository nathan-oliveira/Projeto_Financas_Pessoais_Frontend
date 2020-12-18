<template>
  <div class="formulario">
    <MensagemErro />
    <form class="form" v-if="registro">
      <div class="form-row">
        <div class="form-group col-12">
          <label>Descrição:</label>
          <input
            type="text"
            v-model.trim="metas.description"
            placeholder="Descrição da meta"
            maxlength="200"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-6 col-right">
          <label>Valor (R$):</label>
          <input
            type="text"
            placeholder="R$: 0,00"
            v-model.trim="metas.money"
            maxlength="7"
          />
        </div>
        <div class="form-group col-6">
          <label>Tipo:</label>
          <select v-model.trim="metas.types">
            <option value="" selected hidden disabled>Selecione...</option>
            <option value="receita">Receita</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </div>
      <div class="form-button">
        <button class="btn" @click.prevent="adicionarMetas">Atualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { formatMoney, revertMoney } from "@/helpers";
import api from "@/services";

export default {
  name: "metasEditar",
  data() {
    return {
      registro: false,
      metas: {
        description: "",
        types: "",
        money: ""
      },
    };
  },
  created() {
    this.buscarMetas();
  },
  mounted() {
    document.getElementById("metasBreadcrumbItem").innerText = 'Editar';
  },
  methods: {
    buscarMetas() {
      api.get(`/goal/${this.$route.params.id}`)
        .then((resp) => {
          this.registro = true;
          this.metas.description = resp.data[0].description;
          this.metas.types = resp.data[0].types;
          this.metas.money = formatMoney(resp.data[0].money);
        });
    },
    adicionarMetas(event) {
      event.target.classList.toggle("disabled");

      const data = {
        description: this.metas.description,
        types: this.metas.types,
        money: revertMoney(this.metas.money),
      };

      api.put(`/goal/${this.$route.params.id}`, data)
        .then(() => {
          this.$router.push({ name: "listagemMetas" });
        })
        .catch((err) => {
          event.target.classList.toggle("disabled");

          this.$store.commit("UPDATE_ERROS", [err.response.data.message]);

          setTimeout(() => {
            this.$store.commit("UPDATE_ERROS", []);
          }, 3000);
        });
    }
  }
};
</script>

<style scoped>
.erros {
  margin: 0 0 10px 0;
}

.grid {
  margin-top: -5px;
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
  margin-top: 1%;
}
</style>
