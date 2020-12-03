<template>
  <transition mode="out-in">
    <ul class="success" v-if="success.length > 0">
      <p @click="close">x</p>
      <li v-for="(succ, index) in success" :key="index" v-html="succ"></li>
    </ul>
  </transition>
</template>

<script>
export default {
  name: "MensagemSuccess",
  props: {
    erros: Array,
    closeMensagemErro: Function,
  },
  methods: {
    close() {
      this.$store.commit('UPDATE_SUCCESS', []);
    },
  },
  computed: {
    success() {
      return this.$store.state.success;
    },
  },
};
</script>

<style scoped>
.success {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  padding: 0 8px;
  background-color: #c3e6cb;
  border: 1px solid #d4edda;
  border-radius: 10px;
}

.success p {
  font-size: 19px;
  font-weight: bold;
  align-self: flex-end;
  color: #23721c;
  cursor: pointer;
}

.success li {
  color: #155724;
  text-align: center;
  margin-bottom: 9px;
  margin-top: -15px;
  width: 90%;
}
</style>
