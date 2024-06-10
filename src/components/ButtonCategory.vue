<script setup>
import { defineProps } from 'vue'

defineProps({
  category: String,
  color: String,
  iconComponent: {
    type: Object
  }
})
</script>

<template>
  <button class="category-button" :style="{ backgroundColor: color }">
    <component :is="iconComponent" />
    <h1>{{ category }}</h1>
  </button>
</template>

<style scoped>
.category-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: fit-content;
  gap: 0.2rem;
  padding: 0.5rem 1.5rem;
  border: 5px solid rgba(255, 255, 255, 0.5);
  border-radius: 25px;
  transition: box-shadow 0.3s ease-in;
  transform: rotateY(0deg);
  transition: transform 0.3s ease;
}

.category-button:hover {
  transform: rotateY(45deg);
}

.category-button svg {
  width: 20px;
}

h1 {
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bolder;
  font-size: 1rem;
  margin: 0.5rem;
}

.category-button svg,
h1 {
  color: #ffffff;
}
</style>
