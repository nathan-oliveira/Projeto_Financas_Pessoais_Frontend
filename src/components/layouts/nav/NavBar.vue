<template>
  <div>
    <header :class="!$store.state.login ? 'menu' : 'menu bg-menu'">
      <nav class="container">
        <div class="menu-logo">
          <a @click="actionMenu" v-if="$store.state.login">
            <img src="@/assets/menu.svg" />
          </a>
          <span v-else>Financeiro</span>
        </div>
        <div class="menu-nav">
          <ul v-if="$store.state.login">
            <li>
              <div class="dropdown">
                <Dropdown :titulo="this.nameUser">
                  <router-link to="/minha-conta">Minha Conta</router-link>
                  <a @click="deslogarUsuario">Sair</a>
                </Dropdown>
              </div>
            </li>
          </ul>
          <ul v-else>
            <li>
              <router-link to="/authentication">Entrar / Cadastrar</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="menu-responsivo">
        <NavItem />
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavItem from "@/components/layouts/nav/NavItem.vue";
import Dropdown from "@/components/layouts/nav/Dropdown.vue";

export default {
  name: "NavBar",
  props: ["nomeUsuario"],
  components: {
    NavItem,
    Dropdown,
  },
  computed: {
    ...mapState(["usuario"]),
    nameUser() {
      if (this.usuario) {
        return this.usuario.name.split(" ")[0];
      }

      return "Carregando...";
    },
  },
  methods: {
    actionMenu() {
      this.$store.commit("UPDATE_MENUACTIVE", !this.$store.state.menuActive);
    },
    deslogarUsuario() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/authentication");
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}

.container {
  align-items: center;
}

.menu {
  padding: 15px 10px;
  border-bottom: 1px solid #efefefa8;
}

.bg-menu {
  background: #f7f6fb;
}

.menu-nav a {
  color: rgb(31, 31, 31);
  font-size: 1rem;
}

.menu-logo {
  margin: 0 10px;
}

.menu-logo a {
  font-size: 1.25rem;
  color: #161616;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-family: "Cabin", sans-serif;
}

.menu-logo i {
  font-size: 1.25rem;
  margin-right: 6px;
  margin-top: 4px;
}

.menu-logo img {
  width: 23px;
  cursor: pointer;
}

.menu-logo span {
  font-size: 1.3rem;
  color: #4400ffb9;
  font-weight: bold;
}

.menu-nav {
  flex: 1;
  margin: 0 10px;
  align-self: center;
}

.menu-nav ul {
  float: right;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.menu-nav ul li a {
  padding-left: 30px;
}

@media screen and (min-width: 740px) {
  .menu-responsivo {
    display: none;
  }
}

@media (max-width: 739px) {
  .menu {
    background: #f7f6fb;
    padding: 20px 5px;
  }

  .menu-nav,
  .menu-logo {
    margin: 0 15px;
  }
  .menu-logo a {
    font-size: 1rem;
  }
  .menu-logo i {
    font-size: 0.8rem;
  }
  .container {
    flex-direction: inherit !important;
  }
  svg {
    width: 1rem;
  }
}
@media (max-width: 408px) {
  .menu {
    padding: 20px 20px !important;
  }
  .menu-nav ul li a {
    padding-left: 10px;
  }
  .menu-logo,
  .menu-nav {
    margin: 0 0px;
  }
}

.content {
  padding: 20px;
}
</style>
