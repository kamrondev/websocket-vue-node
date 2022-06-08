<script setup>
import { onMounted, ref } from 'vue'

// COMPONENTS
import TheLogo from './components/TheLogo.vue'
import TheMessageList from './components/TheMessageList.vue'

// SOCKET.IO
import io from 'socket.io-client'
const socket = io('http://localhost:8080')

// MESSAGE
const message = ref('')
const chat = ref([])
const sendMessage = () => {
  socket.emit('message', { message: message.value })
  message.value = ''
}
onMounted(() => {
  socket.on('message', ({ message }) => {
    chat.value.push(message)
  })
})
</script>

<template>
  <div class="container min-h-screen p-4 mx-auto overflow-hidden">
    <div class="space-y-4">
      <TheLogo />
      <form class="flex" @submit.prevent="sendMessage">
        <input
          type="text"
          v-model="message"
          class="w-full px-4 py-2 border outline-none focus:border-slate-700"
          placeholder="Message..."
          required
        />
        <button type="submit" class="px-4 py-2 text-white bg-slate-700">
          Send
        </button>
      </form>
      <TheMessageList :chat="chat" :message="message" />
    </div>
  </div>
</template>
