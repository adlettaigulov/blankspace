<template>
  <div class="login">
    <h1>Страница входа</h1>
    <form>
      <div class="mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          class="form-control"
          placeholder="Пароль"
          v-model="password"
        />
      </div>
      <button
        type="submit"
        class="btn btn-outline-dark"
        @click.prevent="signIn"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useRouter } from 'vue-router'; // import router

const email = ref('');
const password = ref('');
const router = useRouter(); // get a reference to our vue router
const signIn = () => {
  // we also renamed this method
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value) // THIS LINE CHANGED
    .then((data) => {
      console.log('Successfully logged in!');
      router.push('/admin'); // redirect to the feed
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>

<style></style>
