<script setup>
import DashBoardField from './DashBoardField.vue'
</script>

<template>
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
    <h2>Your DashBoard</h2>

    <ul class="event-list">
      <li class="event-list__item">
        <DashBoardField
          eventTitle="Event Maker"
          eventParagraph="Share the details of your event and get people excited! Fill out the form below to promote
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
  </aside>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1rem;
  width: 100%;
}

.profile__image {
  padding: 1.5rem 0;
  z-index: 1;
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 1rem;
  margin: 0 1rem;
  height: 12rem;
  /* Set width using calc() */
  width: calc(100% - 2rem);
  margin-top: 8rem;
  border: 2px solid #ff00e1;
  background-color: #762882;
  border-radius: 0.5rem;
  position: absolute;

  h1 {
    color: #fff;
    margin: 1rem 1rem 0.2rem 1rem;
    font-size: 2rem;
    filter: drop-shadow(3px 3px 3px rgba(33, 1, 42, 0.5));
  }
  h2 {
    color: #ff00e1;
    margin: 0;
    font-size: 1.2rem;
  }
}
.profile-aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  width: auto;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    color: #ff00e1;
  }

  ul,
  li {
    padding: 0;
    list-style: none;
  }
  .event-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .event-list__item {
    display: flex;
    justify-content: center;
  }
}
</style>
