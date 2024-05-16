<script setup>
import { ref } from 'vue'
//import axios from 'axios'
import NavComponent from '../components/NavComponent.vue'
import EventCard from '../components/EventCard.vue'
import Button from '../components/MainButton.vue'
import ButtonCategory from '../components/ButtonCategory.vue'
import IconMovie from '../components/icons/IconMovie.vue'
import IconMusic from '../components/icons/IconMusic.vue'
import IconSports from '../components/icons/IconSports.vue'
import IconOnline from '../components/icons/IconOnline.vue'
import IconFriends from '../components/icons/IconFriends.vue'
import IconSupport from '../components/icons/IconSupport.vue'
import { handleGoToUser, getData } from '@/assets/utils/utils.js'
import router from '@/router/routes'

const eventValue = ref('')
// const getData = async () => {
//   try {
//     const { data } = await axios.get(`http://localhost:3001/dataPrev`)
//     console.log(data)

//     eventValue.value = data
//   } catch (error) {
//     console.log(error)
//   }
// }
// getData()
;(async () => {
  try {
    const eventsData = await getData('http://localhost:3001/events_history')
    console.log(eventsData)
    // Manipular los datos de eventos
    eventValue.value = eventsData
  } catch (error) {
    console.error(error)
    // Manejar el error
  }
})()
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
      <Button text="Search" color="purple" class="search-query__button" />
    </form>
  </section>
  <section class="subjects">
    <ul class="subjects__btn-group">
      <li>
        <a href=""><ButtonCategory category="Movies" color="red" :iconComponent="IconMovie" /></a>
      </li>
      <li>
        <a href=""><ButtonCategory category="Music" color="green" :iconComponent="IconMusic" /></a>
      </li>
      <li>
        <a href=""
          ><ButtonCategory category="Sports" color="orange" :iconComponent="IconSports"
        /></a>
      </li>
      <li>
        <a href=""><ButtonCategory category="Online" color="blue" :iconComponent="IconOnline" /></a>
      </li>
      <li>
        <a href=""
          ><ButtonCategory category="Friends" color="magenta" :iconComponent="IconFriends"
        /></a>
      </li>
      <li>
        <a href=""
          ><ButtonCategory category="Support" color="purple" :iconComponent="IconSupport"
        /></a>
      </li>
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
          :eventTitle="event.titulo"
          :eventDate="event.fechaEvento"
          :event-time="event.horaEvento"
          :eventImg="event.fotoEventoPerfil"
        />
      </li>
    </ul>
    <div class="events__button-back">
      <Button text="Volver" color="purple" @click="handleGoToUser(router)" />
    </div>
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
.events__button-back {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 4rem;
}
</style>
