<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Receitas" id="receitaBreadcrumbItem" />
    </Breadcrumb>
    <div class="grid">
      <nav class="menu-pages">
        <router-link
          :to="{ name: 'listagemReceita' }"
          @click.native="alterBread('Listagens')"
        >
          Listar
        </router-link>
        <router-link
          :to="{ name: 'cadastrarReceita' }"
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
  name: "Financeiro",
  components: {
    Breadcrumb,
    BreadcrumbItem,
  },
  mounted() {
    this.alterBread('Listagens');
  },
  methods: {
    alterBread(value) {
      document.getElementById("receitaBreadcrumbItem").innerText = value;
    },
  },
};
</script>
