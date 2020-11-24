<template>
  <section class="content">
    <nav class="menu">
      <router-link :to="{ name: 'listagemCategoria' }">Listar</router-link>
      <router-link :to="{ name: 'cadastrarCategoria' }">Cadastrar</router-link>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  name: "Categoria",
};
</script>
