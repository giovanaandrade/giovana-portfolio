<template>
  <NavMenu />

  <div class="container-page">
    <a @click="toggleTranslate()">English</a>

    <button @click="toggleTranslate()">Translate</button>
    <div class="container">
      <div class="component">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import NavMenu from "@/components/NavMenu.vue";
import Footer from "./components/Footer.vue";
import { mapActions } from "vuex";

export default {
  components: { NavMenu, Footer },
  methods: { ...mapActions(["toggleTranslate"]) },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #8c0c5c;
  transition: all 1s;
}

a:active,
a:hover {
  text-decoration: none;
  text-shadow: 1px 1px 3px #5a0d5c;
  color: #5a0d5c;
}

body {
  color: #4f4f4f;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  background: rgb(90, 13, 92);
  /* background: linear-gradient(
    90deg,
    rgba(90, 13, 92, 0.9223039557619923) 0%,
    rgba(140, 12, 92, 0.9054972330729166) 50%,
    rgba(210, 207, 245, 1) 100%
  ); */
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.container-page {
  padding-top: 14vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
.container {
  background-color: white;
  width: 85vw;
  height: 70vh;
}
/* .component {
  padding: 2%;
} */
</style>
