<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../components/MainButton.vue'
//import FileInputImage from '../components/FileInputImage.vue'
import { handleGoToUser } from '@/assets/utils/utils.js'

const router = useRouter()

const keys = Object.keys(localStorage)
console.log(keys)
const userData = localStorage.getItem('userData')
console.log(userData)
const userDataObject = JSON.parse(userData)
console.log(userDataObject)
const token = userDataObject.token
const userId = userDataObject.id

const updateUserURL = `https://vertex-backend-8lly.onrender.com/user/${userId}`

const formData = ref({
  profileImg: '',
  age: '',
  gender: '',
  occupation: '',
  description: ''
})

const submitForm = async () => {
  try {
    const response = await axios.put(updateUserURL, formData.value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log('Form submitted with data:', formData.value, response.data)
    if (response.status === 200) {
      router.push(`/user`)
    } else {
      console.error('Unexpected response status:', response.status)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <main class="personal-info__main">
    <form @submit.prevent="submitForm" class="personal-info__form">
      <div class="personal-info__info-title">
        <h1>Personal Information</h1>
      </div>
      <!-- <FileInputImage
        imageProp="../../src/assets/pretty.png"
        textProp="Select your profile image:"
        @change="onFileChange"
      /> -->

      <label for="profileImg">Profile image URL</label>
      <input
        v-model="formData.profileImg"
        id="profileImg"
        type="text"
        placeholder="Add your link URL"
      />

      <label for="age">Age</label>
      <input v-model="formData.age" id="age" type="number" placeholder="Add your age" />

      <label for="gender">Gender</label>
      <select
        v-model="formData.gender"
        id="gender"
        class="personal-info__form-select"
        aria-label="Default select example"
      >
        <option disabled selected value="">You identify yourself as:</option>
        <option value="femenine">Femenine</option>
        <option value="masculine">Masculine</option>
        <option value="other">No binary</option>
      </select>

      <label for="occupation">Occupation</label>
      <input
        v-model="formData.occupation"
        id="occupation"
        type="text"
        placeholder="Add your occupation"
      />

      <label for="description">Tell us more about yourself</label>
      <textarea
        v-model="formData.description"
        id="description"
        placeholder="Write something about you..."
      ></textarea>
      <div class="personal-info__register-buttons">
        <Button color="purple" text="Cancel" @click="handleGoToUser(router)" />
        <Button color="pink" text="Save" />
        <!-- <Button color="pink" text="Save" @click="handleGoToUser(router)" /> -->
      </div>
    </form>
  </main>
</template>

<style scoped>
/* :has(.personal-info__main) body {
  background-color: #ff00e1;
} */
.personal-info__main label {
  padding: 0 0 0.5rem 1rem;
  color: #4e1057;
}

.personal-info__main {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
}

.personal-info__main h1 {
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: #ff00e1;
}
.personal-info__info-title {
  display: flex;
  flex-direction: column;
}
.personal-info__info-title p {
  margin: 0;
  padding: 0 0 4rem 0;
}

.personal-info__form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
}

.personal-info__form button {
  align-items: center;
}

.personal-info__register-buttons {
  display: flex;
  padding-bottom: 1rem;
  width: 100%;
  gap: 1rem;
}
</style>
