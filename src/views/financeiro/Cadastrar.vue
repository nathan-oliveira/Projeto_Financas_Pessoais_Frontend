<template>
  <form class="form">
    <MensagemErro />
    <div class="form-row">
      <div class="form-group col-12">
        <label>Descrição:</label>
        <input
          type="text"
          v-model.trim="receita.description"
          placeholder="Descrição"
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
          v-model.trim="receita.money"
          maxlength="7"
          @keyup="formatMoney"
        />
      </div>
      <div class="form-group col-6">
        <label>Categoria:</label>
        <select v-model.trim="receita.categoryId">
          <option value="" selected hidden disabled>Selecione...</option>
          <option
            v-for="item in categoria"
            :key="item.id"
            :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="form-button">
      <button class="btn" @click.prevent="adicionar">Cadastrar</button>
    </div>
  </form>
</template>

<script>
import api from "@/services";
import { formatMoney, revertMoney } from "@/helpers";

export default {
  name: "receitaCadastrar",
  data() {
    return {
      receita: {
        description: "",
        types: "",
        money: "",
        categoryId: ""
      },
      categoria: {},
    };
  },
  created() {
    this.receita.types = this.$route.meta.types;
    this.getCategory();
  },
  methods: {
    formatMoney() {
      this.receita.money = formatMoney(this.receita.money);
    },
    getCategory() {
      api.get('/category').then((resp) => {
        Object.keys(resp.data).forEach((item) => {
          delete resp.data[item].icon;
        });

        this.categoria = resp.data;
      });
    },
    adicionar(event) {
      event.target.classList.toggle("disabled");

      const data = {
        description: this.receita.description,
        types: this.receita.types,
        money: revertMoney(this.receita.money),
        categoryId: this.receita.categoryId,
      };

      api.post("/business", data)
        .then(() => {
          const refe = this.$route.meta.types;
          const redirect = refe[0].toUpperCase() + refe.slice(1).toLowerCase();

          this.$router.push({ name: `listagem${redirect}` });
        })
        .catch((err) => {
          event.target.classList.toggle("disabled");
          this.$store.dispatch("setError", [err.response.data.message]);
        });
    }
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
