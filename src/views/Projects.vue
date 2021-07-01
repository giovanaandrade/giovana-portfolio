<template>
  <section class="container-projects">
    <h2>{{ getterLanguage.projectsPage.title }}</h2>
    <article class="projects">
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
        <a :href="project.url" target="_blank">
          <h4>{{ project.title }}</h4>
        </a>
        <p>{{ project.description }}</p>
      </div>
    </article>
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
.container-projects {
  padding: 2vh;
  height: 70vh;
  text-align: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.card-project {
  padding: 2vh;
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects img {
  height: 5rem;
}

h4 {
  padding: 0.5rem;
}

@media only screen and (max-width: 600px) {
  .container-projects {
    height: 100%;
  }
  .card-project {
    width: 100%;
  }
}
</style>
