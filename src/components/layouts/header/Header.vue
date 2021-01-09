<template>
  <div
    v-if="this.$store.state.login"
    :class="$store.state.login ?
    ($store.state.menuActive ? 'aside' : 'no-aside') : 'aside'"
  >
    <SideBar />
  </div>
</template>

<script>
import SideBar from "@/components/layouts/nav/SideBar.vue";

export default {
  name: "Header",
  components: {
    SideBar,
  }
};
</script>
