<template>
  <section class="content">
    <h1>Ops! Página não encontrada.</h1>
    <router-link class="btn" to="/">Voltar</router-link>
  </section>
</template>

<script>
export default {
  name: "PaginaNaoEncontrada",
};
</script>

<style scoped>
.content {
  background: #f7f6fb;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

h1 {
  width: 39%;
  margin-top: -10%;
  text-align: center;
  transition: all 0.3s;
  color: #65d;
  font-size: 25px;
  margin-bottom: 1%;
}

h1:hover {
  transform: scale(1.1);
}

.btn {
  width: 8%;
  padding: 5px 20px;
}

@media screen and (max-width: 1070px) {
  h1 {
    width: 89%;
  }

  .btn {
    width: 10%;
  }
}

@media screen and (max-width: 780px) {
  h1 {
    font-size: 20px;
  }

  .btn {
    width: 32%;
  }
}
</style>
