<template>
  <div class="col-6 col-right bar-chart">
    <p>Meta vs Total</p>
    <bar-chart :data="dados" />
  </div>
</template>

<script>
export default {
  name: "graficosComMetas",
  props: ["graficosComMetas"],
  data() {
    return {
      dados: [
        {
          data: [
            this.graficosComMetas.metas,
            this.graficosComMetas.total,
          ]
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
