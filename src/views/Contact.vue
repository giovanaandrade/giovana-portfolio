<template>
  <section class="contact">
    <h2>{{ getterLanguage.contactPage.title }}</h2>
    <article class="contact-icons">
      <div
        v-for="(contact, index) in getterLanguage.contactPage.contacts"
        :key="index"
      >
        <a :href="contact.url" target="_blank">
          <i :class="contact.class" />
        </a>
      </div>
    </article>
    <ContactForm
      class="contact-form"
      :name="getterLanguage.contactPage.form.name"
      :email="getterLanguage.contactPage.form.email"
      :message="getterLanguage.contactPage.form.message"
      :buttonText="getterLanguage.contactPage.form.button"
    />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import ContactForm from "../components/ContactForm.vue";
export default {
  name: "Contact",
  components: { ContactForm },
  computed: mapGetters(["getterLanguage"]),
};
</script>

<style scoped>
.contact {
  height: 70vh;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}

.contact-icons {
  display: flex;
  justify-content: space-around;
}

.contact-icons i {
  font-size: 2.5rem;
}

@media only screen and (max-width: 700px) {
  .contact {
    width: 85%;
  }
}
</style>
