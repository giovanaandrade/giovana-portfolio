<template>
  <div class="projects">
    <h3>{{ getterLanguage.projectsPage.title }}</h3>
    <div class="container-projetos">
      <div
        v-for="(project, index) in getterLanguage.projectsPage.projects"
        :key="index"
        class="card"
      >
        <a :href="project.url" target="_blank">
          <img class="img-projeto" :src="project.img" :alt="project.title" />
        </a>
        <div class="texto-projeto">
          <a :href="project.url" target="_blank">
            <h4>{{ project.title }}</h4>
          </a>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Projects",
  computed: mapGetters(["getterLanguage"]),
};
</script>

<style scoped>
.projects {
  padding: 2%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.container-projetos {
  display: flex;
  flex-wrap: nowrap;
}

.card {
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.texto-projeto {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 1rem; */
}

.projects img {
  height: 5rem;
}
</style>
