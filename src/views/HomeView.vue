<script setup>
import { useRouter } from 'vue-router'
import Button from '../components/MainButton.vue'
import ImageGrid from '../components/ImageGrid.vue'
// import { useCounterStore } from '../stores/counter'
// import { storeToRefs } from 'pinia'

// const useCounter = useCounterStore()
// const { increment } = useCounter
// const { count, double } = storeToRefs(useCounter)

const router = useRouter()
const register = () => {
  router.push('/register')
}

const login = () => {
  router.push('/login')
}
</script>

<template>
  <!-- EJEMPLO DE PINIA -->
  <!-- <h1>home counter: {{ count }}</h1>
  <h1>home double: {{ double }}</h1>
  <button @click="increment">Increment</button> -->
  <!-- EJEMPLO DE PINIA -->
  <main class="home__main">
    <section class="home__section">
      <div class="home__section__image-wrapper">
        <ImageGrid />
      </div>
      <div class="home__section__content">
        <h1>Welcome to Vertex</h1>
        <img src="../assets/vertexlogopink.svg" width="150" alt="Vertex logo" />
        <p>
          Empower Your Events: Create, Manage, and Deliver Exceptional Experiences. Take control of
          your event planning and management with our intuitive, all-in-one web app.
        </p>
        <div class="home__buttons">
          <Button text="Login" color="purple" @click="login" />
          <Button text="Register" color="pink" @click="register" />
        </div>
        <div class="home__legal-disclaim">
          <p>
            By clicking on the <a href="">Register</a> button, you agree to the
            <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>, including
            <a href="">Cookie Use</a> .
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home__main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home__section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  max-width: 1080px;
  padding-top: 8rem;
  justify-items: center;
}

.home__section__image-wrapper {
  display: flex;
  justify-content: center;
}
.home__section__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.home__section__content h1 {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 2rem;
  color: #4e1057;
}
.home__section__content p {
  font-family: 'Nunito Sans', sans-serif;
  text-align: center;
  color: #4e1057;
  width: 95%;
}
.home__buttons {
  display: flex;
  gap: 1rem;
  padding: 2.5rem 0 0.5rem 0;
}
.home__legal-disclaim p {
  font-size: 0.8rem;
  margin-bottom: 0;
  text-align: center;
  width: 90%;
}
.home__legal-disclaim {
  display: flex;
  justify-content: center;
}

.home__legal-disclaim a {
  font-weight: bolder;
  transition: color 0.3s ease-in;
}
.home__legal-disclaim a:hover {
  color: #ff00e1;
}
</style>
