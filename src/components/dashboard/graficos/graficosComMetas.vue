<template>
  <div class="col-6 col-right bar-chart">
    <bar-chart :data="graficosComMetas" />
  </div>
</template>

<script>
export default {
  name: "graficosComMetas",
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
    };
  }
};
</script>

<style scoped>
.bar-chart {
  height: 400px;
  margin-top: 10px;
}
</style>
