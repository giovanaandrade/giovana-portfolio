<template>
  <footer>
    <p>
      <i class="fas fa-code"></i> by
      <a href="https://github.com/giovanaandrade" target="_blank"
        >Giovana de Andrade</a
      >
    </p>
    <p>
      Icons by
      <a href="https://fontawesome.com/" target="_blank">FontAwesome</a> and
      <a href="https://www.flaticon.com/" target="_blank">FlatIcons</a>.
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style>
footer {
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1.5%;
}

footer a {
  text-decoration: none;
  color: #d2cff5;
  transition: all 1s;
}

footer a:hover {
  text-decoration: none;
  text-shadow: 1px 1px 3px #8c0c5c;
  color: #79cfff;
}
</style>
