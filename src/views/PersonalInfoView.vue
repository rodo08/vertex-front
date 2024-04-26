<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../components/MainButton.vue'
import FileInputImage from '../components/FileInputImage.vue'

const router = useRouter()
const user = () => {
  router.push('/user')
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
  <main class="personal-info">
    <form @submit.prevent="submitForm">
      <div info-title>
        <h1>Personal Information</h1>
        <p>Fields marked with * are mandatory.</p>
      </div>
      <FileInputImage
        imageProp="../../src/assets/pretty.png"
        textProp="Select your profile image..."
        @change="onFileChange"
      />

      <label for="age">Age*</label>
      <input v-model="formData.age" id="age" type="number" placeholder="Age" />

      <label for="gender">Gender*</label>
      <select
        v-model="formData.gender"
        id="gender"
        class="form-select"
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

      <Button color="purple" text="Save" @click="user" />
    </form>
  </main>
</template>

<style>
:has(.personal-info) body {
  background-color: #ff00e1;
}

.personal-info {
  p {
    margin-top: 0;
    margin-bottom: 2rem;
    color: #fff;
  }
  span {
    color: #4e1057;
  }
}

main {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2.5rem;
    color: #fff;
  }
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
  }
  button {
    align-items: center;
  }

  label {
    width: 100%;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }

  input,
  textarea,
  select {
    width: 100%;
    height: 2.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid #6c4c67;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  input,
  select {
    height: 2.5rem;
  }
  textarea {
    height: 5rem;
  }
}
button {
  align-self: center;
}
</style>
