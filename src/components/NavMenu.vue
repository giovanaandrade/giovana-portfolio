<template>
  <nav class="menu">
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link class="link" :to="route.path"
          ><span v-if="getterLanguage == db.english">{{ route.name }}</span
          ><span v-else>{{ route.nome }}</span></router-link
        >
      </li>
      <li class="language">
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
a,
a:active,
a:hover {
  text-shadow: none;
}

.menu {
  background-color: white;
}

.menu button {
  margin: 0.2em;
  padding: 0.5rem;
  background: #ffffff;
  border: solid #5a0d5c 0.15em;
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  border-radius: 0.5em;
  text-decoration: none;
  color: #5a0d5c;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  transition: all 1s;
}

.menu button:hover,
.menu button:active {
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  border-radius: 0.5em;
  color: #ffffff;
  background-color: #5a0d5c;
  border: solid #5a0d5c 0.15em;
  text-decoration: none;
}

.menu .link {
  text-decoration: none;
  color: #5a0d5c;
  transition: background-color 1s, color 1s;
}

.menu li {
  list-style: none;
}

@media (min-width: 768px) {
  .menu {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    height: 7vh;
    display: flex;
    align-items: center;
  }

  .menu ul {
    width: 100vw;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }

  .menu .icon {
    display: none;
  }

  .menu .link {
    padding: 2vh;
  }

  .menu .link:hover {
    background: #5a0d5c;
    color: white;
  }
}

@media screen and (max-width: 768px) {
  .menu {
    overflow: hidden;
  }

  .menu .link {
    display: none;
    height: 7vh;
    justify-content: space-between;
    align-items: center;
  }
  .menu .link.icon {
    float: right;
    display: flex;
    height: 7vh;
    padding-left: 8%;
    padding-right: 5%;
  }

  .menu.responsive {
    position: relative;
  }

  .menu.responsive ul {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-left: 3%;
    padding-top: 2%;
  }

  .menu.responsive .link.icon {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    padding-left: 8%;
    padding-right: 5%;
  }
  .menu.responsive .link {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>
