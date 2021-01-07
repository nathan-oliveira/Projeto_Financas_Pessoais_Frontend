<template>
  <!-- <transition mode="out-in"> -->
    <div class="footer">
      <div class="container">
        <p class="copyright"><b>Copyright © 2020 Financeiro.</b> Todos os direitos reservados.</p>
        <p class="version"><b>Versão 1.0</b></p>
      </div>
    </div>
  <!-- </transition> -->
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  padding: 15px 20px;
  border-top: 1px solid #e6e6e6;
  background: #f7f6fb;
}

.container {
  justify-content: space-between !important;
}

.footer p {
  font-size: 14px;
}

@media screen and (max-width: 750px) {
  .container {
    text-align: center;
  }
}
</style>
