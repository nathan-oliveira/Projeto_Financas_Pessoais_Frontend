<template>
  <div class="content">
    <Card>
      <CardHeader :title="this.$store.getters.getFormActive ? 'Criar conta': 'Acessar conta'" />
      <CardMain>
        <Form>
          <a @click="actionForms">
            {{
              this.$store.getters.getFormActive ?
              'Já possui uma conta? Entrar Agora.' :
              'Não possui uma conta? Criar Agora.'
            }}
          </a>
        </Form>
      </CardMain>
    </Card>
  </div>
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
      this.$store.commit('setFormActive', !this.$store.getters.getFormActive);
    },
  },
  beforeCreate() {
    if (window.localStorage.token) {
      this.$router.push("/");
    }
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
