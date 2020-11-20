<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.card {
  width: 500px;
  /* height: 400px; */
  margin-top: -10vh;
  /* background: #fff; */
  box-shadow: 0px 1px 5px 0px rgba(54, 54, 54, 0.35);
  -webkit-box-shadow: 0px 1px 5px 0px rgba(54, 54, 54, 0.35);
  -moz-box-shadow: 0px 1px 5px 0px rgba(54, 54, 54, 0.35);
}
</style>
