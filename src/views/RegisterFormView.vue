<script setup>
import Button from '../components/MainButton.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const personalInfo = () => {
  router.push('personal-information')
}

const username = ref('')
const email = ref('')
const password = ref('')
const confirm = ref('')

const submitForm = () => {
  const formData = {
    username: username.value,
    email: email.value,
    password: password.value,
    confirm: confirm.value
  }
  console.log('Form data:', formData)
}
</script>

<template>
  <section>
    <div class="img-container">
      <img src="../assets/vertex_01.svg" width="120" alt="logo vertex" />
    </div>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input v-model="username" id="username" type="text" placeholder="Your username" />
        <label for="email">Email</label>
        <input v-model="email" id="email" type="email" placeholder="Your email" />
        <label for="password">Password</label>
        <input v-model="password" id="password" type="password" placeholder="Your password" />
        <label for="confirm">Confirm password</label>
        <input v-model="confirm" id="confirm" type="password" placeholder="Confirm your password" />
        <div class="call-to-action">
          <Button text="Register" color="purple" @click="personalInfo" />
          <p>
            Already have an account? <a href=""><strong>Login</strong></a>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.form-container {
  width: 100%;
  padding: 1rem;
}
.call-to-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    transition: color 0.3s ease;
  }
  a:hover {
    color: #4e1057;
  }
}
section {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  background-color: #ff00e1;
  height: 100vh;

  h1 {
    margin: 0;
    padding: 0 0 1rem 0;
    font-size: 4rem;
    color: #fff;
  }
  img {
    width: 80%;
  }
  form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    gap: 0.2rem;
  }
  form input {
    height: 2.5rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    padding: 0.5rem;
    border: 1px solid #6c4c67;
  }
  label {
    font-weight: bold;
    color: #4e1057;
  }

  button {
    margin-top: 1rem;
  }
  strong {
    font-weight: bolder;
  }
  p,
  a {
    color: #fff;
  }
}

@media (max-width: 700px) {
  section {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
    h1 {
      font-size: 2rem;
    }
    img {
      width: 50%;
    }
  }
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    width: 80%;
  }
  .img-container {
    display: flex;
    justify-content: center;
    padding: 1.5rem 0 2rem;
  }

  .form-container > :first-child {
    align-self: flex-start;
  }

  /* Aplicar estilos a los hijos restantes */
  .form-container > :not(:first-child) {
    align-self: center;
  }
}
</style>
