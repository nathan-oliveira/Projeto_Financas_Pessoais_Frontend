<template>
  <div class="sidebar" v-if="$store.state.login" @mouseover="actionMenu" @mouseout="actionMenu">
    <div class="sidebar-menu">
      <ul class="sidebar-menu-logo">
        <li>
          <router-link to="/">
            FI<span
              :class="`${$store.state.menuActive ? '' : 'offscreen'}`"
            >NANCEIRO</span>
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
  background: linear-gradient(180deg,#4723d9 35%, #87f 100%);
  /* background: #4723d9; */
  border-right: 1px solid linear-gradient(180deg,#4723d9 35%, #87f 100%);
}

.offscreen {
  display: none;
  transition: all 0.3s;
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
