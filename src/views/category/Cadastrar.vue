<template>
  <form>
    <div class="grid">
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
    </div>
    <div class="form-button">
      <a class="btn">
        Cadastrar
      </a>
    </div>
  </form>
</template>

<script>
export default {
  name: "Cadastrar",
};
</script>

<style scoped>

@media screen and (min-width: 519px) {
  .form {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

@media screen and (max-width: 518px) {
  .form-group {
    margin-top: 1%;
  }
}

.form-button {
  float: right;
}
</style>
