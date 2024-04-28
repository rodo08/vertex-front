<script setup>
import { defineProps } from 'vue'

defineProps({
  eventTitle: String,
  eventParagraph: String,
  buttonText: String,
  handleClick: Function
})
</script>

<template>
  <aside class="dashboard-aside">
    <fieldset>
      <h2>{{ eventTitle }}</h2>
      <p class="dashboard-aside__description">
        {{ eventParagraph }}
      </p>
      <button type="button" class="dashboard-aside__create-button" @click="handleClick">
        {{ buttonText }}
      </button>
    </fieldset>
  </aside>
</template>

<style scoped>
.dashboard-aside {
  fieldset {
    display: flex;
    flex-direction: column;
    background-color: #e2fcff;
    border-radius: 0.5rem;
    border: none;
    box-shadow: 3px 3px 3px rgba(190, 179, 194, 0.5);
    padding: 1rem;
  }
  /* fieldset:hover {
    rotate: 1deg; 
  } */
}

h2 {
  font-size: 1.3rem;
  color: #b23c96;
  margin-bottom: 0;
}
button {
  color: #fff;
  background-color: #ce08a0;
  width: fit-content;
  padding: 0.5rem;
  align-self: flex-end;
  border: 1px solid #6d1158;
  border-radius: 0.2rem;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #470437;
}
</style>
