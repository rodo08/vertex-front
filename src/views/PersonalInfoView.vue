<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../components/MainButton.vue'
import FileInputImage from '../components/FileInputImage.vue'

const router = useRouter()
const user = () => {
  router.push('/user')
}
const home = () => {
  router.push('/')
}

const formData = ref({
  file: '',
  age: '',
  gender: '',
  hobbies: '',
  sports: '',
  about: ''
})

const submitForm = () => {
  console.log('Form submitted with data:', formData.value)
  // Aquí puedes enviar formData a tu servidor o realizar cualquier otra acción necesaria
}

const onFileChange = (imageUrl) => {
  console.log('Imagen seleccionada:', imageUrl)
  formData.value.file = imageUrl // Actualizando el valor del formulario con la ruta de la imagen
}
</script>

<template>
  <main class="personal-info__main">
    <form @submit.prevent="submitForm" class="personal-info__form">
      <div class="personal-info__info-title">
        <h1>Personal Information</h1>
        <p>Fields marked with * are mandatory.</p>
      </div>
      <FileInputImage
        imageProp="../../src/assets/pretty.png"
        textProp="Select your profile image:"
        @change="onFileChange"
      />

      <label for="age">Age*</label>
      <input v-model="formData.age" id="age" type="number" placeholder="Age" />

      <label for="gender">Gender*</label>
      <select
        v-model="formData.gender"
        id="gender"
        class="personal-info__form-select"
        aria-label="Default select example"
      >
        <option disabled selected value="">You identify yourself as:</option>
        <option value="femenine">Femenine</option>
        <option value="masculine">Masculine</option>
        <option value="other">Other</option>
      </select>

      <label for="hobbies">Hobbies (optional)</label>
      <input
        v-model="formData.hobbies"
        id="hobbies"
        type="text"
        placeholder="Add them with comma (,) separations"
      />

      <label for="sports">Sports (optional)</label>
      <input
        v-model="formData.sports"
        id="sports"
        type="text"
        placeholder="Add them with comma (,) separations"
      />

      <label for="about">Tell us more about yourself*</label>
      <textarea
        v-model="formData.about"
        id="about"
        placeholder="Write something about you..."
      ></textarea>
      <div class="personal-info__register-buttons">
        <Button color="purple" text="Cancel" @click="home" />
        <Button color="purple" text="Save" @click="user" />
      </div>
    </form>
  </main>
</template>

<style>
:has(.personal-info__main) body {
  background-color: #ff00e1;
}

.personal-info__main {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
}

.personal-info__main h1 {
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  color: #fff;
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
  padding-bottom: 6rem;
  width: 100%;
  gap: 1rem;
}
</style>
