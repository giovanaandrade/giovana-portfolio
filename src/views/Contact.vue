<template>
  <div class="contato">
    <h4>Contact me</h4>
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
  padding-bottom: 3%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contato h4 {
  text-align: center;
  padding-bottom: 8%;
  font-size: 20px;
}

.contato a {
  color: #8c0c5c;
  font-size: 36px;
  transition: all 1s;
}

.contato a:active,
.contato a:hover {
  text-decoration: none;
  text-shadow: 1px 1px 3px #5a0d5c;
  color: #5a0d5c;
}

.contatoicones {
  display: flex;
  justify-content: space-between;
}
</style>
