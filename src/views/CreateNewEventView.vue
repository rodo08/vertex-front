<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../components/MainButton.vue'
import FileInputImage from '../components/FileInputImage.vue'
import { handleBackToHome, handleGoToUser } from '@/assets/utils/utils.js'

const router = useRouter()

const formData = ref({
  title: '',
  date: '',
  type: '',
  location: '',
  collaborators: '',
  description: ''
})

const submitForm = () => {
  console.log(formData.value)
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
        <h1>Create New Event</h1>
        <p>
          Create a new event and capture your moments! Enter the details in the form below and bring
          your next unforgettable experience to life. <br />Fields marked with * are mandatory.
        </p>
      </div>
      <FileInputImage
        imageProp="../../src/assets/pretty.png"
        textProp="Select your Event  main image:"
        @change="onFileChange"
      />

      <label for="title">Event Title</label>
      <input v-model="formData.title" id="title" type="text" placeholder="Event Title" />

      <label for="date">Event Schedule</label>
      <input v-model="formData.date" id="date" type="date" placeholder="Event Schedule" />

      <label for="type">Event type*</label>
      <select
        v-model="formData.type"
        id="type"
        class="personal-info__form-select"
        aria-label="Default select example"
      >
        <option value="" disabled selected>Select event type</option>
        <option value="festival">Festival</option>
        <option value="party">Party</option>
        <option value="meeting">Meeting</option>
        <option value="other">Other</option>
      </select>

      <label for="location">Location*</label>
      <input
        v-model="formData.location"
        id="location"
        type="text"
        placeholder="Specify the event location"
      />

      <label for="collaborators">Collaborators (optional)</label>
      <input
        v-model="formData.collaborators"
        id="collaborators"
        type="text"
        placeholder="Add collaborators with comma (,) separations"
      />

      <label for="description">Event description*</label>
      <textarea
        v-model="formData.description"
        id="description"
        placeholder="Write something about you..."
      ></textarea>
      <div class="personal-info__register-buttons">
        <Button color="purple" text="Cancel" @click="handleBackToHome(router)" />
        <Button color="purple" text="Save" @click="handleGoToUser(router)" />
      </div>
    </form>
  </main>
</template>

<style>
:has(.personal-info__main) body {
  /* background-color: #ff00e1; */
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
  color: #ff00e1;
}
.personal-info__main span {
  color: #4e1057;
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
.personal-info__form label {
  color: #ff00e1;
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
