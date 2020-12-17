<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Metas" id="metasBreadcrumbItem" />
    </Breadcrumb>
    <div class="grid">
      <nav class="menu-pages">
        <router-link
          :to="{ name: 'listagemMetas' }"
          @click.native="alterBread('Listagens')"
        >
          Listar
        </router-link>
        <router-link
          :to="{ name: 'cadastrarMetas' }"
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
  name: "Metas",
  components: {
    Breadcrumb,
    BreadcrumbItem,
  },
  mounted() {
    this.alterBread('Listagens');
  },
  methods: {
    alterBread(value) {
      const bread = document.getElementById("metasBreadcrumbItem");
      bread.innerText = value;
    },
  },
};
</script>
