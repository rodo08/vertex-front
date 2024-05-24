<script setup>
import { useUserStore } from '../stores/user'

const userStore = useUserStore()
</script>

<template>
  <section class="holi">
    <h1>holi {{ userStore.capsLk }} ❤</h1>
    <div>⢀⣤⣶⣶⣦⣄⡀</div>
    <div>⢀⣼⣿⣿⣿⣿⣯⣿⣿⣦</div>
    <div>⢀⣾⣷⣿⣿⣿⣿⡇⢿⣿⣿⣇</div>
    <div>⣾⣿⣿⣿⣿⡿⠟⣤⣥⠹⡝⡟</div>
    <div>⢿⣿⣾⣯⡻⣶⠀⠈⠛⢀⠞</div>
    <div>⣄⣹⣿⣿⣧⣀⣠⠖⠒⠽⡀</div>
    <div>⠛⠿⣟⣿⣿⡿⠁⠀⡀⠀⢣</div>
    <div>⣿⡿⣿⡝⠁⢀⠔⠁⠀⡜</div>
    <div>⠙⢻⠏⢠⠖⠁⠀⠀⡰⠁</div>
    <div>⣠⠤⠴⢤⠃⣰⡇⠀⠀⠀⢸⠁</div>
    <div>⢰⠁⠀⢠⠇⡜⠀⣳⠆⠀⠀⠀⠑⢄</div>
    <div>⢣⠽⠚⠈⠉⠉⠀⠀⠀⠀⠀⠀⢈⢧</div>
    <div>⡰⠁⠀⢀⣀⣀⡀⠀⠀⠀⢀⡀⠀⢸⡜</div>
    <div>⢳⡀⠉⣿⣿⣿⣿⣷⣶⣤⣾⣿⣿⣧⣦⡄</div>
    <div>⠉⠒⠻⠿⠿⠿⠛⠛⠛⠉⠉⠉⠙⠋⠁</div>
  </section>
</template>

<style scoped>
.holi {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.holi h1 {
  color: #ff00e1;
  font-size: 2rem;
  margin-bottom: 0;
}
.holi div {
  color: #ff00e1;
}
</style>
