<template>
  <section class="home">
    <article class="title">
      <div class="hello">
        <h1>{{ getterLanguage.homePage.title }}</h1>
        <h1 class="name">Giovana!</h1>
        <h2>{{ getterLanguage.homePage.description }}</h2>
      </div>
    </article>
    <img
      class="profile-photo"
      src="@/assets/fotoperfil.jpg"
      alt="Profile photo"
    />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: mapGetters(["getterLanguage"]),
};
</script>

<style scoped>
.hello {
  padding: 1rem;
  align-items: center;
}
.home {
  padding: 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.name {
  color: #8c0c5c;
}
.profile-photo {
  height: 60vh;
}

@media only screen and (max-width: 700px) {
  .home {
    flex-direction: column;
  }
  .profile-photo {
    max-height: 50vh;
    padding: 2vh;
  }
  .hello {
    text-align: center;
  }
  .title {
    height: 40vh;
    justify-content: center;
  }
}
</style>
