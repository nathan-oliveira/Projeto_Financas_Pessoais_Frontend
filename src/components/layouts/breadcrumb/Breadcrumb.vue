<template>
  <div class="breadcrumb">
    <ol>
      <slot></slot>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
};
</script>

<style scoped>
ol {
  display: flex;
  padding: 0;
  margin-top: 0;
}
</style>
