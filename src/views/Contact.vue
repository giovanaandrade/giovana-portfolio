<template>
  <section class="contact">
    <h2>{{ getterLanguage.contactPage.title }}</h2>
    <div class="contact-icons">
      <div
        v-for="(contact, index) in getterLanguage.contactPage.contacts"
        :key="index"
      >
        <a :href="contact.url" target="_blank">
          <i :class="contact.class" />
        </a>
      </div>
    </div>
    <ContactForm
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

<style>
.contact {
  height: 70vh;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact h2 {
  text-align: center;
  padding-bottom: 2rem;
}

.contact-icons {
  display: flex;
  justify-content: space-around;
}

.contact-icons i {
  font-size: 2.5rem;
}
</style>
