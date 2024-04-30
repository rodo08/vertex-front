<script setup>
import { defineProps } from 'vue'

defineProps({
  eventTitle: String,
  eventDate: Date,
  eventImg: String
})
//https://buffer.com/library/content/images/2023/10/free-images.jpg
</script>

<template>
  <section class="card">
    <div class="card__event">
      <fieldset>
        <div class="event__data">
          <fieldset>
            <h1 class="card__event-data__title">{{ eventTitle }}</h1>
            <p class="card__event-data__date">{{ eventDate }}</p>
          </fieldset>
        </div>
        <img :src="eventImg" alt="event picture" class="card__event-data__img" />
      </fieldset>
    </div>
  </section>
</template>

<style scoped>
.card {
  width: 100%;
}

.card__event {
  position: relative;
}

.card__event fieldset {
  background-color: #e2fcff;
  border-radius: 0.5rem;
  border: 1px solid #c8cecf;
  box-shadow: 3px 3px 3px rgba(93, 2, 116, 0.5);
  padding: 0.5rem;
}
.card__event-data__img {
  border-radius: 0.3rem;
  height: 240px;
  width: 100%;
  object-fit: cover;
}

.event__data {
  position: relative;
}

.event__data fieldset {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  width: 95%;
  left: 0.5rem;
  top: 0.5rem;
  position: absolute;
  padding-bottom: 0.5rem;
  /* display: flex;
  align-items: center;
  gap: 1rem;  
 */
}
.event__data h1,
p {
  color: #ff00e1;
  margin: 0;
}
</style>
