<template>
  <div>
    <table v-if="postsLength > 0">
      <thead>
        <tr>
          <th
            v-for="(coluna, index) in colunas"
            :key="index"
            :class="(index + 1 == colunas.length) ? 'col-table-acoes' : `col-table-${index+1}`"
          >{{ coluna }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dados, index) in displayedList" :key="index">
          <td v-for="item in dados" :key="item.id">{{item}}</td>
          <td class="col-table-acoes">
            <button @click="editar(dados)" class="btn btn-black">
              <i class="fas fa-edit"></i>
            </button>
            &nbsp;
            <button @click="excluir(dados)" class="btn btn-red">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="content-noitens" v-else>
      <h1 class="noitens">Nenhum registro encontrado!</h1>
      <router-link class="btn btn-cadastro" :to="{ name: route }">Criar agora!</router-link>
    </div>
    <Paginacao :total="$store.state.pages.length" v-if="$store.state.posts.length > 0">
      <a
        :class="$store.state.page == 1 ? 'page-button disabled' : 'page-button'"
        @click="backPage()"
      >
        &#8678;
      </a>
      <a
        class="page-link"
        v-for="pNum in $store.state.pages.slice($store.state.page - 1, $store.state.page + 2)"
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
    </Paginacao>
  </div>
</template>

<script>
import api from "@/services";
import Paginacao from "@/components/layouts/paginacao/paginacao.vue";
import { swalDeleteQuestion, swalDeleteOk } from "@/helpers";

export default {
  name: "tabela",
  components: {
    Paginacao,
  },
  props: ["postsLength", "route", "colunas", "displayedList", "url"],
  created() {
    // console.log(this.displayedList);
  },
  methods: {
    excluir(obj) {
      this.$swal(swalDeleteQuestion).then((result) => {
        if (result.value) {
          api.delete(`/${this.url[0]}/${obj.id}`).then(() => {
            const arrayPosts = this.$store.state.posts.filter((item) => item !== obj);

            this.$store.commit('UPDATE_POSTS', arrayPosts);
            this.$store.dispatch("setPages");
            this.$swal(swalDeleteOk);
          });
        }
      });
    },
    editar(obj) {
      this.$router.push(`/${this.url[1]}/editar/${obj.id}`);
    },
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
