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
import { mapGetters } from "vuex";
export default {
  name: "About",
  computed: mapGetters(["getterLanguage"]),
};
</script>

<style>
.about {
  padding: 2vh;
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: space-around;
  width: 95%;
}

@media only screen and (max-width: 600px) {
  .about {
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .about p {
    padding-top: 2vh;
    padding-bottom: 2vh;
  }
  .about button {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
}
</style>
