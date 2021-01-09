<template>
  <form class="form">
    <MensagemErro />
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
          @keyup="formatMoney"
        />
      </div>
      <div class="form-group col-6">
        <label>Tipo:</label>
        <select v-model.trim="metas.types">
          <option value="" selected hidden>Selecione...</option>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
    </div>
    <div class="form-button">
      <button class="btn" @click.prevent="adicionarMetas">Cadastrar</button>
    </div>
  </form>
</template>

<script>
import { formatMoney, revertMoney } from "@/helpers";
import api from "@/services";

export default {
  name: "metasCadastrar",
  data() {
    return {
      metas: {
        description: "",
        types: "",
        money: ""
      },
    };
  },
  methods: {
    formatMoney() {
      this.metas.money = formatMoney(this.metas.money);
    },
    adicionarMetas(event) {
      event.target.classList.toggle("disabled");

      const data = {
        description: this.metas.description,
        types: this.metas.types,
        money: revertMoney(this.metas.money),
      };

      api.post("/goal", data)
        .then(() => {
          this.$router.push({ name: "listagemMetas" });
        })
        .catch((err) => {
          event.target.classList.toggle("disabled");
          this.$store.dispatch("setError", [err.response.data.message]);
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
