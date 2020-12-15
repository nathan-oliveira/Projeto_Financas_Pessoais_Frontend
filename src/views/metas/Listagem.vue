<template>
  <section>
    <div class="tabela" v-if="!$store.state.loading">
      <h1>teste</h1>
    </div>
    <PaginaCarregando key="Carregando" v-else />
  </section>
</template>

<script>
// import Paginacao from "@/components/layouts/paginacao/paginacao.vue";
import api from "@/services";

export default {
  name: "metasListagem",
  components: {
    // Paginacao,
  },
  data() {
    return {
      posts: [],
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  created() {
    this.$store.commit("UPDATE_LOADING", true);
    this.getPosts();
  },
  methods: {
    // Methods Pagination
    getPosts() {
      api.get("/goal").then((resp) => {
        this.posts = resp.data;
        // console.log(this.posts);
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
};
</script>
