<template>
  <div class="formulario">
    <MensagemErro />
    <form class="form" v-if="registro">
      <div class="form-row">
        <div class="form-group col-12">
          <label>Descrição:</label>
          <input
            type="text"
            v-model.trim="receita.description"
            placeholder="Descrição da receita"
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
        <button class="btn" @click.prevent="adicionarFinanceiro">Atualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { formatMoney, revertMoney } from "@/helpers";
import api from "@/services";

export default {
  name: "editar",
  data() {
    return {
      registro: false,
      receita: {
        description: "",
        types: "",
        money: "",
        categoryId: ""
      },
      categoria: {},
    };
  },
  mounted() {
    document.getElementById(`${this.$route.meta.types}BreadcrumbItem`).innerText = 'Editar';
  },
  created() {
    this.getCategory();
    this.getBusiness();
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
    getBusiness() {
      api.get(`/business/${this.$route.params.id}`)
        .then((resp) => {
          this.registro = true;
          this.receita.description = resp.data[0].description;
          this.receita.types = resp.data[0].types;
          this.receita.money = formatMoney(resp.data[0].money);
          this.receita.categoryId = resp.data[0].categoryId.id;
        })
        .catch((err) => {
          this.$store.commit("UPDATE_ERROS", [err.response.data.message]);

          const refe = this.$route.meta.types;
          const redirect = refe[0].toUpperCase() + refe.slice(1).toLowerCase();

          setTimeout(() => {
            this.$store.commit("UPDATE_ERROS", []);
            this.$router.push({ name: `listagem${redirect}` });
          }, 3000);
        });
    },
    adicionarFinanceiro(event) {
      event.target.classList.toggle("disabled");

      const data = {
        description: this.receita.description,
        types: this.receita.types,
        money: revertMoney(this.receita.money),
        categoryId: this.receita.categoryId,
      };

      api.put(`/business/${this.$route.params.id}`, data)
        .then(() => {
          const refe = this.$route.meta.types;
          const redirect = refe[0].toUpperCase() + refe.slice(1).toLowerCase();

          this.$router.push({ name: `listagem${redirect}` });
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
