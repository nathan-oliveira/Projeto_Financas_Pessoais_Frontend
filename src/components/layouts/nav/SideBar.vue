<template>
  <div
    class="sidebar"
    @mouseover="actionMenu"
    @mouseout="actionMenu"
  >
    <div class="sidebar-menu">
      <ul class="sidebar-menu-logo">
        <li>
          <router-link to="/">
            FI<span :class="`${$store.state.menuActive ? 'onscreen' : 'offscreen'}`">NANCEIRO</span>
          </router-link>
        </li>
      </ul>
      <NavItem class="sidebar-menu-link" />
    </div>
  </div>
</template>

<script>
import NavItem from "@/components/layouts/nav/NavItem.vue";

export default {
  name: "SideBar",
  components: {
    NavItem,
  },
  methods: {
    actionMenu() {
      if (!this.$store.state.menuActive) {
        this.$store.commit("UPDATE_MENUACTIVE", !this.$store.state.menuActive);
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  padding: 18px 20px;
}

.sidebar-menu-logo li a {
  color: #f7f6fb !important;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

@media screen and (max-width: 739px) {
  .sidebar {
    display: none;
  }

  .content {
    display: block;
  }
}
</style>
