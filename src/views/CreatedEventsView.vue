<script setup>
import { ref } from 'vue'
import axios from 'axios'
import NavComponent from '../components/NavComponent.vue'
import EventCard from '../components/EventCard.vue'
import Button from '../components/MainButton.vue'
import ButtonCategory from '../components/ButtonCategory.vue'

const eventValue = ref('')
//const eventImgUrl = ref('')
//const eventTitleUrl = ref('')
//const eventDate = ref('')

const getData = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3001/data`)
    console.log(data)
    eventValue.value = data
  } catch (error) {
    console.log(error)
  }
}
getData()
//form - search
const search = ref('')

const submitForm = () => {
  const formData = {
    search: search.value
  }
  console.log('Form data:', formData)
}

const handleEventCard = () => {
  console.log('test')
}
</script>

<template>
  <NavComponent />
  <section class="search-container">
    <form @submit.prevent="submitForm" class="search-query">
      <input
        v-model="search"
        id="search"
        type="text"
        placeholder="Search between events"
        class="search-query__input"
      />
      <Button text="Search" color="purple" @click="personalInfo" class="search-query__button" />
    </form>
  </section>
  <section class="subjects">
    <ul class="subjects__btn-group">
      <li>
        <a href=""><ButtonCategory /></a>
      </li>
      <li>
        <button><a href="">Music</a></button>
      </li>
      <li>
        <button><a href="">Sports</a></button>
      </li>
      <button><a href="">Online</a></button>
    </ul>
  </section>
  <section class="events">
    <ul class="events__cards">
      <li
        v-for="event in eventValue"
        v-bind:key="event.id"
        class="events__cards-item"
        @click="handleEventCard"
      >
        <EventCard
          :eventTitle="event.eventDescription"
          :eventDate="event.eventDate"
          :eventImg="event.eventProfilePhoto"
        />
      </li>
    </ul>
  </section>
</template>
<style scoped>
.search-container {
  max-width: 1080px;
  padding-top: 2rem;
  display: flex;
  margin: 0 auto;
}

.search-query {
  display: flex;
  width: 100%;
  gap: 1rem;
}
.subjects {
  max-width: 1080px;
  margin: 0 auto;
}
.subjects__btn-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.events {
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 2rem;
}

.events__cards {
  display: grid;
  max-width: 1080px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding-bottom: 2rem;
}
.events__cards-item {
  cursor: pointer;
}
</style>
