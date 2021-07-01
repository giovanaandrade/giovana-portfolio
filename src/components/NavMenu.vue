<template>
  <nav class="menu">
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link class="menu-item" :to="route.path"
          ><span v-if="getterLanguage == db.english">{{ route.name }}</span
          ><span v-else>{{ route.nome }}</span></router-link
        >
      </li>
      <li>
        <button @click="translateToEnglish()">English</button>
        <button @click="translateToPortuguese()">Português</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { routes } from "@/router/index.js";
import db from "@/db.json";
export default {
  name: "NavMenu",
  methods: { ...mapActions(["translateToEnglish", "translateToPortuguese"]) },
  computed: mapGetters(["getterLanguage"]),
  data() {
    return {
      routes,
      db,
    };
  },
};
</script>

<style scoped>
.menu {
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  height: 7vh;
  display: flex;
  align-items: center;
}

.menu button {
  margin: 0.2em;
  padding: 0.5rem;
}

.menu-item {
  text-decoration: none;
  color: #5a0d5c;
  transition: all 1s;
  padding: 2vh;
}
.menu button:hover,
.menu button:active,
.menu-item:hover {
  color: #ffffff;
  background-color: #5a0d5c;
}

.menu li {
  list-style: none;
}

.menu ul {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
</style>
