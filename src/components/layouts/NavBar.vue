<template>
  <div>
    <header class="menu">
      <div class="container">
        <div class="menu-logo">
          <a @click="actionMenu" v-if="$store.state.login">
            <img src="@/assets/menu.svg" />
          </a>
          <span v-else>APP Financeiro</span>
        </div>
        <div class="menu-nav">
          <ul>
            <li v-if="$store.state.login">
              <a @click="deslogarUsuario">Sair</a>
            </li>
            <li v-else>
              <router-link to="/authentication">Entrar / Cadastrar</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    actionMenu() {
      this.$store.commit("setMenuActive", !this.$store.getters.getMenuActive);
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
  background: #f7f6fb;
  padding: 20px 10px;
}
.menu-nav a {
  color: rgb(31, 31, 31);
  font-size: 1.1rem;
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
  width: 25px;
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
