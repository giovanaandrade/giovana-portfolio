<template>
  <section class="about">
    <h2>
      {{ this.getterLanguage.aboutPage.title }}
    </h2>
    <p>
      {{ this.getterLanguage.aboutPage.description }}
    </p>

    <h3 class="subtitulo" id="habilidades">
      {{ this.getterLanguage.aboutPage.skills }}
    </h3>

    <article class="skills">
      <p>HTML, CSS, React e .NET</p>
    </article>

    <a href="./assets/Currículo.pdf" target="_blank" download>
      <button>Download {{ this.getterLanguage.aboutPage.curriculum }}</button>
    </a>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "About",
  computed: mapGetters(["getterLanguage"]),

  methods: {
    ...mapActions(["changeLanguage"]),
  },
};
</script>

<style>
.about {
  padding: 2%;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-around;
  width: 95%;
}
</style>
