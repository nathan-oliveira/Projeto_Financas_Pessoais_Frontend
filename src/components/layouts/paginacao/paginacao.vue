<template>
  <nav class="navigation">
    <ul class="total" v-if="$store.state.pages.length > 1">
      Mostrando {{$store.state.page}} de {{ $store.state.pages.length }} páginas
    </ul>
    <ul v-else>
      Mostrando 1 de 1 páginas
    </ul>
    <ul class="pagination">
      <a
        :class="$store.state.page == 1 ? 'page-button disabled' : 'page-button'"
        @click="backPage()"
      >
        &#8678;
      </a>
      <a
        class="page-link"
        v-for="pNum in $store.state.pages.slice($store.state.page - 1, $store.state.page + 3)"
        :key="pNum"
        @click="updatePage(pNum)"
      >
        {{ pNum }}
      </a>
      <a
        :class="$store.state.page < $store.state.pages.length ?
          'page-button' : 'page-button disabled'"
        @click="nextPage()"
      >
        &#8680;
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "paginacao",
  props: ["total"],
  methods: {
    nextPage() {
      this.$store.commit('UPDATE_PAGE_NEXT');
    },
    backPage() {
      this.$store.commit('UPDATE_PAGE_BACK');
    },
    updatePage(numPage) {
      this.$store.commit('UPDATE_PAGE', numPage);
    }
  }
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 600px) {
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
