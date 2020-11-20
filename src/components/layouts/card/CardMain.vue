<template>
  <div class="card-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardMain",
};
</script>

<style scoped>
.card-main {
  padding: 0% 6% 4% 6%;
  background: #fff;
  height: 85%;
}
</style>
