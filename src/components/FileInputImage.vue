<script setup>
import { defineProps, ref } from 'vue'

import { defineEmits } from 'vue'

const emits = defineEmits(['change'])

const { imageProp, textProp } = defineProps({
  imageProp: {
    type: String,
    required: true
  },
  textProp: {
    type: String,
    required: true
  }
})

const fileInput = ref(null)
const imageSrc = ref(imageProp)

const openFileInput = () => {
  fileInput.value.click()
}

const onFileChange = (event) => {
  emits('change')
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imageSrc.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <span>{{ textProp }}</span>

  <input ref="fileInput" type="file" style="display: none" @change="onFileChange" />
  <img :src="imageSrc" alt="Uploaded Image" @click="openFileInput" />
</template>

<style scoped>
img {
  display: block;
  cursor: pointer;
  align-self: center;
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 1rem 0;
  border-radius: 50%;
  border: 5px solid #4e1057;
}
span {
  text-align: center;
  font-weight: bolder;
  color: #fff;
  font-size: 1rem;
}
</style>
