<template>
  <NavComponent />

  <div class="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 pt-16">
    <main class="container mx-auto py-8 px-4 md:px-0">
      <section class="bg-purple-700 text-white p-6 rounded-lg shadow-lg">
        <div class="flex flex-col items-center md:flex-row md:items-start md:justify-center">
          <img
            src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Profile Image"
            class="w-24 h-24 rounded-full border-4 border-pink-500 mb-4 md:mb-0 md:mr-4"
          />
          <div class="text-center md:text-left">
            <h2 class="text-2xl font-bold">Event Title</h2>
            <p class="text-lg">Date: 2023-10-01</p>
            <p class="text-lg">Time: 10:00 AM</p>
            <p class="text-lg">Location: Event Location</p>
          </div>
        </div>
      </section>

      <section class="mt-6">
        <h3 class="text-xl font-bold mb-2">Description</h3>
        <p class="bg-light-blue-100 p-4 rounded-lg shadow-lg">
          This is the event description. It provides details about the event, what to expect, and
          any other relevant information.
        </p>
      </section>

      <section class="mt-6">
        <h3 class="text-xl font-bold mb-2">Gallery</h3>
        <div class="gallery grid grid-cols-2 gap-4 md:grid-cols-3">
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image 1"
            class="rounded-lg shadow-lg gallery-image"
          />
          <img
            src="https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image 2"
            class="rounded-lg shadow-lg gallery-image"
          />
          <img
            src="https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image 3"
            class="rounded-lg shadow-lg gallery-image"
          />
        </div>
      </section>

      <section class="mt-6">
        <h3 class="text-xl font-bold mb-2">Event Score</h3>
        <p class="bg-light-blue-100 p-4 rounded-lg shadow-lg">Event Score: 4.5/5</p>
      </section>

      <section class="mt-6">
        <h3 class="text-xl font-bold mb-2">User Information</h3>
        <div class="bg-light-blue-100 p-4 rounded-lg shadow-lg">
          <p>User Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
        </div>
      </section>
    </main>

    <footer class="bg-pink-600 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2023 vrtx. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue'
</script>

<style scoped>
.bg-light-blue-100 {
  background-color: #e0f7fa;
}

.bg-pink-600 {
  background-color: #e91e63;
}

.bg-purple-700 {
  background-color: #6a1b9a;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.pt-16 {
  padding-top: 4rem;
}

.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (min-width: 768px) {
  .container {
    padding-left: 0;
    padding-right: 0;
  }

  .gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
