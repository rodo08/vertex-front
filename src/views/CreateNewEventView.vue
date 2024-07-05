<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../components/MainButton.vue'
import { handleGoToUser, apiUrl } from '@/assets/utils/utils.js'

const router = useRouter()
const userData = JSON.parse(localStorage.getItem('userData'))

const token = userData.token
const userId = userData.id

const createEventURL = `${apiUrl}/user/${userId}/events`

const formData = ref({
  title: '',
  date: '',
  type: '',
  location: '',
  collaborators: '',
  description: ''
})

const submitForm = async () => {
  try {
    const response = await axios.post(createEventURL, formData.value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (response.status === 201) {
      alert('Event created successfully!')
      router.push(`/user`)
    } else {
      console.error('Unexpected response status:', response.status)
    }
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <main class="event-info__main">
    <form @submit.prevent="submitForm" class="event-info__form">
      <div class="event-info__info-title">
        <h1>Create New Event</h1>
        <p>
          <strong>Create a new event and capture your moments!</strong> <br />
          Enter the details in the form below and bring your next unforgettable experience to life.
        </p>
      </div>

      <label for="profileImg">Event image URL</label>
      <input
        v-model="formData.eventImg"
        id="profileImg"
        type="text"
        placeholder="Add your link URL"
      />

      <label for="title">Event Title</label>
      <input v-model="formData.eventTitle" id="title" type="text" placeholder="Event Title" />

      <label for="date">Event Schedule</label>
      <input v-model="formData.eventDate" id="date" type="date" placeholder="Event Schedule" />

      <label for="type">Event type</label>
      <select v-model="formData.eventType" id="type" class="event-info__form-select">
        <option value="" disabled selected>Select event type</option>
        <option value="festival">Festival</option>
        <option value="party">Party</option>
        <option value="meeting">Meeting</option>
        <option value="other">Other</option>
      </select>

      <label for="location">Location</label>
      <input
        v-model="formData.eventLocation"
        id="location"
        type="text"
        placeholder="Specify the event location"
      />

      <label for="collaborators">Collaborators (optional)</label>
      <input
        v-model="formData.eventColaborators"
        id="collaborators"
        type="text"
        placeholder="Add collaborators with comma (,) separations"
      />

      <label for="description">Event description</label>
      <textarea
        v-model="formData.eventDescription"
        id="description"
        placeholder="Write something about you..."
      ></textarea>
      <div class="event-info__register-buttons">
        <Button color="purple" text="Cancel" @click="handleGoToUser(router)" />
        <Button color="purple" text="Save" />
      </div>
    </form>
  </main>
</template>

<style>
.event-info__main {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
}

.event-info__main h1 {
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  color: #ff00e1;
}

.event-info__main span {
  color: #4e1057;
}

.event-info__info-title {
  display: flex;
  flex-direction: column;
}

.event-info__info-title p {
  margin: 0;
  padding: 0 0 4rem 0;
}

.event-info__form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
}

.event-info__form label {
  padding: 0 0 0.5rem 1rem;
  color: #4e1057;
}

.event-info__register-buttons {
  display: flex;
  padding-bottom: 6rem;
  width: 100%;
  gap: 1rem;
}
</style>
