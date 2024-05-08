<script setup>
import { ref } from 'vue'
import IconHome from './icons/IconHome.vue'
import IconProfile from './icons/IconProfile.vue'
import IconCreateEvent from './icons/IconCreateEvent.vue'
import IconMessages from './icons/IconMessages.vue'
import IconFriends from './icons/IconFriends.vue'
import IconSettings from './icons/IconSettings.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconClock from './icons/IconClock.vue'
import IconLogOut from './icons/IconLogOut.vue'
import { handleBackToHome } from '../assets/utils/utils'
import router from '@/router/routes'
import IconMenu from './icons/IconMenu.vue'
import IconClose from './icons/IconClose.vue'

const isVisible = ref(false)
const iconVisibility = ref(true)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
  iconVisibility.value = !iconVisibility.value
}
</script>

<template>
  <header>
    <nav>
      <div>
        <img
          src="../../src/assets/vertex_horizontal-01.svg"
          width="150"
          alt=""
          @click="handleBackToHome(router)"
        />
      </div>
      <div class="menu">
        <!-- <button class="toggle-button" @click="toggleMenu">✨</button> -->
        <button class="toggle-button" @click="toggleVisibility">
          <IconMenu v-if="iconVisibility" />
          <IconClose v-else />
        </button>
        <ul v-show="isVisible" class="toggle-menu-list">
          <li>
            <a href="#"
              ><IconHome />
              <h2>Home</h2></a
            >
          </li>
          <li>
            <a href="#"
              ><IconProfile />
              <h2>Profile</h2>
            </a>
          </li>
          <li>
            <a href="#"
              ><IconCreateEvent />

              <h2>Create Events</h2>
            </a>
          </li>
          <li>
            <a href="#"
              ><IconMessages />
              <h2>Messages</h2>
            </a>
          </li>
          <li>
            <a href="#"
              ><IconFriends />
              <h2>Friends</h2>
            </a>
          </li>
          <li>
            <a href="#"
              ><IconSettings />
              <h2>Settings</h2>
            </a>
          </li>
          <li>
            <a href="#"
              ><IconCalendar />

              <h2>Calendar</h2>
            </a>
          </li>
          <li>
            <a href="#"
              ><IconClock />
              <h2>My Events</h2>
            </a>
          </li>
          <li>
            <a href="#"
              ><IconLogOut />
              <h2>Logout</h2>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
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
.menu {
  display: flex;
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
  margin-top: 1.3em;
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
