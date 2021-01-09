<template>
  <div class="body">
    <Nav />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Nav from "@/components/layouts/nav/NavBar.vue";

export default {
  name: "Main",
  components: {
    Nav,
  }
};
</script>
