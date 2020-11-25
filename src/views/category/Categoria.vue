<template>
  <section class="content">
    <nav class="menu">
      <router-link :to="{ name: 'listagemCategoria' }">Listar</router-link>
      <router-link :to="{ name: 'cadastrarCategoria' }">Cadastrar</router-link>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Categoria",
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  grid-gap: 30px;
}

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
  background: linear-gradient(90deg,#271181 40%, #87f 100%);
  color: white;
  border: none;
}

@media screen and (max-width: 739px) {
  .content {
    grid-template-columns: 1fr;
    margin: 0px auto;
    min-height: 100% !important;
    display: block;
  }
}

</style>
