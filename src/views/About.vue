<template>
  <div class="about">
    <p>
      Nasci e moro no Rio Grande do Sul, tenho 25 anos, sou viciada em Netflix,
      amo dançar e sou programadora. Minha trajetória profissional começou um
      pouco distante da tecnologia, sou graduada em Psicologia e apesar de
      gostar muito da área, não foi nela que me encontrei. Tive meus primeiros
      contatos com HTML e CSS lá pelos meus 12 anos ao estilizar um blog, mas
      depois deixei o meu lado curioso por tecnologia um pouco adormecido. Em
      2020, comecei a fazer cursos online de programação e percebi que era isso
      que eu queria fazer profissionalmente. Em 2021, ingressei na graduação em
      Análise e Desenvolvimento de Sistemas e atualmente procuro uma
      oportunidade para ingressar na carreira. Fiz cursos tanto de backend,
      quanto frontend e tive a oportunidade de trabalhar em equipe e desenvolver
      alguns projetos, que podem ser encontrados no meu GitHub. Sinta-se à
      vontade para entrar em contato comigo!
    </p>

    <h4 class="subtitulo" id="habilidades">Habilidades</h4>
    <div class="skills">
      <p>HTML, CSS, React e .NET</p>
    </div>

    <div class="curriculo">
      <a href="./assets/Currículo.pdf" target="_blank" download>
        <button class="botao-curriculo">Baixar currículo</button>
      </a>
    </div>
  </div>
</template>

<style>
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
