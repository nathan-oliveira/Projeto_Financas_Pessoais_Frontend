<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Categorias" :asset="assetBreadcrumb" />
    </Breadcrumb>
    <div class="grid">
      <nav class="menu">
        <router-link
          :to="{ name: 'listagemCategoria' }"
          @click.native="alterBread('Listagens')"
        >
          Listar
        </router-link>
        <router-link
          :to="{ name: 'cadastrarCategoria' }"
          @click.native="alterBread('Cadastrar')"
        >
          Cadastrar
        </router-link>
      </nav>
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import Breadcrumb from "@/components/layouts/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/layouts/breadcrumb/BreadcrumbItem.vue";

export default {
  name: "Categoria",
  data() {
    return {
      assetBreadcrumb: "Listagens",
    };
  },
  methods: {
    alterBread(value) {
      this.assetBreadcrumb = value;
    },
  },
  components: {
    Breadcrumb,
    BreadcrumbItem,
  },
};
</script>

<style scoped>
.menu a {
  padding: 10px 20px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
  color: rgb(7, 0, 0);
  border: 1px solid #efefefa8;
}

.menu a.router-link-exact-active,
.menu a:hover {
  background: linear-gradient(90deg, #271181 40%, #87f 100%);
  color: white;
  border: none;
}
</style>
