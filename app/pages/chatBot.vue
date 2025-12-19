<template>
  <div class="min-h-screen bg-gray-100 text-gray-800 flex">

    <!-- Mobile Overlay -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 bg-black/40 z-40 md:hidden"
      @click="sidebarOpen = false"
    ></div>

    <!-- Sidebar -->
    <aside
      class=" o fixed md:static z-50 top-0 left-0  w-72 bg-white shadow-md p-6 flex flex-col
             transform transition-transform duration-300
             md:translate-x-0"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
    >
      <!-- Close Button (Mobile) -->
      <button
        class="md:hidden self-end mb-4 cursor-pointer text-gray-500 hover:text-gray-800"
        @click="sidebarOpen = false" 
      >
        ✕
      </button>

      <!-- Profile -->
      <div class="flex flex-col items-center text-center  ">
        <div class="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
          <img src="/images/1.jpeg" class="w-full h-full object-cover" />
        </div>
        <h2 class="mt-4 text-lg font-semibold">John Doe</h2>
        <p class="text-gray-500 text-sm">john.doe@email.com</p>
        <div class="mt-12">
             <!-- Navigation -->
      <nav class=" flex-1">
        <NuxtLink
          to="/profile"
          class="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium"
        >
          <Icon name="uil:user" />
          Personal Information
        </NuxtLink>

        <NuxtLink
          to="/"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          <Icon name="uil:home" />
          Home
        </NuxtLink>

        <NuxtLink
          to="/complaint"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          <Icon name="uil:list-ul" />
          My Reports
        </NuxtLink>
      </nav>

      <!-- Logout -->
      <button
        class="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-100 w-full rounded-lg"
      >
        <Icon name="uil:signout" />
        Logout
      </button>
        </div>
      </div>

   
    </aside>

    <!-- Main Content -->
  
    <section class="flex-1 flex flex-col">

      <!-- Top Bar (Mobile) -->
      <div class="md:hidden flex cursor-pointer text-2xl justify-between items-center gap-3 bg-white shadow px-4 py-3">
        <h1 class="font-semibold text-2xl font-mono">AI Chat</h1>
        <button @click="sidebarOpen = true" class="cursor-pointer" >
          ☰
        </button>
       
      </div>

      <!-- Chat Area -->
      <div class="flex-1 p-4">
           <h1 class=" text-xk sm:text-3xl md:text-4xl py-2 mt-6 px-5 font-extrabold 
           bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
           bg-clip-text text-transparent mb-6">
  Ask anything from AI
</h1>
        <div
          class="w-full mx-auto bg-gray-200 flex flex-col border border-gray-300 rounded-xl overflow-hidden"
          :class="{'h-[500px]': isDesktop, 'h-[70vh]': !isDesktop}"
        >
          <!-- Messages -->
          <div
            class="flex-1 overflow-y-auto p-4 space-y-4"
            ref="chatContainer"
          >
            <div
              v-for="(msg, i) in messages"
              :key="i"
              :class="msg.role === 'user' ? 'text-right' : 'text-left'"
            >
              <div
                :class="msg.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800'"
                class="p-3 rounded-lg inline-block max-w-[80%] whitespace-pre-line"
              >
                {{ msg.content }}
              </div>
            </div>
          </div>

          <!-- Input -->
          <div class="border-t border-gray-300 p-4 bg-white">
            <form @submit.prevent="sendMessage" class="flex gap-3">
              <input
                v-model="userInput"
                type="text"
                placeholder="Ask your question..."
                class="flex-grow p-3 bg-slate-200 rounded-lg border outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
                :disabled="!userInput.trim()"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sidebarOpen = ref(false)

const userInput = ref('')
const messages = ref([
  { role: 'assistant', content: "Hello! I'm your AI tutor. Ask me anything 👋" }
])
const chatContainer = ref(null)

const scrollToBottom = () => {
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

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
        messages: messages.value.filter(m => m.content !== 'Typing...'),
      }),
    })

    const data = await res.json()
    messages.value.pop()

    messages.value.push({
      role: 'assistant',
      content: data.choices?.[0]?.message?.content || 'No response',
    })

    scrollToBottom()
  } catch (e) {
    messages.value.pop()
    messages.value.push({ role: 'assistant', content: 'Error occurred ❌' })
  }
}
</script>
