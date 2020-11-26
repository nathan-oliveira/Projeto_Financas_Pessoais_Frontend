<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Minha Conta" asset="Informações de Usuário" />
    </Breadcrumb>
    <div class="grid">
      <div class="coluna-1">
        <img src="https://www.auctus.com.br/wp-content/uploads/2017/09/sem-imagem-avatar.png" width="200px" />
        <p>Atualizar Imagem</p>
      </div>
      <div class="coluna-2">
        <Form />
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
  befourCreated() {
    this.$store.commit('UPDATE_LOADING', true);
    if (this.$store.state.login) {
      this.$store.dispatch("getUsuario")
        .catch((err) => {
          console.log(err);
        });
    }
  },
  // computed: {
  //   nome() {
  //     const nome = this.$store.state.usuario.name.split(" ");
  //     return `${nome[0]} ${nome[1]}`;
  //   },
  // },
};
</script>

<style scoped>
img {
  width: 100%;
}

.grid {
  grid-template-columns: minmax(200px, 260px) 1fr;
}
.coluna-1 {
  text-align: center;
  margin-bottom: 30px;
}

.coluna-1 img {
  border-radius: 10px 10px 0 0;
}
.coluna-1 p {
  font-size: 21px;
  margin-top: -5.8px;
  background: #f2f2f2;
  border-radius: 0 0 10px 10px;
}

.coluna-2 {
  margin-top: -10px;
}
</style>
