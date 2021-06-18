<template>
  <div class="contato">
    <h3>Contact me</h3>
    <div class="contatoicones">
      <a
        class="icons"
        href="https://www.linkedin.com/in/giovanadeandrade/"
        target="_blank"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a class="icons" href="https://github.com/giovanaandrade" target="_blank"
        ><i class="fab fa-github"></i
      ></a>
      <a class="icons" href="http://medium.com/@giovanadandrade" target="_blank"
        ><i class="fab fa-medium-m"></i
      ></a>
      <a class="icons" href="mailto:giovanadandrade@gmail.com"
        ><i class="far fa-envelope"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 768px) {
  .contato {
    width: 80%;
    height: 30%;
  }
}

@media (min-width: 768px) {
  .contato {
    width: 50%;
  }
}

.contato {
  height: 70vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contato h3 {
  text-align: center;
  padding-bottom: 2rem;
}

.contatoicones {
  display: flex;
  justify-content: space-around;
}

.icons i {
  font-size: 3rem;
}
</style>
