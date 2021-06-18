<template>
  <div class="home">
    <div class="title">
      <div class="hello">
        <h1>Hello, I'm</h1>
        <h1 class="name">Giovana!</h1>
      </div>

      <h3>Full Stack Developer</h3>
    </div>

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
.hello {
  padding: 1rem;
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
