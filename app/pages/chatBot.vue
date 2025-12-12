<template>
  <div class="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
    <!-- Header -->
    <section class="container mx-auto px-4 py-6 max-w-4xl">
      <h2 class="text-3xl sm:text-4xl font-bold mb-4 mt-8 text-center">Ask Anything from AI</h2>
    </section>

    <!-- Chat Area -->
    <section class="bg-gray-100 flex-1 rounded-t-3xl py-6 px-4  mx-auto w-full">
      <div
        class="w-full mx-auto bg-gray-200 flex flex-col border border-gray-300 rounded-xl overflow-hidden"
        :class="{'h-[500px]': isDesktop, 'h-[70vh]': !isDesktop}"
      >
        <div
          class="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
          ref="chatContainer"
          style="scroll-behavior: smooth;"
        >
          <div
            v-for="(msg, i) in messages"
            :key="i"
            :class="msg.role === 'user' ? 'text-right' : 'text-left'"
          >
            <div
              :class="msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'"
              class="p-3 rounded-lg inline-block max-w-[80%] whitespace-pre-line break-words"
            >
              <p>{{ msg.content }}</p>
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="border-t border-gray-300 p-4 bg-white">
          <form @submit.prevent="sendMessage" class="flex flex-col sm:flex-row items-center gap-3">
            <input
              v-model="userInput"
              type="text"
              placeholder="Ask your question..."
              class="flex-grow p-3 bg-slate-200 rounded-lg border border-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-400 transition"
              autocomplete="off"
              aria-label="Type your question"
            />
            <button
              type="submit"
              class="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition"
              :disabled="!userInput.trim()"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const userInput = ref('')
const messages = ref([{ role: 'assistant', content: "Hello! I'm your AI tutor. Ask me anything. 👋" }])
const chatContainer = ref(null)

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

// Responsive height control for chat container
const isDesktop = ref(true)
const checkScreenSize = () => {
  isDesktop.value = window.innerWidth >= 768
}
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

const config = useRuntimeConfig()

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  const question = userInput.value
  messages.value.push({ role: 'user', content: question })
  userInput.value = ''
  messages.value.push({ role: 'assistant', content: 'Typing...' })
  scrollToBottom()

  try {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.public.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-4-scout-17b-16e-instruct',
        messages: [
          { role: 'system', content: 'You are a helpful AI tutor.' },
          ...messages.value.filter((m) => m.role !== 'assistant' || m.content !== 'Typing...'),
        ],
      }),
    })

    const data = await res.json()

    // Remove "Typing..." placeholder
    messages.value.pop()

    // Add real AI response
    const reply = data.choices?.[0]?.message?.content || '⚠️ No response from AI.'
    messages.value.push({
      role: 'assistant',
      content: reply,
    })

    scrollToBottom()
  } catch (error) {
    messages.value.pop()
    messages.value.push({ role: 'assistant', content: '❌ Error getting response. Try again.' })
    console.error('Groq API Error:', error)
  }
}
</script>

<style scoped>
/* Scrollbar styling for modern browsers */
.scrollbar-thin {
  scrollbar-width: thin;
  scrollbar-color: #9ca3af #e5e7eb;
}
.scrollbar-thumb-gray-400::-webkit-scrollbar-thumb {
  background-color: #9ca3af;
  border-radius: 6px;
}
.scrollbar-track-gray-200::-webkit-scrollbar-track {
  background-color: #e5e7eb;
  border-radius: 6px;
}
</style>
