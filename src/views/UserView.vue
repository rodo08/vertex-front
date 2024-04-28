<script setup>
//import { useRouter } from 'vue-router'
// eslint-disable-next-line no-unused-vars
import NavComponent from '../components/NavComponent.vue'
import ProfileHeader from '../components/ProfileHeader.vue'

// const router = useRouter()
// const home = () => {
//   router.push('/')
// }
</script>

<template>
  <NavComponent />
  <section>
    <ProfileHeader />
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

header {
  display: flex;
  justify-content: center;
  background-color: #ff00e1;
  padding: 1rem;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1080px;
  width: 100%;
  justify-content: space-between;
  position: relative;
  img {
    cursor: pointer;
  }
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
  margin-right: 1rem;
  h2 {
    font-family: 'Nunito Sans', sans-serif;
  }
}

nav ul li:hover {
  transition: filter 0.3s ease;
  filter: invert(50%);
}

nav ul li a {
  display: flex;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  svg {
    color: #762882;
  }
}

button {
  appearance: none;
  border: none;
  background: none;
}

svg {
  color: white;
}

.toggle-menu-list {
  display: flex;
  animation: fadeIn 0.3s ease-in;
  flex-direction: column;
  position: absolute;
  padding: 0.5rem 2rem;
  right: 0.5rem;
  border: 3px solid #ef8dfe;
  border-radius: 0.5rem;
  background-color: #f7dcfb;
  z-index: 999;
  box-shadow: 3px 3px 3px rgba(93, 2, 116, 0.5);
  li a {
    color: #762882;
  }
  h2 {
    margin: 0.5rem;
    font-weight: bold;
    color: #762882;
  }

  .toggle-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
  }
}

.toggle-button:active {
  animation: fadeIn 0.3s ease-in;
  background-color: #8d4b98;
  border-radius: 0.2rem;
}
</style>
