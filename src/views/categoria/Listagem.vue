<template>
  <section>
    <div class="tabela" v-if="!$store.state.loading">
      <Table
        :postsLength="this.$store.state.posts.length"
        route="cadastrarCategoria"
        :colunas="tableCols"
        :displayedList="displayedList"
        :url="urls"
      />
    </div>
    <PaginaCarregando key="Carregando" v-else />
  </section>
</template>

<script>
import api from "@/services";
import Table from "@/components/layouts/table/table.vue";

export default {
  name: "categoriaListagem",
  components: {
    Table,
  },
  data() {
    return {
      tableCols: ["Código", "Descrição", "Ações"],
      urls: ["category", "categoria"]
    };
  },
  methods: {
    getPosts() {
      api.get("/category").then((resp) => {
        Object.keys(resp.data).forEach((item) => {
          delete resp.data[item].icon;
        });

        this.$store.commit('UPDATE_POSTS', resp.data);
        this.$store.dispatch("setPages");
        this.$store.commit("UPDATE_LOADING", false);
      });
    },
    paginate() {
      const from = this.$store.state.page * this.$store.state.perPage - this.$store.state.perPage;
      const to = this.$store.state.page * this.$store.state.perPage;
      return this.$store.state.posts.slice(from, to);
    },
  },
  computed: {
    displayedList() {
      return this.paginate();
    },
  },
  created() {
    this.$store.commit("UPDATE_LOADING", true);
    this.getPosts();
  },
};
</script>

<style scoped>
.btn {
  border: 1px solid transparent;
  padding: 3px 8px 3px 8px;
  border-radius: 5px;
  display: inline-flex;
  cursor: pointer;
}

.btn-red {
  background: #b31919;
}

.btn-black {
  padding: 3px 5px 3px 7px;
  background: #252525;
}
</style>
