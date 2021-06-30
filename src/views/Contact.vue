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
    <form
      class="email-form"
      action="https://formspree.io/f/myylppve"
      method="POST"
    >
      <label for="name">
        <input
          id="name"
          type="text"
          name="name"
          :placeholder="getterLanguage.contactPage.form.name"
        />
      </label>
      <label for="e-mail">
        <input
          id="email"
          type="email"
          name="_replyto"
          :placeholder="getterLanguage.contactPage.form.email"
        />
      </label>
      <label for="message">
        <textarea
          id="message"
          name="message"
          :placeholder="getterLanguage.contactPage.form.message"
          rows="5"
        ></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Contact",
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
  font-size: 3rem;
}
.email-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40vh;
}

.email-form input {
  border: none;
  border-bottom: solid #5a0d5c 0.15em;
  text-decoration: none;
  color: #5a0d5c;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em;
}

.email-form textarea {
  resize: none;
  width: 100%;
  border: none;
  border-bottom: solid #5a0d5c 0.15em;
  margin: 0.5em;
}

.email-form button {
  margin: 0.5em;
  padding: 0.7em;
  background: #ffffff;
  border: solid #5a0d5c 0.15em;
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  border-radius: 0.5em;
  text-decoration: none;
  color: #5a0d5c;
  cursor: pointer;
  text-align: center;
  transition: all 1s;
  width: fit-content;
}

.email-form button:hover,
.email-form button:active {
  -webkit-border-radius: 0.5em;
  -moz-border-radius: 0.5em;
  border-radius: 0.5em;
  color: #ffffff;
  background-color: #5a0d5c;
  border: solid #5a0d5c 0.15em;
  text-decoration: none;
}
</style>
