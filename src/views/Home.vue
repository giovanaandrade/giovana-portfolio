<template>
  <div class="about">
    <h1>Hello, I'm Giovana!</h1>
    <img
      class="profile-photo"
      src="@/assets/fotoperfil.jpg"
      alt="Profile photo"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-around;
}
.profile-photo {
  height: 60vh;
}
</style>
