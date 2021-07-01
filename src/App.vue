<template>
  <NavMenu />
  <main class="container-page">
    <div class="container-component">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
  <Footer />
</template>
<script>
import NavMenu from "@/components/NavMenu.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavMenu, Footer },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}
a {
  text-decoration: none;
  color: #8c0c5c;
  transition: all 1s;
}
a:active,
a:hover {
  text-decoration: none;
  color: #79cfff;
}
body {
  color: #4f4f4f;
  font-family: "Poppins", sans-serif;
  background: rgb(90, 13, 92);
}

button {
  font: 1em "Poppins", sans-serif;
  padding: 0.7em;
  background: #ffffff;
  border: solid #5a0d5c 0.15em;
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  border-radius: 0.5em;
  text-decoration: none;
  color: #5a0d5c;
  cursor: pointer;
  text-align: center;
  transition: all 1s;
}

button:hover,
button:active {
  color: #ffffff;
  background-color: #5a0d5c;
}
.container-page {
  padding-top: 14vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
.container-component {
  background-color: white;
  width: 85vw;
  height: 70vh;
}
h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
