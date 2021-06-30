<template>
  <form
    class="email-form"
    action="https://formspree.io/f/myylppve"
    method="POST"
  >
    <label for="name">
      <input id="name" type="text" name="name" :placeholder="name" />
    </label>
    <label for="e-mail">
      <input id="email" type="email" name="_replyto" :placeholder="email" />
    </label>
    <label for="message">
      <textarea
        id="message"
        name="message"
        :placeholder="message"
        rows="5"
      ></textarea>
    </label>
    <button type="submit">{{ buttonText }}</button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  props: { name: String, email: String, message: String, buttonText: String },
};
</script>

<style scoped>
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
  color: #4f4f4f;
  width: 100%;
  padding: 0.5em;
  margin: 0.5em;
}

::-webkit-input-placeholder {
  /* Edge */
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

::placeholder {
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

.email-form textarea {
  resize: none;
  width: 100%;
  border: none;
  border-bottom: solid #5a0d5c 0.15em;
  margin: 0.5em;
}

.email-form button {
  font-size: 1rem;
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
