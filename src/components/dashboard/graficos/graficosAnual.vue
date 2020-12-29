<template>
  <div class="col-6 chart-12 bar-chart">
    <bar-chart
      :data="graficosAnual"
      label-rotate
    />
  </div>
</template>

<script>
export default {
  name: "graficosAnual",
  data() {
    return {
      graficosAnual: [
        {
          name: "Total de Despesas",
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
          name: "Total de Receitas",
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
  }
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
</style>
