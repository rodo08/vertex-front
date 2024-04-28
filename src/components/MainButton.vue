<script setup>
import { defineProps } from 'vue'

defineProps({ text: String, color: String })
</script>

<template>
  <button :class="color">{{ text }}</button>
</template>
<style scoped>
button {
  border-radius: 0.2rem;
  color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
  width: 220px;
  height: 38px;
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: rgba(177, 32, 109, 0.75);
}
.purple {
  background-color: #4e1057;
}
.pink {
  background-color: #d946ef;
}
</style>
