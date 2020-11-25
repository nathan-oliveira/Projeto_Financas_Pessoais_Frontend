<template>
  <div :class="$store.state.login ?
    ($store.state.menuActive ? 'content_web1' : 'content_web2') : 'content_web'">
    <SideBar />
    <NavBar>
      <transition mode="out-in">
        <router-view />
      </transition>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/layouts/nav/NavBar.vue";
import SideBar from "@/components/layouts/nav/SideBar.vue";
import api from "@/services";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
  created() {
    if (window.localStorage.token) {
      api
        .validateToken()
        .catch(() => {
          window.localStorage.removeItem("token");
          this.$router.push("/authentication");
        });
    }
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
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  grid-gap: 30px;
}

@media screen and (max-width: 739px) {
  .container {
    flex-direction: column;
  }

  .content_web1, .content_web2 {
    grid-template-columns: 100% !important;
  }

  .grid {
    grid-template-columns: 1fr;
    margin: 0px auto;
    min-height: 100% !important;
    display: block;
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
  padding: 20px;
}

.content_web {
  display: grid;
  min-height: 100vh !important;
  grid-template-columns: 100%;
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

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
