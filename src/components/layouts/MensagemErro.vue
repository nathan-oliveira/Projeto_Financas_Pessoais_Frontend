<template>
  <transition mode="out-in">
    <ul class="erros" v-if="errors.length > 0">
      <p @click="close">x</p>
      <li v-for="(erro, index) in errors" :key="index" v-html="erro"></li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "MensagemErro",
  props: {
    erros: Array,
    closeMensagemErro: Function,
  },
  methods: {
    close() {
      this.$store.commit('UPDATE_ERROS', []);
    },
  },
  computed: {
    errors() {
      return this.$store.state.erros;
    },
  },
};
</script>

<style scoped>
.erros {
  display: flex;
  border: 1px solid #f5c6cb;
  flex-direction: column;
  margin: 10px 0;
  padding: 0 8px;
  background-color: #f8d7da;
  border-radius: 10px;
}

.erros p {
  font-size: 19px;
  font-weight: bold;
  align-self: flex-end;
  color: #721c24;
  cursor: pointer;
}

.erros li {
  color: #721c24;
  text-align: center;
  margin-bottom: 9px;
  margin-top: -15px;
  width: 90%;
}
</style>
