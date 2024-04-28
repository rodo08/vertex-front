<script setup>
import axios from 'axios'
import { ref } from 'vue'

const client = 'plypAcwRkABRhcMvUSR67cXgNETF8anKDtaf1x4NavFnrzdf3VbkCuxL'
const query = 'group of people'
const imageFecthed = ref(null)

const getData = async () => {
  try {
    const { data } = await axios.get(`https://api.pexels.com/v1/search?query=${query}&per_page=1`, {
      headers: {
        Authorization: client
      }
    })
    console.log(data.photos[0].src.medium)
    imageFecthed.value = data.photos[0].src.medium
    console.log(imageFecthed)
  } catch (error) {
    console.log(error)
  }
}
getData()
</script>

<template>
  <div class="grid-container">
    <img :src="imageFecthed" />
    <img :src="imageFecthed" />
    <img :src="imageFecthed" />
    <img :src="imageFecthed" />
    <img :src="imageFecthed" />
    <img :src="imageFecthed" />
    <img :src="imageFecthed" />
    <img :src="imageFecthed" />
    <img :src="imageFecthed" />
  </div>
</template>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.5rem;
  width: 100%;
}
.grid-container img {
  border-radius: 0.6rem;
  height: 100%;
  object-fit: cover;
}
</style>
