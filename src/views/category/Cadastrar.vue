<template>
  <div>
    <form class="form">
      <div class="form-group">
        <label>Categoria:</label>
        <input
          type="text"
          placeholder="Nome da Categoria"
        />
      </div>
      <div class="form-group">
        <label>Icone:</label>
        <input
          type="text"
          placeholder="URL do icone"
        />
      </div>
      <div class="form-button">
        <a class="btn">
          Cadastrar
        </a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Cadastrar",
};
</script>

<style scoped>
.form-button {
  float: right;
}
</style>
