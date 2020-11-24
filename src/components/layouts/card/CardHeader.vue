<template>
  <div class="card-header">
    <h1 :class="this.$store.state.formActive ? 'card-title2' : 'card-title'">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "CardHeader",
  props: ["title"],
};
</script>

<style scoped>
.card-header {
  border-top: 4px solid #4400ffb9;
  padding: 2.2% 6%;
  background: #fff;
}

.card-title, .card-title2 {
  color: rgba(0, 0, 0, 0.767);
}

.card-title:after, .card-title2:after {
  content: "";
  display: block;
  border: 0.1px solid #c2c2c2;
}

.card-title:after {
  width: 40%;
}

.card-title2:after {
  width: 32%;
}

@media screen and (max-width: 518px) {
  .card-title:after {
    width: 58%;
  }

  .card-title2:after {
    width: 45%;
  }

  .card-title, .card-title2 {
    font-size: 25px;
  }
}

</style>
