<template>
  <nav class="navigation">
    <ul class="l">
      Total de {{total}} Páginas.
    </ul>
    <ul class="pagination">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "paginacao",
  props: ["total"],
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 435px) {
  .navigation {
    display: block;
    text-align: center;
  }

  .pagination {
    margin-top: 10px;
  }
}
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
