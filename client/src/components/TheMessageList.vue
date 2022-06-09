<script setup>
const { chat } = defineProps({
  chat: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="w-full p-4 overflow-x-hidden overflow-y-auto border h-96">
    <div v-if="chat.length === 0">No message...</div>
    <ul class="space-y-2" v-else>
      <li v-for="(message, index) in chat">- {{ message }}</li>
    </ul>
  </div>
</template>
