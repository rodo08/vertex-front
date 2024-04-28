<script setup>
import { ref } from 'vue'
import NavComponent from '../components/NavComponent.vue'
import EventCard from '../components/EventCard.vue'
import Button from '../components/MainButton.vue'

const search = ref('')

const submitForm = () => {
  const formData = {
    search: search.value
  }
  console.log('Form data:', formData)
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
        <button><a href="">Films</a></button>
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
    <div class="events__cards">
      <EventCard
        eventTitle="event vertex"
        eventDate="10/12/2024"
        eventImg="https://buffer.com/library/content/images/2023/10/free-images.jpg"
      />
      <EventCard />
      <EventCard />
      <EventCard />
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
}
</style>
