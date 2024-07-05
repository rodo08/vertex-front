<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { query, client } from '../assets/utils/utils.js'

const randomNumber = Math.ceil(Math.random() * (`${query.length}` - 1))

const imageSrc1 = ref(null)
const imageSrc2 = ref(null)
const imageSrc3 = ref(null)
const imageSrc4 = ref(null)
const imageSrc5 = ref(null)

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://api.pexels.com/v1/search?query=${query[randomNumber]}&per_page=5`,
      {
        headers: {
          Authorization: client
        }
      }
    )
    imageSrc1.value = data.photos[0].src.landscape
    imageSrc2.value = data.photos[1].src.landscape
    imageSrc3.value = data.photos[2].src.landscape
    imageSrc4.value = data.photos[3].src.landscape
    imageSrc5.value = data.photos[4].src.landscape
  } catch (error) {
    console.log(error)
  }
}
getData()
</script>

<template>
  <div class="grid-container">
    <img :src="imageSrc1" class="grid-cointainer__item-1" />
    <img :src="imageSrc2" class="grid-cointainer__item-2" />
    <img :src="imageSrc3" class="grid-cointainer__item-3" />
    <img :src="imageSrc4" class="grid-cointainer__item-4" />
    <img :src="imageSrc5" class="grid-cointainer__item-5" />
  </div>
</template>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.5rem;
  width: 100%;
}
.grid-cointainer__item-1 {
  grid-column: 1 / 3;
}
.grid-cointainer__item-3 {
  grid-row: span 2;
}
.grid-cointainer__item-5 {
  grid-column: 2 / 4;
}

.grid-container img {
  border-radius: 0.6rem;
  height: 100%;
  object-fit: cover;
}
</style>
