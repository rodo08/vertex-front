<script setup>
import axios from 'axios'
import NavComponent from '../components/NavComponent.vue'
import UserProfileComponent from '../components/UserProfileComponent.vue'
import { ref } from 'vue'

//const keys = Object.keys(localStorage)
const userData = JSON.parse(localStorage.getItem('userData'))
const username = userData.username
const userId = userData.id
const token = userData.token
const getUserURL = `https://vertex-backend-8lly.onrender.com/user/${userId}`
const points = userData.events.length * 5
const userProfileImage = ref(
  'https://cdn.dribbble.com/users/2194760/screenshots/5629242/media/89f6398f30fedb7c04a6d290cec2dedb.gif'
)

const userInfo = async () => {
  try {
    const getUserById = await axios.get(getUserURL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(getUserById)
    userProfileImage.value = getUserById.data.profileImg
    //console.log('Form submitted with data:', getUserInfo.value, getUserInfo.value.data)
  } catch (error) {
    console.log(error)
  }
}
userInfo()
</script>

<template>
  <NavComponent />
  <section>
    <UserProfileComponent :img="userProfileImage" :user="username" :points="points" />
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
