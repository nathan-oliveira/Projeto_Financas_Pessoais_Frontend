<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Dashboard" asset="Painel de Controle" />
    </Breadcrumb>
    <div class="card-financeiros">
      <CardDashboard
        refe="receita"
        money="R$: 20.000,21"
        date="18/12/2020"
      />
      <CardDashboard
        refe="despesa"
        money="R$: 20.000,21"
        date="18/12/2020"
      />
      <CardDashboard
        refe="total"
        money="R$: 20.000,21"
        date="18/12/2020"
      />
    </div>
    <div class="row">
      <div class="col-6 chart-12 bar-chart">
        <bar-chart
          :data="graficosAnual"
          label-rotate
        />
      </div>
    </div>
    <div class="row">
      <div class="col-6 col-right bar-chart">
        <bar-chart :data="graficosComMetas" />
      </div>
      <div class="col-6 bar-chart">
        <p>Receitas vs Despesas</p>
        <pie-chart :data="graficosReceitasDespesas" />
      </div>
    </div>
  </section>
</template>

<script>
import CardDashboard from "@/components/dashboard/card/card.vue";
import Breadcrumb from "@/components/layouts/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/layouts/breadcrumb/BreadcrumbItem.vue";

export default {
  name: "Home",
  components: {
    Breadcrumb,
    BreadcrumbItem,
    CardDashboard,
  },
  data() {
    return {
      graficosComMetas: [
        {
          name: "Meta financeira",
          data: [
            { label: "2018", value: 290 },
            { label: "2019", value: 600 }
          ]
        },
        {
          name: "Saldo Total",
          data: [
            { label: "2018", value: 340 },
            { label: "2019", value: 673 }
          ]
        }
      ],
      graficosReceitasDespesas: [
        {
          name: 'Despesas',
          value: 30,
        },
        {
          name: 'Receitas',
          value: 15,
        },
      ],
      graficosAnual: [
         {
          name: "Total de Receitas",
          data: [
            { label: 'Janeiro', value: 8 },
            { label: 'Fevereiro', value: 10 },
            { label: 'Março', value: 12 },
            { label: 'Abril', value: 7 },
            { label: 'Maio', value: 9 },
            { label: 'Junho', value: 16 },
            { label: 'Julho', value: 15 },
            { label: 'Agosto', value: 18 },
            { label: 'Setembro', value: 20 },
            { label: 'Outubro', value: 5 },
            { label: 'Novembro', value: 9 },
            { label: 'Dezembro', value: 9 },
          ]
        },
        {
          name: "Total de Despesas",
          data: [
            { label: 'Janeiro', value: 5 },
            { label: 'Fevereiro', value: 14 },
            { label: 'Março', value: 8 },
            { label: 'Abril', value: 4 },
            { label: 'Maio', value: 4 },
            { label: 'Junho', value: 5 },
            { label: 'Julho', value: 20 },
            { label: 'Agosto', value: 10 },
            { label: 'Setembro', value: 11 },
            { label: 'Outubro', value: 3 },
            { label: 'Novembro', value: 4 },
            { label: 'Dezembro', value: 5 },
          ]
        }
      ],
    };
  },
};
</script>

<style scoped>
.bar-chart {
  height: 400px;
  margin-top: 10px;
}

.chart-12 {
  width: 99%;
}

.bar-chart p {
  font-size: 14px;
  text-align: center;
  margin-bottom: -2px;
  color: #a2a2a2;
}

.card-financeiros {
  padding-bottom: 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid #a2a2a22e;

  display: flex;
  justify-content: space-between;
}
</style>
