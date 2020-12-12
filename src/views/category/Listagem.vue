<template>
  <div class="listagem">
    <div class="tabela" v-if="!$store.state.loading">
      <table>
        <thead>
          <tr>
            <th class="col-table-1">Código</th>
            <th>Descrição</th>
            <th class="col-table-acoes">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dados of displayedList" :key="dados.id">
            <td class="col-table-1">{{ dados.id }}</td>
            <td>{{ dados.name }}</td>
            <td class="col-table-acoes">
              <button class="btn btn-black">
                <img
                  class="edit-icon"
                  src="@/assets/edit-solid.svg"
                  alt="edit"
                />
              </button>
              &nbsp;
              <button @click="excluir(dados.id)" class="btn btn-red">
                <img
                  class="trash-icon"
                  src="@/assets/trash-alt-solid.svg"
                  alt="trash"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginacao :total="pages.length">
        <a
          :class="page == 1 ? 'page-button disabled' : 'page-button'"
          @click="page--"
        >
          &#8678;
        </a>
        <a
          class="page-link"
          v-for="pageNumber in pages.slice(page - 1, page + 2)"
          :key="pageNumber"
          @click="page = pageNumber"
        >
          {{ pageNumber }}
        </a>
        <a
          :class="page < pages.length ? 'page-button' : 'page-button disabled'"
          @click="page++"
        >
          &#8680;
        </a>
      </Paginacao>
    </div>
    <PaginaCarregando key="Carregando" v-else />
  </div>
</template>

<script>
import { swalDeleteQuestion, swalDeleteOk } from "@/helpers";
import Paginacao from "@/components/layouts/paginacao/paginacao.vue";
import api from "@/services";

export default {
  name: "Categoria",
  components: {
    Paginacao,
  },
  data() {
    return {
      posts: [""],
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  methods: {
    excluir(id) {
      this.$swal(swalDeleteQuestion).then((result) => {
        if (result.value) {
          api.delete(`/category/${id}`).then(() => {
            this.$router.go(0);
            this.$swal(swalDeleteOk);
          });
        }
      });
    },
    // Methods Pagination
    getPosts() {
      api.get("/category").then((resp) => {
        this.posts = resp.data;
        this.$store.commit("UPDATE_LOADING", false);
      });
    },
    setPages() {
      const numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      const from = this.page * this.perPage - this.perPage;
      const to = this.page * this.perPage;
      return posts.slice(from, to);
    },
  },
  computed: {
    displayedList() {
      return this.paginate(this.posts);
    },
  },
  watch: {
    posts() {
      this.setPages();
    },
  },
  created() {
    this.$store.commit("UPDATE_LOADING", true);
    this.getPosts();
  },
  filters: {
    trimWords(value) {
      return `${value.split(" ").splice(0, 20).join(" ")}...`;
    },
  },
};
</script>

<style scoped>
.trash-icon {
  width: 17px;
}

.edit-icon {
  width: 22px;
}

.btn {
  border: 1px solid transparent;
  padding: 3px 8px 3px 8px !important;
  border-radius: 5px;
  display: inline-flex;
  cursor: pointer;
}

.btn-red {
  background: #b31919;
}

.btn-black {
  padding: 3px 4px 3px 7px !important;
  background: #252525;
}
</style>
