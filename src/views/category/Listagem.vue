<template>
  <div class="listagem">
    <table v-if="0 === 0">
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
            <a href="">Editar</a> &nbsp;
            <a href="">Excluir</a>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
			<ul class="pagination">
				<li class="page-item">
					<button
            type="button"
            class="page-link"
            v-if="page != 1"
            @click="page--">
              Previous
          </button>
				</li>
				<li class="page-item">
					<button
            type="button"
            class="page-link"
            v-for="pageNumber in pages.slice(page - 1, page + 5)" :key="pageNumber"
            @click="page = pageNumber">
              {{pageNumber}}
          </button>
				</li>
				<li class="page-item">
					<button
            type="button"
            @click="page++"
            v-if="page < pages.length"
            class="page-link">
            Next
          </button>
				</li>
			</ul>
		</nav>
    <!-- <Paginacao
      :listaTotal="listaTotal"
      :listaPorPagina="listaPorPagina"
    /> -->
    <!-- <PaginaCarregando key="Carregando" v-else /> -->
  </div>

</template>

<script>
// import Paginacao from "@/components/layouts/paginacao/paginacao.vue";
import api from "@/services";

export default {
  name: "Categoria",
  components: {
    // Paginacao,
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
      api.get("/category")
        .then((resp) => {
          this.posts = resp.data;
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
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
}

table tbody {
  border: 1px solid #efefef;
}

table td,
table th {
  padding: 8px;
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
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: left;
  background: #271181;
  color: white;
  font-weight: 300;
}

.col-table-acoes {
  text-align: center;
  width: 15%;
}

.col-table-1 {
  width: 9%;
}
</style>
