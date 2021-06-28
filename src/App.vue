<template>
  <NavMenu />

  <div class="container-page">
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

export default {
  components: { NavMenu, Footer },
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
</style>
