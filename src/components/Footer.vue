<template>
  <footer>
    <p>
      <i class="fas fa-code"></i> by
      <a href="https://github.com/giovanaandrade" target="_blank"
        >Giovana de Andrade</a
      >
      with
      <a href="https://vuejs.org/" target="_blank"
        ><i class="fab fa-vuejs"></i
      ></a>
    </p>
    <p>
      Icons by
      <a href="https://fontawesome.com/" target="_blank">FontAwesome</a> and
      <a href="https://www.flaticon.com/" target="_blank">FlatIcons</a>.
      Illustrations by
      <a href="https://2.flexiple.com/scale/home" target="_blank">Scale</a>.
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1.5%;
}

footer a {
  color: #d2cff5;
}

footer a:hover {
  text-shadow: 1px 1px 3px #8c0c5c;
  color: #79cfff;
}

@media only screen and (max-width: 600px) {
  footer {
    padding: 3vh;
  }
}
</style>
