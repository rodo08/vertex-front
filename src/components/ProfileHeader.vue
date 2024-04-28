<script setup>
import DashBoardField from './DashBoardField.vue'
import IconCalendar from './icons/IconCalendar.vue'
import IconConnections from './icons/IconConnections.vue'
import IconChats from './icons/IconChats.vue'
import IconSettings from './icons/IconSettings.vue'
</script>

<template>
  <main class="main-profile">
    <section class="profile">
      <div class="profile__image">
        <img src="../assets/pretty.png" alt="user image" />
      </div>
      <div class="profile__info">
        <h1>Calamardo</h1>
        <h2>Level 8</h2>
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
          />
        </li>
        <li class="event-list__item">
          <DashBoardField
            eventTitle="Event Participation"
            eventParagraph="Relive the excitement of past events you've attended. Browse through your attendance history, manage RSVPs, and even share your experiences."
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
}

.profile {
}

.profile__image {
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 3px solid #ff00e1;
    border-radius: 100%;
    background-color: aqua;
    box-shadow: 3px 3px 3px rgba(93, 2, 116, 0.5);
  }
}

.profile__info {
  /* Set width using calc() */
  width: calc(100% - 2rem);

  border: 2px solid #ff00e1;
  background-color: #762882;

  h1 {
    color: #fff;

    filter: drop-shadow(3px 3px 3px rgba(33, 1, 42, 0.5));
  }
  h2 {
    color: #ff00e1;
  }
}
.profile-aside {
  h2 {
    color: #ff00e1;
  }
}
ul,
li {
}

.event-list {
  .event-list__item {
  }
}
.profile-aside__dashboard {
}
.profile-aside__dashboard__icon a {
  svg {
    width: 40px;
    color: #762882;
  }
  h2 {
    margin: 0;
  }
}
</style>
