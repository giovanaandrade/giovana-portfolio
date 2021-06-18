<template>
  <div class="projects">
    <div v-if="changeLanguage()">
      <div v-for="(project, index) in getterLanguage.projects" :key="index">
        {{ this.getterLanguage.project.title }} {{ project.description }}
      </div>
    </div>
    <h3>Projetos</h3>

    <div class="container-projetos">
      <div class="card">
        <a
          href="https://github.com/giovanaandrade/Cotton-Candy"
          target="_blank"
        >
          <img
            class="img-projeto"
            src="@/assets/cottoncandy.png"
            alt="Cotton Candy"
          />
        </a>
        <div class="texto-projeto">
          <a
            href="https://github.com/giovanaandrade/Cotton-Candy"
            target="_blank"
          >
            <h4>Cotton Candy</h4>
          </a>
          <p>
            Projeto de rede social para mulheres desenvolvedoras. Desenvolvido
            em .NET e Angular. Trabalho para conclusão de curso de formação em
            back-end .NET.
          </p>
        </div>
      </div>

      <div class="card">
        <a
          href="https://github.com/giovanaandrade/BiscoitodaSorte"
          target="_blank"
        >
          <img
            class="img-projeto"
            src="@/assets/biscoitodasorte.png"
            alt="Biscoito da Sorte"
          />
        </a>
        <div>
          <a
            href="https://github.com/giovanaandrade/BiscoitodaSorte"
            target="_blank"
          >
            <h4>Biscoito da Sorte</h4>
          </a>
          <p>
            Aplicativo que sorteia um "biscoito da sorte" com um poema. Projeto
            desenvolvido em Kotlin no Android Studio para conclusão de curso de
            desenvolvimento de aplicativos.
          </p>
        </div>
      </div>

      <div class="card">
        <a href="http://interquiz.giovanaandrade.vercel.app/" target="_blank">
          <img class="img-quiz" src="@/assets/interquiz.png" alt="InterQuiz" />
        </a>
        <div class="texto-projeto">
          <a href="http://interquiz.giovanaandrade.vercel.app/" target="_blank">
            <h4>InterQuiz</h4>
          </a>
          <p>
            Quiz com perguntas e respostas, mostrando a pontuação no final.
            Desenvolvido em React e NextJS e deploy feito na Vercel. Projeto
            realizado durante Imersão da Alura
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import db from "@/db.json";
export default {
  name: "Projects",
  computed: mapGetters(["getterLanguage"]),
  data() {
    return {
      db,
    };
  },
  methods: {
    ...mapActions(["changeLanguage"]),
  },
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
