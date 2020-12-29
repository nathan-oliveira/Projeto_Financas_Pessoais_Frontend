<template>
  <div class="col-6 bar-chart">
    <p>Receitas vs Despesas</p>
    <pie-chart :data="graficosReceitasDespesas" />
  </div>
</template>

<script>
export default {
  name: "graficosReceitasDespesas",
  data() {
    return {
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
    };
  }
};
</script>

<style scoped>
.bar-chart {
  height: 400px;
  margin-top: 10px;
}

.bar-chart p {
  font-size: 15px;
  text-align: center;
  margin-bottom: -2px;
  color: #a2a2a2;
}
</style>
