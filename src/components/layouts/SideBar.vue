<template>
  <div class="sidebar" v-if="$store.state.login">
    <div class="sidebar-menu">
      <ul class="sidebar-menu-logo">
        <li>
          <router-link to="/">
            FI<span
              :class="`${this.$store.getters.getMenuActive ? '' : 'sidebar-visibled'}`"
            >NANCEIRO</span>
          </router-link>
        </li>
      </ul>
      <ul class="sidebar-menu-link">
        <li>
          <router-link to="/">
            <i class="fas fa-home"></i>
            <p
              :class="`${this.$store.getters.getMenuActive ? '' : 'sidebar-visibled'}`">Dashboard
            </p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="far fa-credit-card"></i>
            <p
              :class="`${this.$store.getters.getMenuActive ? '' : 'sidebar-visibled'}`">Receitas
            </p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="fas fa-credit-card"></i>
            <p
              :class="`${this.$store.getters.getMenuActive ? '' : 'sidebar-visibled'}`">Despesa
            </p>
          </router-link>
        </li>
        <li>
          <router-link to="/">
            <i class="fas fa-plus-circle"></i>
            <p
              :class="`${this.$store.getters.getMenuActive ? '' : 'sidebar-visibled'}`">Categorias
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.sidebar {
  padding: 18px 20px;
  background: #4723d9;
  border-right: 2px solid #3a1bb8;
}

.sidebar-visibled {
  display: none;
}

.sidebar-menu-logo li a {
  color: #f7f6fb !important;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}

.sidebar-menu-link li a {
  align-items: center;
  color: #f7f6fb !important;
  display: flex;
}

.sidebar-menu-link li a p {
  font-size: 1.25rem;
  transition: 0.3s;
  margin-left: 10px;

}

.sidebar-menu-link li a:hover{
  color: #f7f6fba8 !important;
}

.sidebar-menu-link li a i {
  font-size: 1.2rem;
}

.sidebar-menu-link li {
  margin: 2.5rem 0rem;
}

@media screen and (max-width: 739px) {
  .sidebar {
    display: none;
  }
}

</style>
