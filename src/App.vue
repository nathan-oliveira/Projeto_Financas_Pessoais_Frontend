<template>
  <div :class="this.$store.getters.getMenuActive ? 'content_web1' : 'content_web2'">
    <SideBar />
    <NavBar>
      <router-view />
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/layouts/NavBar.vue";
import SideBar from "@/components/layouts/SideBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");

body,
h1,
h2,
p,
ul,
li,
a {
  margin: 0px;
  padding: 0px;
}

body {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  color: #161616;
}

* {
  box-sizing: border-box;
}

.container {
  display: flex;
  /* max-width: 1300px; */
  margin: 0 auto;
}

@media screen and (max-width: 739px) {
  .container {
    flex-direction: column;
    /* max-width: 500px; */
  }

  .content_web1, .content_web2 {
    grid-template-columns: 100% !important;
  }
}

a {
  text-decoration: none;
}

ul li {
  list-style: none;
}

.content {
  min-height: 100vh !important;
}

.content_web1 {
  display: grid;
  min-height: 100vh !important;
  grid-template-columns: 0.4fr 2fr;
}

.content_web2 {
  display: grid;
  min-height: 100vh !important;
  grid-template-columns: 0.04fr 2fr;
}

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
