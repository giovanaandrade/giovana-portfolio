<template>
  <div class="home">
    <div class="title">
      <div class="hello">
        <h1>{{ getterLanguage.homePage.title }}</h1>
        <h1 class="name">Giovana!</h1>
        <h3>{{ getterLanguage.homePage.description }}</h3>
      </div>
    </div>
    <img
      class="profile-photo"
      src="@/assets/fotoperfil.jpg"
      alt="Profile photo"
    />
  </div>
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
}

.name {
  color: #8c0c5c;
}
.profile-photo {
  height: 60vh;
}
</style>
