<template>
  <section>
    <div class="tabela" v-if="!$store.state.loading">
      <Table
        :postsLength="this.$store.state.posts.length"
        route="cadastrarMetas"
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
import { paginate, numeroPreco } from '@/helpers';

export default {
  name: "metasListagem",
  components: {
    Table,
  },
  data() {
    return {
      tableCols: ["Código", "Descrição", "Tipo", "Valor", "Ações"],
      urls: ["goal", "metas"]
    };
  },
  methods: {
    getPosts() {
      this.$store.commit("UPDATE_LOADING", true);

      api.get("/goal").then((resp) => {
        Object.keys(resp.data).forEach((item) => {
          resp.data[item].money = numeroPreco(resp.data[item].money);
          delete resp.data[item].created_at;
          delete resp.data[item].updated_at;
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
