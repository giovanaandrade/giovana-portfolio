<template>
  <transition name="page" mode="in-out">
    <NavMenu v-if="showNav" />
  </transition>
  <div
    class="navigation-icon"
    :class="{ active: isBurgerActive }"
    v-if="mobileView"
    @click="
      {
        showNav = !showNav;
        isBurgerActive = !isBurgerActive;
      }
    "
  >
    <i class="fas fa-bars"></i>
  </div>
  <NavMenu v-if="!mobileView" />
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
  data: () => {
    return {
      mobileView: true,
      showNav: false,
      isBurgerActive: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 700;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
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
  color: #79cfff;
}
body {
  font-size: 16px;
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

@media only screen and (max-width: 700px) {
  .container-component {
    height: 100%;
  }
  .container-page {
    padding-top: 10vh;
  }

  .navigation-icon i {
    font-size: 1.5rem;
    color: white;
    padding: 2vh;
    width: 100vw;
    top: 0;
    position: absolute;
  }
  .navigation-icon.active i {
    color: #5a0d5c;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>
