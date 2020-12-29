<template>
  <div class="listagens">
    <div class="tabela" v-if="!$store.state.loading">
      <Table
        :postsLength="this.$store.state.posts.length"
        route="cadastrarReceita"
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
import { paginate, numeroPreco } from '@/helpers';

export default {
  name: "receitaListagem",
  components: {
    Table,
  },
  data() {
    return {
      tableCols: ["Código", "Descrição", "Tipo", "Valor", "Ações"],
      urls: ["business", "receita"]
    };
  },
  methods: {
    getPosts() {
      api.get("/business").then((resp) => {
        Object.keys(resp.data).forEach((item) => {
          resp.data[item].money = numeroPreco(resp.data[item].money);

          delete resp.data[item].created_at;
          delete resp.data[item].updated_at;
          // delete resp.data[item].types;
        });

        this.$store.commit('UPDATE_POSTS', resp.data);
        this.$store.dispatch("setPages");
        this.$store.commit("UPDATE_LOADING", false);
      });
    }
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
