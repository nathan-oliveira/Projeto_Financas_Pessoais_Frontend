<template>
  <div class="listagens">
    <div class="tabela" v-if="!$store.state.loading">
      <Table
        :postsLength="this.$store.state.posts.length"
        :route="this.$route.meta.types === 'receita' ? 'cadastrarReceita' : 'cadastrarDespesa'"
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
import { paginate, numeroPreco } from "@/helpers";

export default {
  name: "receitaListagem",
  components: {
    Table
  },
  data() {
    return {
      tableCols: ["Código", "Descrição", "Categoria", "Valor", "Ações"],
      urls: ["business"]
    };
  },
  methods: {
    getPosts() {
      api.get("/business").then(async (resp) => {
        const data = [];
        await Object.keys(resp.data).forEach((item) => {
          if (resp.data[item].types === this.$route.meta.types) {
            resp.data[item].money = numeroPreco(resp.data[item].money);
            resp.data[item].types = resp.data[item].categoryId.name;

            delete resp.data[item].created_at;
            delete resp.data[item].updated_at;
            delete resp.data[item].categoryId;

            data.push(resp.data[item]);
          }
        });

        await this.$store.commit("UPDATE_POSTS", data);
        await this.$store.dispatch("setPages");
        await this.$store.commit("UPDATE_LOADING", false);
      });
    }
  },
  computed: {
    displayedList() {
      return paginate(this.$store.state);
    }
  },
  created() {
    this.urls.push(this.$route.meta.types);
    this.$store.commit("UPDATE_LOADING", true);
    this.getPosts();
  }
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
