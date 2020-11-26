<template>
  <div class="dropdown">
    <div class="dropdown-center">
      <button class="dropbtn">{{ titulo }}</button><i class="fas fa-angle-down"></i>
    </div>
    <div class="dropdown-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titulo"],
  name: "Dropdown",
};
</script>

<style scoped>
.dropbtn {
  cursor: pointer;
  background-color: transparent;
  color: rgb(31, 31, 31);
  font-size: 1rem;
  font-family: "Cabin", sans-serif;
  border: none;
  outline: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #efefefa8;
  min-width: 160px;
  z-index: 1;
  line-height: 45px;
  margin-left: -90px;
}

.dropdown-content a {
  color: black;
  font-size: 1rem;
  padding: 0px 8px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: rgba(221, 221, 221, 0.726);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-center {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>
