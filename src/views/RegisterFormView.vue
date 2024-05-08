<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { handleBackToHome, handleGoToPersonalInfo } from '@/assets/utils/utils'
import Button from '../components/MainButton.vue'

const router = useRouter()

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
  <section class="registration-form">
    <div class="registration-form__img-container">
      <img src="../assets/vertexlogopink.svg" width="250" alt="logo vertex" />
    </div>
    <div class="registration-form__form-container">
      <form @submit.prevent="submitForm" class="registration-form__form">
        <h1 class="registration-form__title">Register</h1>
        <label for="username" class="registration-form__label">Username</label>
        <input
          v-model="username"
          id="username"
          type="text"
          placeholder="Your username"
          class="registration-form__input"
        />
        <label for="email" class="registration-form__label">Email</label>
        <input
          v-model="email"
          id="email"
          type="email"
          placeholder="Your email"
          class="registration-form__input"
        />
        <label for="password" class="registration-form__label">Password</label>
        <input
          v-model="password"
          id="password"
          type="password"
          placeholder="Your password"
          class="registration-form__input"
        />
        <label for="confirm" class="registration-form__label">Confirm password</label>
        <input
          v-model="confirm"
          id="confirm"
          type="password"
          placeholder="Confirm your password"
          class="registration-form__input"
        />
        <div class="registration-form__call-to-action">
          <div class="registration-form__buttons">
            <Button
              text="Cancel"
              color="purple"
              @click="handleBackToHome(router)"
              class="registration-form__button"
            />
            <Button
              text="Register"
              color="pink"
              @click="handleGoToPersonalInfo(router)"
              class="registration-form__button"
            />
          </div>
          <p class="registration-form__link">
            Already have an account? <a href=""><strong>Login</strong></a>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.registration-form {
  padding-top: 4rem;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
}

.registration-form__img-container {
  grid-column: 1;
}

.registration-form__img-container svg {
  color: #4e1057;
}

.registration-form__form-container {
  grid-column: 2;
  width: 100%;
  padding: 1rem;
}

.registration-form__form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 0.2rem;
}

.registration-form__label {
  font-weight: bold;
  color: #4e1057;
}

.registration-form__input {
  height: 2.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid #6c4c67;
}

.registration-form__title {
  margin: 0;
  padding: 0 0 1rem 0;
  font-size: 4rem;
  color: #4e1057;
}

.registration-form__call-to-action {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.registration-form__buttons {
  display: flex;
  gap: 1rem;
}

.registration-form__button {
  margin-top: 1rem;
}

.registration-form__link {
  color: #4e1057;
}
.registration-form__link a {
  color: #4e1057;
  transition: color 0.3s ease-in;
}
.registration-form__link a:hover {
  color: #ff00e1;
}

.registration-form__link strong {
  font-weight: bolder;
}

@media (max-width: 700px) {
  .registration-form {
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
  }

  .registration-form__img-container {
    display: flex;
    justify-content: center;
    padding: 1.5rem 0 2rem;
  }

  .registration-form__form-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .registration-form__form {
    width: 80%;
  }

  .registration-form__title {
    font-size: 2rem;
  }
}
</style>
