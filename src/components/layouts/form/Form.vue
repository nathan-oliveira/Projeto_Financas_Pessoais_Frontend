<template>
  <form class="form">
    <MensagemErro />
    <MensagemSuccess />
    <div class="form-group" v-if="$store.state.formActive || $store.state.login">
      <label>Nome:</label>
      <input
        type="text"
        placeholder="Nome"
        v-model="name"
      />
    </div>
    <div class="form-group">
      <label>E-mail:</label>
      <input
        type="text"
        placeholder="E-mail"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label>Senha:</label>
      <input
        type="password"
        placeholder="Senha"
        v-model="password"
      />
    </div>
    <div class="form-group" v-if="$store.state.formActive || $store.state.login">
      <label>Confirmar Senha:</label>
      <input
        type="password"
        placeholder="Confirmar Senha"
        v-model="password_confirmation"
      />
    </div>
    <div :class="`form-button${$store.state.login ? ' updated' : ''}`">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers";
import MensagemErro from "@/components/layouts/MensagemErro.vue";
import MensagemSuccess from "@/components/layouts/MensagemSuccess.vue";

export default {
  name: "Form",
  components: {
    MensagemErro,
    MensagemSuccess,
  },
  computed: {
    ...mapFields({
      fields: [
        "name",
        "email",
        "password",
        "password_confirmation",
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO",
    }),
  },
};
</script>

<style scoped>
.btn {
  padding: 10px 22px;
}

.updated {
  float: right;
}

@media screen and (max-width: 739px) {
  .updated {
    float: none;
  }
}
</style>
