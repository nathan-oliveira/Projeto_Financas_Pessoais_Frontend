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
          <td
            v-for="(item, index2) in dados"
            :key="item.id"
            :class="(index2 === 'id') ? 'col-table-1' :
              (index2 === 'description' || index2 === 'name') ? 'col-table-2': `col-table-3`"
          >{{item}}</td>
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
    <Paginacao :total="$store.state.pages.length" v-if="$store.state.posts.length > 0" />
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
  methods: {
    excluir(obj) {
      this.$swal(swalDeleteQuestion).then((result) => {
        if (result.value) {
          api.delete(`/${this.url[0]}/${obj.id}`).then(() => {
            this.mutiplos();
            const arrayPosts = this.$store.state.posts.filter((item) => item !== obj);

            this.$store.commit('UPDATE_POSTS', arrayPosts);
            this.$store.dispatch("setPages");

            this.$swal(swalDeleteOk);
          });
        }
      });
    },
    mutiplos() {
      if ((this.$store.state.posts.length - 1) % this.$store.state.perPage === 0) {
        this.$store.commit('UPDATE_PAGE_BACK');
      }
    },
    editar(obj) {
      this.$router.push(`/${this.url[1]}/editar/${obj.id}`);
    },
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
