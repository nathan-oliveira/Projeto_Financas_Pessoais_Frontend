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
    <div class="row border-top">
      <GraficosAnual />
    </div>
    <div class="row">
      <GraficosComMetas />
      <GraficosReceitasDespesas />
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/layouts/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/layouts/breadcrumb/BreadcrumbItem.vue";
import CardDashboard from "@/components/dashboard/card/card.vue";
import GraficosAnual from "@/components/dashboard/graficos/graficosAnual.vue";
import GraficosComMetas from "@/components/dashboard/graficos/graficosComMetas.vue";
import GraficosReceitasDespesas from "@/components/dashboard/graficos/graficosReceitasDespesas.vue";

export default {
  name: "Home",
  components: {
    Breadcrumb,
    BreadcrumbItem,
    CardDashboard,
    GraficosAnual,
    GraficosComMetas,
    GraficosReceitasDespesas,
  },
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
