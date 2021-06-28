<template>
  <div class="about">
    <h2>
      {{ this.getterLanguage.aboutPage.title }}
    </h2>
    <p>
      {{ this.getterLanguage.aboutPage.description }}
    </p>

    <h3 class="subtitulo" id="habilidades">
      {{ this.getterLanguage.aboutPage.skills }}
    </h3>

    <div class="skills">
      <p>HTML, CSS, React e .NET</p>
    </div>

    <div class="curriculo">
      <a href="./assets/Currículo.pdf" target="_blank" download>
        <button class="botao-curriculo">
          Download {{ this.getterLanguage.aboutPage.curriculum }}
        </button>
      </a>
    </div>
  </div>
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
.botao-curriculo {
  font-size: 16px;
  padding: 0.7em;
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

.botao-curriculo:hover,
.botao-curriculo:active {
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  border-radius: 0.5em;
  color: #ffffff;
  background-color: #5a0d5c;
  border: solid #5a0d5c 0.15em;
  text-decoration: none;
}
</style>
