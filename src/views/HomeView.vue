<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->

<script setup>
//defineProps(["title", "text", "id"]);
import { useRouter } from 'vue-router'
import Button from '../components/MainButton.vue'

const router = useRouter()
const register = () => {
  router.push('/register')
}
</script>

<template>
  <main class="home-main">
    <section>
      <div>
        <img src="../assets/homeimage.png" width="400" alt="Vertex activities Moodboard" />
      </div>
      <div><img src="../assets/vertexlogopink.svg" alt="Vertex logo" /></div>
      <h1>Welcome to Vertex</h1>
    </section>
    <section class="home-buttons">
      <Button text="Login" color="purple" />
      <Button text="Register" color="pink" @click="register" />
    </section>
    <p class="footer-msg">Made with ❤️ from <strong style="margin-left: 5px">Grupo 03</strong></p>
  </main>
</template>

<style scoped>
.home-main {
  background-color: #fff;
  margin: 0 auto;
  padding: 1rem;
  h1 {
    color: #4e1057;
  }
}

main section img:first-child {
  padding-top: 1rem;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.home-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 1rem;
}

h1 {
  margin: 0;
  padding: 1rem 0;
  font-size: 1.5rem;
  font-family: 'Nunito Sans', sans-serif;
}
p {
  padding-top: 2rem;
  text-align: center;
}
strong {
  font-weight: bolder;
}
</style>
