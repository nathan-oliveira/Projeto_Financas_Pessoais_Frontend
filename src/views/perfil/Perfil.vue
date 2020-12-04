<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Minha Conta" asset="Informações de Usuário" />
    </Breadcrumb>
    <div class="grid">
      <div class="col-1">
        <img src="https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png" width="200px" />
        <p>Atualizar Imagem</p>
      </div>
      <div class="col-2">
        <Form>
          <a class="btn" @click.prevent="updated">Atualizar</a>
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
import Form from "@/components/layouts/form/Form.vue";
import Breadcrumb from "@/components/layouts/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/layouts/breadcrumb/BreadcrumbItem.vue";

export default {
  name: "Perfil",
  components: {
    Breadcrumb,
    BreadcrumbItem,
    Form,
  },
  methods: {
    async updated() {
      this.$store
        .dispatch("updateUser", this.$store.state.usuario)
        .then((resp) => {
          this.$store.commit('UPDATE_USUARIO', { name: resp.data.name, email: resp.data.email, nivel: resp.data.nivel });
          this.$store.commit('UPDATE_SUCCESS', ["Perfil atualizado com sucesso!"]);

          setTimeout(() => {
            this.$store.commit('UPDATE_SUCCESS', []);
          }, 2000);
        })
        .catch((err) => {
          this.$store.commit('UPDATE_ERROS', [err.response.data.message]);

          setTimeout(() => {
            this.$store.commit('UPDATE_ERROS', []);
          }, 2000);
        });
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.col-1 {
  text-align: center;
  margin-bottom: 20px;
}

.col-1 img {
  border-radius: 10px 10px 0 0;
}
.col-1 p {
  font-size: 21px;
  margin-top: -5.8px;
  background: #f2f2f2;
  border-radius: 0 0 10px 10px;
}

@media screen and (min-width: 740px) {
  .col-2 {
    margin-top: -10px;
  }
}

@media screen and (max-width: 739px) {
  .btn {
    width: 100%;
  }
}
</style>
