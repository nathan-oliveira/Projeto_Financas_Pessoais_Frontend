<template>
  <transition mode="out-in">
    <ul class="erros" v-if="errors.length > 0">
      <p class="close" @click="close"></p>
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

.erros li {
  color: #721c24;
  text-align: center;
  padding: 7px 0;
}

.close {
  cursor: pointer;
  margin-top: 4px;
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}

.close:hover {
  opacity: 1;
}

.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 15px;
  width: 2px;
  background-color: #721c24;
}

.close:before {
  transform: rotate(45deg);
}

.close:after {
  transform: rotate(-45deg);
}
</style>
