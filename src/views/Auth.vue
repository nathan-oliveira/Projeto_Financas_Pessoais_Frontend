<template>
  <section class="content">
    <Card v-if="!$store.state.loading">
      <CardHeader :title="$store.state.formActive ? 'Criar conta': 'Acessar conta'" />
      <CardMain>
        <Form>
          <a @click="actionForms">
            {{
              $store.state.formActive ?
              'Já possui uma conta? Entrar Agora.' :
              'Não possui uma conta? Criar Agora.'
            }}
          </a>
        </Form>
      </CardMain>
    </Card>
    <PaginaCarregando key="Carregando" v-else />
  </section>
</template>

<script>
import Card from "@/components/layouts/card/Card.vue";
import CardMain from "@/components/layouts/card/CardMain.vue";
import CardHeader from "@/components/layouts/card/CardHeader.vue";
import Form from "@/components/layouts/form/Form.vue";

export default {
  name: "Auth",
  components: {
    Card,
    CardMain,
    Form,
    CardHeader,
  },
  methods: {
    actionForms() {
      this.$store.commit('UPDATE_FORMACTIVE', !this.$store.state.formActive);
    },
  },
};
</script>

<style scoped>
.content {
  background: #f7f6fb;
  margin: 0 auto;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
}
</style>
