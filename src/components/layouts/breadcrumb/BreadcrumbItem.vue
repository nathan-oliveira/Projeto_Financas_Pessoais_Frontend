<template>
  <li>
    <ul>{{ titulo }} <small>{{asset}}</small></ul>
  </li>
</template>

<script>
export default {
  name: "BreadcrumbItem",
  props: ["titulo", "asset"],
};
</script>

<style scoped>
li {
  list-style: none;
}

li ul {
  color: #161616;
  font-size: 24px;
  font-family: 'Source Sans Pro',sans-serif;
}

li ul small {
  font-size: 16px;
  display: inline-block;
  padding-left: 4px;
  font-weight: 300;
}
</style>
