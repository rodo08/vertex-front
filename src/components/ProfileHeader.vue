<script setup>
import { useRouter } from 'vue-router'
import DashBoardField from './DashBoardField.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconConnections from './icons/IconConnections.vue'
import IconChats from './icons/IconChats.vue'
import IconSettings from './icons/IconSettings.vue'

const router = useRouter()
const createdEvents = () => {
  router.push('/created-events')
  console.log('test')
}
</script>

<template>
  <main class="main-profile">
    <section class="profile">
      <div class="profile__image">
        <img src="../assets/pretty.png" alt="user image" />
      </div>
      <div class="profile__info">
        <fieldset>
          <h1>Calamardo</h1>
          <h2>Level 8</h2>
        </fieldset>
      </div>
    </section>
    <aside class="profile-aside">
      <ul class="event-list">
        <li class="event-list__item">
          <DashBoardField
            eventTitle="Event Maker"
            eventParagraph="Share with everyone the details of your event and get people excited! Fill out the form to promote
        your upcoming event."
            buttonText="Make an Event"
          />
        </li>
        <li class="event-list__item">
          <DashBoardField
            eventTitle="Created Events"
            eventParagraph="Review and manage your previously created events. You can edit details, promote them further, or even delete them."
            buttonText="Check your Events"
            :handleClick="createdEvents"
          />
        </li>
        <li class="event-list__item">
          <DashBoardField
            eventTitle="Event Participation"
            eventParagraph="Relive past events. Browse through your attendance history, manage RSVPs, and even share your experiences."
            buttonText="Attended Events"
          />
        </li>
        <li class="event-list__item">
          <MainButton text="Event participation" color="pink" />
        </li>
      </ul>
      <ul class="profile-aside__dashboard">
        <li class="profile-aside__dashboard__icon">
          <a href=""
            ><IconCalendar />
            <h2>Calendar</h2></a
          >
        </li>
        <li class="profile-aside__dashboard__icon">
          <a href=""
            ><IconConnections />
            <h2>Network</h2></a
          >
        </li>
        <li class="profile-aside__dashboard__icon">
          <a href=""
            ><IconChats />
            <h2>Chats</h2></a
          >
        </li>
        <li class="profile-aside__dashboard__icon">
          <a href=""
            ><IconSettings />
            <h2>Settings</h2></a
          >
        </li>
      </ul>
    </aside>
  </main>
</template>

<style scoped>
.main-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
}

.profile {
  position: relative;
  width: 100%;
}

.profile__image {
  position: absolute;
  padding-top: 2rem;
  left: calc(15% - 100px);
}
.profile__image img {
  width: 200px;
  height: 200px;
  border: 3px solid #ff00e1;
  border-radius: 50%;
  object-fit: cover;
  background-color: aquamarine;
  box-shadow: 3px 3px 3px rgba(93, 2, 116, 0.5);
}
.profile__info fieldset {
  display: flex;
  align-items: center;
  margin-top: 7rem;
}

.profile__info h1 {
  color: #fff;
  font-size: 3rem;
  margin: 0 0 0 2rem;
  filter: drop-shadow(3px 3px 3px rgba(93, 2, 116, 0.5));
}
.profile__info h2 {
  color: #ff00e1;
  font-size: 2rem;
  margin: 0;
}

.profile__info fieldset {
  background-color: #762882;
  border: 3px solid #ff00e1;
  border-radius: 0.5rem;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
}

.event-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding-top: 2rem;
}
.profile-aside__dashboard {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 4rem;
}
.profile-aside__dashboard__icon a {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.profile-aside__dashboard__icon h2 {
  font-size: 1.5rem;
  color: #ff00e1;
}

.profile-aside__dashboard__icon a svg {
  color: #762882;
  height: 50px;
  width: auto;
}
</style>
