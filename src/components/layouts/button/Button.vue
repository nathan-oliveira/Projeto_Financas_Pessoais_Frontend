<template>
  <button :type="type" class="btn">{{ title }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["title", "type"],
};
</script>

<style scoped>
.btn {
  display: block;
  padding: 10px 30px;
  background: #4400ffb9;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  outline: none;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}

.btn-disabled,
.btn-disabled:hover {
  background: #bbc;
  transform: scale(1);
}

</style>
