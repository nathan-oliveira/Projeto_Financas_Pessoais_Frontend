<template>
  <nav aria-label="navigation">
    <ul class="pagination">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "paginacao",
};
</script>

<style scoped>
/* li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
} */
</style>
