<template>
  <div class="listagens">
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
  </div>
</template>

<script>
import api from "@/services";
import Table from "@/components/layouts/table/table.vue";
import { paginate } from '@/helpers';

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
  },
  computed: {
    displayedList() {
      return paginate(this.$store.state);
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
