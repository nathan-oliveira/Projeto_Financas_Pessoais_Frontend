<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Dashboard" asset="Painel de Controle" />
    </Breadcrumb>
    <div class="card-financeiros">
      <CardDashboard
        refe="receita"
        :money="cards.receita.valor"
        :date="dataAtual"
      />
      <CardDashboard
        refe="despesa"
        :money="cards.despesa.valor"
        :date="dataAtual"
      />
      <CardDashboard
        refe="total"
        :money="cards.total.valor"
        :date="dataAtual"
      />
    </div>
    <div class="row border-top">
      <GraficosComMetas :graficosComMetas="graficosComMetas" />
      <GraficosReceitasDespesas :graficosReceitasDespesas="graficosReceitasDespesas" />
    </div>
  </section>
</template>

<script>
import api from "@/services";
import { numeroPreco, dataAtualFormatada } from "@/helpers";

import Breadcrumb from "@/components/layouts/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/layouts/breadcrumb/BreadcrumbItem.vue";
import CardDashboard from "@/components/dashboard/card/card.vue";
// import GraficosAnual from "@/components/dashboard/graficos/graficosAnual.vue";
import GraficosComMetas from "@/components/dashboard/graficos/graficosComMetas.vue";
import GraficosReceitasDespesas from "@/components/dashboard/graficos/graficosReceitasDespesas.vue";

export default {
  name: "Home",
  components: {
    Breadcrumb,
    BreadcrumbItem,
    CardDashboard,
    // GraficosAnual,
    GraficosComMetas,
    GraficosReceitasDespesas,
  },
  data() {
    return {
      cards: {
        receita: {
          valor: "R$ 0,00",
        },
        despesa: {
          valor: "R$ 0,00",
        },
        total: {
          valor: "R$: 0,00",
        },
      },
      dataAtual: "",
      graficosReceitasDespesas: {
        despesa: {
          name: 'Despesas',
          value: 90,
        },
        receita: {
          name: 'Receitas',
          value: 50,
        }
      },
      graficosComMetas: {
        metas: {
          label: "Total de Meta",
          value: 0
        },
        total: {
          label: "Saldo Atual",
          value: 0
        }
      }
    };
  },
  beforeCreate() {
    if (!window.localStorage.token) {
      this.$router.push("/authentication");
    }
  },
  created() {
    this.getFinanceiro('receita');
    this.getFinanceiro('despesa');
    this.getMetas();
    this.getDate();
  },
  methods: {
    getFinanceiro(action) {
      let valorReceita = 0;
      let valorDespesa = 0;

      api.get("/business").then((resp) => {
        Object.keys(resp.data).forEach((item) => {
          if (resp.data[item].types === 'receita') {
            valorReceita += parseFloat((resp.data[item].money));
          }

          if (resp.data[item].types === 'despesa') {
            valorDespesa += parseFloat((resp.data[item].money));
          }
        });

        if (action === 'receita') {
          this.cards.receita.valor = numeroPreco(valorReceita);
          this.graficosReceitasDespesas.receita.value = valorReceita;
        }

        if (action === 'despesa') {
          this.cards.despesa.valor = numeroPreco(valorDespesa);
          this.graficosReceitasDespesas.despesa.value = valorDespesa;
        }

        this.cards.total.valor = numeroPreco(valorReceita - valorDespesa);
        this.graficosComMetas.total.value = valorReceita - valorDespesa;
      });
    },
    getMetas() {
      api.get("/goal").then((resp) => {
        let valorMetas = 0;

        Object.keys(resp.data).forEach((item) => {
          valorMetas += parseFloat((resp.data[item].money));
        });

        this.graficosComMetas.metas.value = valorMetas;
      });
    },
    getDate() {
      this.dataAtual = dataAtualFormatada();
    }
  }
};
</script>

<style scoped>
.card-financeiros {
  padding-bottom: 15px;
  margin: 0 -10px;
  display: flex;
  flex-wrap: wrap;
}

.border-top {
  border-top: 1px solid #a2a2a22e;
  padding-top: 5px;
}
</style>
