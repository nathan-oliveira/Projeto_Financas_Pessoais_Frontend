<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Dashboard" asset="Painel de Controle" />
    </Breadcrumb>
    <div class="card-financeiros">
      <CardDashboard
        refe="receita"
        :money="receita.valor"
        :date="dataAtual"
      />
      <CardDashboard
        refe="despesa"
        :money="despesa.valor"
        :date="dataAtual"
      />
      <CardDashboard
        refe="total"
        :money="total.valor"
        :date="dataAtual"
      />
    </div>
    <div class="row border-top">
      <GraficosComMetas />
      <GraficosReceitasDespesas />
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
      receita: {
        valor: "R$ 0,00",
      },
      despesa: {
        valor: "R$ 0,00",
      },
      total: {
        valor: "R$: 0,00",
      },
      dataAtual: "",
    };
  },
  created() {
    this.getFinanceiro('receita');
    this.getFinanceiro('despesa');
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
          this.receita.valor = numeroPreco(valorReceita);
        }

        if (action === 'despesa') {
          this.despesa.valor = numeroPreco(valorDespesa);
        }

        this.total.valor = numeroPreco(valorReceita - valorDespesa);
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
