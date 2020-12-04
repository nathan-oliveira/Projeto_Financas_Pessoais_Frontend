<template>
  <ul
    v-if="this.login"
    :class="`sidebar-menu-link ${this.menuActive ? '' : 'visibled'}`">
    <li>
      <router-link to="/">
        <i class="fas fa-home"></i>
        <p
          :class="`${this.menuActive ? '' : 'offscreen'}`">Dashboard
        </p>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="far fa-credit-card"></i>
        <p
          :class="`${this.menuActive ? '' : 'offscreen'}`">Receitas
        </p>
      </router-link>
    </li>
    <li>
      <router-link to="/">
        <i class="fas fa-credit-card"></i>
        <p
          :class="`${this.menuActive ? '' : 'offscreen'}`">Despesa
        </p>
      </router-link>
    </li>
    <li v-if="menuOwner">
      <router-link to="/categoria">
        <i class="fas fa-plus-circle"></i>
        <p @click="actionMenu"
          :class="`${this.menuActive ? '' : 'offscreen'}`">Categorias
        </p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavItem",
  computed: {
    ...mapState(["login", "menuActive"]),
    menuOwner() {
      if (this.$store.state.usuario) {
        if (this.$store.state.usuario.nivel) {
          return true;
        }
      }
      return false;
    },
  },
  methods: {
    actionMenu() {
      this.$store.commit("UPDATE_MENUACTIVE", !this.$store.state.menuActive);
    },
  },
};
</script>

<style scoped>
.offscreen {
  display: none;
  transition: all 0.3s;
}

.sidebar-menu-link li a {
  align-items: center;
  color: #f7f6fb !important;
  display: flex;
}

.sidebar-menu-link li a p {
  font-size: 1.1rem;
  margin-left: 10px;
}

.sidebar-menu-link li a:hover{
  color: #f7f6fba8 !important;
}

.sidebar-menu-link li a i {
  font-size: 1rem;
}

.sidebar-menu-link li {
  margin: 2.5rem 0rem;
}

@media screen and (max-width: 739px) {
  .sidebar-menu-link li {
    margin: 1rem 0.3rem;
  }
  .sidebar-menu-link li a {
    color: rgb(61, 61, 61) !important;
  }

  .sidebar-menu-link li a:hover {
    color: rgb(61, 61, 61) !important;
  }

  .sidebar-menu-link li a i{
    display: none;
  }

  .sidebar-menu-link li a p {
    font-size: 1.1rem;
    margin-left: 10px;
  }

  .visibled {
    transition: all 0.3s;
    display: none;
  }
}
</style>
