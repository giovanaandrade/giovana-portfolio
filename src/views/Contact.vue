<template>
  <div class="contato">
    <h2>{{ getterLanguage.contactPage.title }}</h2>
    <div class="contatoicones">
      <div
        v-for="(contact, index) in getterLanguage.contactPage.contacts"
        :key="index"
      >
        <a class="icons" :href="contact.url" target="_blank">
          <i :class="contact.class" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Contact",
  computed: mapGetters(["getterLanguage"]),
};
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

.contato h2 {
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
