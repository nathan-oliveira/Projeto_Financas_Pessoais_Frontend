<template>
  <section class="content">
    <Breadcrumb>
      <BreadcrumbItem titulo="Minha Conta" asset="Informações de Usuário" />
    </Breadcrumb>
    <div class="grid" v-if="!$store.state.loading">
      <div class="imagem">
        <img
          :src="fotoPerfil"
          width="200px"
        />
        <p @click.prevent="openModal">
          <i data-v-2a5f3f11="" class="fas fa-edit"></i> Atualizar Imagem
        </p>
      </div>
      <div class="formulario">
        <Form>
          <button class="btn" @click.prevent="updated">Atualizar</button>
        </Form>
      </div>
    </div>
    <PaginaCarregando key="Carregando" v-else />
  </section>
</template>

<script>
import api from "@/services";
import Form from "@/components/layouts/form/Form.vue";
import Breadcrumb from "@/components/layouts/breadcrumb/Breadcrumb.vue";
import BreadcrumbItem from "@/components/layouts/breadcrumb/BreadcrumbItem.vue";
import { swalUpdateOk } from "@/helpers";

export default {
  name: "Perfil",
  components: {
    Breadcrumb,
    BreadcrumbItem,
    Form,
  },
  computed: {
    fotoPerfil() {
      return this.$store.state.usuario.foto;
    }
  },
  created() {
    this.$store.commit("UPDATE_LOADING", true);

    setTimeout(() => {
      this.$store.commit("UPDATE_LOADING", false);
    }, 500);
  },
  methods: {
    async updated() {
      this.$store
        .dispatch("updateUser", this.$store.state.usuario)
        .then((resp) => {
          this.$store.commit("UPDATE_USUARIO", {
            name: resp.data.name,
            email: resp.data.email,
            nivel: resp.data.nivel,
            foto: this.$store.state.usuario.foto
          });

          this.$store.commit("UPDATE_SUCCESS", [
            "Perfil atualizado com sucesso!",
          ]);

          setTimeout(() => {
            this.$store.commit("UPDATE_SUCCESS", []);
          }, 3000);
        })
        .catch((err) => {
          this.$store.commit("UPDATE_ERROS", [err.response.data.message]);

          setTimeout(() => {
            this.$store.commit("UPDATE_ERROS", []);
          }, 3000);
        });
    },
    async openModal() {
      const { value: foto } = await this.$swal.fire({
        input: 'url',
        inputLabel: 'Alterar imagem de perfil',
        inputPlaceholder: 'URL da imagem',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Salvar",
      });

      if (foto) {
        api.patch("/profile", { foto })
          .then((resp) => {
            this.$store.commit('UPDATE_USUARIO', {
              name: resp.data.name,
              email: resp.data.email,
              nivel: resp.data.nivel,
              foto: resp.data.foto
            });

            this.$swal(swalUpdateOk);
          });
      }
    }
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.imagem {
  text-align: center;
  margin-bottom: 20px;
}

.imagem img {
  border-radius: 10px 10px 0 0;
  box-shadow: 0px 0px 2px 0px rgba(50, 50, 50, 0.45);

}
.imagem p {
  font-size: 17px;
  padding: 5px;
  margin-top: -5.8px;
  background: #f2f2f2;
  border-radius: 0 0 10px 10px;
  cursor: pointer;
  box-shadow: 0px 0px 2px 0px rgba(50, 50, 50, 0.45);
}

@media screen and (min-width: 740px) {
  .formulario {
    margin-top: -5px;
  }
}

@media screen and (max-width: 739px) {
  .btn {
    width: 100%;
  }
}
</style>
