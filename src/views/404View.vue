<script setup>
import Button from '../components/MainButton.vue'
import { handleBackToHome } from '../assets/utils/utils.js'
import router from '@/router/routes.js'
</script>
<template>
  <section class="error-404">
    <h1>ERROR 4❤4</h1>

    <div>⢀⣤⣶⣶⣦⣄⡀</div>
    <div>⢀⣼⣿⣿⣿⣿⣯⣿⣿⣦</div>
    <div>⢀⣾⣷⣿⣿⣿⣿⡇⢿⣿⣿⣇</div>
    <div>⣾⣿⣿⣿⣿⡿⠟⣤⣥⠹⡝⡟</div>
    <div>⢿⣿⣾⣯⡻⣶⠀⠈⠛⢀⠞</div>
    <div>⣄⣹⣿⣿⣧⣀⣠⠖⠒⠽⡀</div>
    <div>⠛⠿⣟⣿⣿⡿⠁⠀⡀⠀ ⢣</div>
    <div>⣿⡿⣿⡝⠁⢀⠔⠁⠀ ⡜</div>
    <div>⠙⢻⠏⢠⠖⠁⠀⠀ ⡰⠁</div>
    <div>⣠⠤⠴⢤⠃⣰⡇⠀⠀⠀⢸⠁</div>
    <div>⢰⠁⠀⢠⠇⡜⠀⣳⠆⠀⠀⠀⠑⢄</div>
    <div>⢣⠽⠚⠈⠉⠉⠀⠀⠀⠀⠀⠀ ⢈⢧</div>
    <div>⡰⠁⠀⢀⣀⣀⡀⠀⠀⠀⢀⡀⠀⢸⡜</div>
    <div>⢳⡀⠉⣿⣿⣿⣿⣷⣶⣤⣾⣿⣿⣧⣦⡄</div>
    <div>⠉⠒⠻⠿⠿⠿⠛⠛⠛⠉⠉⠉⠙⠋⠁</div>
    <p>Lo sentimos, la página que estás intentando ver no existe.</p>
    <Button text="volver" color="pink" @click="handleBackToHome(router)" />
  </section>
</template>

<style scoped>
.error-404 {
  text-align: center;
}

.error-404 div {
  color: #ff00e1;
}
.error-404 h1 {
  font-size: 3rem;
  color: #ff00e1;
}

.error-404 p {
  font-size: 1.5rem;
  margin: 20px 0;
}

.error-404 a {
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.error-404 a:hover {
  color: #0056b3;
}
</style>
