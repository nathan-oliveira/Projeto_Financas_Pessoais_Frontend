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
          <tr v-for="dados of displayedPosts" :key="dados.id">
            <td class="col-table-1">{{ dados.id }}</td>
            <td>{{ dados.name }}</td>
            <td class="col-table-acoes">
              <a href="">
                <img class="edit-icon" src="@/assets/edit-solid.svg" alt="edit"/>
              </a> &nbsp;
              <a href="">
                <img class="trash-icon" src="@/assets/trash-alt-solid.svg" alt="trash"/>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginacao :total="pages.length">
        <a
          to=""
          :class="(page == 1) ? 'page-button disabled' : 'page-button'"
          @click="page--">
            &#8678;
        </a>
        <a
          class="page-link"
          v-for="pageNumber in pages" :key="pageNumber"
          @click="page = pageNumber">
            {{pageNumber}}
        </a>
        <a
          to=""
          :class="(page < pages.length) ? 'page-button' : 'page-button disabled'"
          @click="page++"
          >
          &#8680;
        </a>
      </Paginacao>
    </div>
    <PaginaCarregando
      key="Carregando"
      v-else
    />
  </div>
</template>

<script>
import Paginacao from "@/components/layouts/paginacao/paginacao.vue";
import api from "@/services";

export default {
  name: "Categoria",
  components: {
    Paginacao,
  },
  data() {
    return {
      posts: [''],
			page: 1,
			perPage: 9,
			pages: [],
    };
  },
  methods: {
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
			const from = (this.page * this.perPage) - this.perPage;
			const to = (this.page * this.perPage);
			return posts.slice(from, to);
    },
  },
  computed: {
    displayedPosts() {
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

table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #8e8e8e73;
  border-radius: 4px;
  margin-bottom: 20px !important;
}

table td,
table th {
  padding: 11px;
  padding-left: 15px;
  padding-right: 15px;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table thead th {
  height: 45px;
  text-align: left;
  background: rgba(22, 22, 22, 0.857);
  color: white;
  font-weight: 300;
}

.col-table-acoes {
  text-align: center;
  width: 10%;
}

@media screen and (max-width: 1072px) {
  .col-table-acoes {
    width: 18%;
  }
}

@media screen and (max-width: 538px) {
  .col-table-acoes {
    text-align: center;
    width: 29%;
  }
}

.col-table-1 {
  width: 9%;
}
.page-font {
  font-size: 17 !important;
}

.page-button {
  font-size: 20px;
  padding: 0px 10px 0px 13px;
}

.page-link {
  font-size: 18px;
  padding: 2px 12px 1px 16px;
}

.page-button,
.page-link {
  border: 1px solid #484848eb;
  cursor: pointer;
  border-radius: 2px;
  margin-left: 10px;
  text-align: center;
}

.pagination a:hover {
  background: rgba(22, 22, 22, 0.829);
  color: #fff;
}

.disabled {
  pointer-events: none;
}
</style>
