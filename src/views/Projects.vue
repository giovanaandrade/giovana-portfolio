<template>
  <section class="projects">
    <h2 class="title">{{ getterLanguage.projectsPage.title }}</h2>
    <div
      v-for="(project, index) in getterLanguage.projectsPage.projects"
      :key="index"
      class="card-project"
    >
      <a :href="project.url" target="_blank">
        <img
          class="img-projeto"
          :src="require(`../assets/${project.img}`)"
          :alt="project.title"
        />
      </a>
      <div class="texto-projeto">
        <a :href="project.url" target="_blank">
          <h4>{{ project.title }}</h4>
        </a>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </section>
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
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: auto auto auto;
  gap: 2rem 3rem;
  grid-auto-flow: row;
  grid-template-areas:
    "title title"
    ". ."
    ". .";
}

.title {
  grid-area: title;
  text-align: center;
}

.card-project {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.texto-projeto {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.projects img {
  height: 5rem;
}

h4 {
  padding: 0.5rem;
}
</style>
