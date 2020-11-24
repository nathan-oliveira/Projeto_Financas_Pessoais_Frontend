<template>
  <div class="listagem">
    <p v-if="0 === 0">Listagem Categoria</p>
    <PaginaCarregando key="Carregando" v-else />
  </div>
</template>

<script>
export default {
  name: "Categoria",
};
</script>
