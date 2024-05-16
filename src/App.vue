<script setup>
import { RouterView } from 'vue-router'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <main class="main-app">
    <div>
      <RouterView />
    </div>
    <div>
      <FooterComponent />
    </div>
  </main>
</template>

<style scoped>
.main-app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100vh;
}

p {
  text-align: center;
}
</style>
