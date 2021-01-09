<template>
  <transition mode="out-in">
    <ul class="success" v-if="success.length > 0">
      <p class="close" @click="close"></p>
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
  flex-direction: column;
  margin: 10px 0;
  padding: 0 8px;
  background-color: #c3e6cb;
  border: 1px solid #d4edda;
  border-radius: 10px;
}

.success li {
  color: #155724 !important;
  text-align: center;
  padding: 7px 0;
}

.close {
  cursor: pointer;
  margin-top: 4px;
  position: relative;
  right: 20px;
  opacity: 0.3;
  float: right !important;
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
  background-color: #23721c;
}

.close:before {
  transform: rotate(45deg);
}

.close:after {
  transform: rotate(-45deg);
}
</style>
