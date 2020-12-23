<template>
  <div class="card">
    <div :class="`card-body card-${refe}`">
      <div class="card-info">
        <h1 class="card-title">{{ money }}</h1>
        <p class="card-subtitle">{{ date }}</p>
      </div>
      <div class="card-logo">
        <i class="fas fa-donate"></i>
      </div>
    </div>
    <div :class="`card-footer card-${refe}-footer`">
      <i class="fa fa-arrow-circle-right"></i>
      <p class="card-footer-title">{{ refe[0].toUpperCase() + refe.slice(1).toLowerCase() }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["refe", "money", "date"]
};
</script>

<style scoped>
.card {
  flex: 1 1 10%;
  margin: 10px;
}

.card-receita,
.card-despesa,
.card-total {
  display: flex;
  justify-content: space-between;
}

.card-body {
  padding: 15px 10px;
}

.card-receita {
  background-color: #00c0ef !important;
}

.card-despesa {
  background-color: #dd4b39 !important;
}

.card-total {
  background-color: #00a65a !important;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-footer i {
  color: rgb(255 255 255 / 50%);
}

.card-receita-footer {
  background: #00a7d0;
}

.card-despesa-footer {
  background: #c54535;
}

.card-total-footer {
  background: #009651;
}

.card-footer-title {
  color: #fff;
  padding: 2px 0;
  margin: 0 5px;
}

.card-logo i {
  font-size: 5em;
  color: rgba(0,0,0,0.15);
}

.card-title {
  font-size: 1.8em;
  font-weight: bold;
  color: #fff;
}

.card-subtitle {
  margin-top: 10px;
  font-size: .8em;
  color: #fff;
}
</style>
