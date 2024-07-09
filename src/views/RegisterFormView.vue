<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { handleBackToHome, apiUrl } from '@/assets/utils/utils'
import Button from '../components/MainButton.vue'
import ImageGrid from '@/components/ImageGrid.vue'
import axios from 'axios'

const registerURL = `${apiUrl}/auth/register`
const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')

const handleRegister = async () => {
  try {
    const response = await axios.post(registerURL, {
      username: username.value,
      email: email.value,
      password: password.value
    })
    alert('Registration successful!')
    console.log('Registration response:', response.data)
    router.push('/login')
  } catch (error) {
    if (error.response && error.response.data.error) {
      const errorMessage = error.response.data.error
      if (errorMessage === 'Email already exists') {
        alert('The email you have entered is already registered.')
      } else {
        alert(errorMessage)
      }
    } else {
      alert('An error occurred')
    }
    console.error('Registration error:', error)
  }
}
</script>

<template>
  <section class="registration-form">
    <div class="registration-form__img-container">
      <ImageGrid />
    </div>
    <div class="registration-form__form-container">
      <form @submit.prevent="handleRegister" class="registration-form__form">
        <h1 class="registration-form__title">Register</h1>

        <label for="username" class="registration-form__label">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          v-model.trim="username"
        />

        <label for="email" class="registration-form__label">Email</label>
        <input id="email" type="email" placeholder="Enter email" v-model.trim="email" />

        <label for="password" class="registration-form__label">Password</label>
        <input id="password" type="password" placeholder="Enter password" v-model.trim="password" />

        <div class="registration-form__call-to-action">
          <div class="registration-form__buttons">
            <Button type="submit" text="Register" color="pink" class="registration-form__button" />
            <Button
              type="button"
              text="Cancel"
              color="purple"
              @click="handleBackToHome(router)"
              class="registration-form__button"
            />
          </div>
          <p class="registration-form__link">
            Already have an account? <a href="/login"><strong>Login</strong></a>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.registration-form {
  padding-top: 6%;
  display: grid;
  max-width: 1080px;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  grid-gap: 4rem;
  align-items: start;
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
  padding: 0 0 0 1rem;
  margin-bottom: 0.5rem;
}

.registration-form__input {
  height: 2.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  /* border-radius: 5px;
  border: 1px solid #6c4c67; */
}

.registration-form__title {
  margin: 0;
  padding: 0 0 4rem 0;
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
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    grid-gap: 0;
  }

  .registration-form__form-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .registration-form__img-container {
    padding: 0;
    display: flex;
    justify-content: center;
    padding: 1.5rem 0 2rem;
  }

  .registration-form__form {
    width: 100%;
  }

  .registration-form__title {
    font-size: 2rem;
    padding: 0 0 2rem;
  }

  .registration-form__buttons {
    flex-direction: column;
  }
}
</style>
