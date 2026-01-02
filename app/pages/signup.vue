<template>
  <div class="parent flex login justify-center px-2 items-center">
    <form class="form w-full relative sm:w-[550px] rounded-md space-y-4 py-6 px-3 md:p-10 bg-white/30 backdrop-blur-lg">
      <h3 class="text-3xl font-bold">Sign Up</h3>

      <!-- Name Field -->
      <div class="flex items-center border-b-2 border-emerald-200 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572"
          class="w-7 h-7 mr-3">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 9a3 3 0 11-6 0 3 3 0 016 0zM2.25 21v-2.25a4.5 4.5 0 014.5-4.5h10.5a4.5 4.5 0 014.5 4.5V21" />
        </svg>
        <input v-model="name" type="text" placeholder="Full Name"
          class="w-[95%] py-4 text-slate-700 placeholder-[#93C572] bg-transparent focus:outline-none text-xl" />
      </div>

      <!-- Email Field -->
      <div class="flex items-center border-b-2 border-emerald-200 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572"
          class="w-7 h-7 mr-3">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 12.75 2.25 6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25" />
        </svg>
        <input v-model="email" type="email" placeholder="Email"
          class="w-[95%] py-4 text-slate-700 placeholder-[#93C572] bg-transparent focus:outline-none text-xl" />
      </div>

      <!-- Password Field -->
      <div
        class="flex items-center border-b-2 border-emerald-200 w-full focus-within:border-emerald-400 transition relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572"
          class="w-7 h-7 mr-3">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m12 0h-15a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5z" />
        </svg>
        <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Password"
          class="w-[95%] py-3 text-slate-800 placeholder-[#93C572] bg-transparent focus:outline-none text-xl" />

        <svg v-if="!showPassword" @click="showPassword = true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572" class="w-6 h-6 absolute right-0 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
          <circle cx="12" cy="12" r="3" stroke="#93C572" stroke-width="1.5" />
        </svg>
        <svg v-if="showPassword" @click="showPassword = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="#93C572" stroke-width="1.5" class="w-6 h-6 absolute right-0 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 3l18 18M10.584 10.587A3 3 0 0012 15a3 3 0 001.414-.414M9.879 4.606A11.42 11.42 0 0112 4.5C18 4.5 21.75 12 21.75 12c-.621 1.24-1.38 2.332-2.25 3.24M6.75 6.751A11.451 11.451 0 002.25 12s3.75 7.5 9.75 7.5c1.883 0 3.57-.572 5.053-1.443" />
        </svg>
      </div>
      <!-- confirm Pass  -->

      <div
        class="flex items-center border-b-2 border-emerald-200 w-full focus-within:border-emerald-400 transition relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572"
          class="w-7 h-7 mr-3">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m12 0h-15a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5z" />
        </svg>
        <input :type="showPassword ? 'text' : 'password'" v-model="confirmPassword" placeholder="confirm password"
          class="w-[95%] py-3 text-slate-800 placeholder-[#93C572] bg-transparent focus:outline-none text-xl" />

        <svg v-if="!showPassword" @click="showPassword = true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572" class="w-6 h-6 absolute right-0 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
          <circle cx="12" cy="12" r="3" stroke="#93C572" stroke-width="1.5" />
        </svg>
        <svg v-if="showPassword" @click="showPassword = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="none" stroke="#93C572" stroke-width="1.5" class="w-6 h-6 absolute right-0 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 3l18 18M10.584 10.587A3 3 0 0012 15a3 3 0 001.414-.414M9.879 4.606A11.42 11.42 0 0112 4.5C18 4.5 21.75 12 21.75 12c-.621 1.24-1.38 2.332-2.25 3.24M6.75 6.751A11.451 11.451 0 002.25 12s3.75 7.5 9.75 7.5c1.883 0 3.57-.572 5.053-1.443" />
        </svg>
      </div>

      <button type="button" @click="signup" :disabled="loading"
        class="w-full flex h-12 items-center justify-center hover:bg-green-500 transition-all my-16 py-2.5 bg-green-600 text-white text-[18px] font-semibold rounded-md">
        <span v-if="!loading">Sign Up</span>
        <span v-else>Loading...</span>
      </button>

      <p v-if="error" class="text-red-500">{{ error }}</p>


      <div>
        <span>Already have an account? <NuxtLink class="text-blue-600" to="/login">Login</NuxtLink></span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '../composables/useApi.js'
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const router = useRouter()
const { apiFetch } = useApi()

const signup = async () => {
  loading.value = true
  error.value = ''


  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    error.value = "All fields are required"
    loading.value = false
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = "Passwords do not match"
    loading.value = false
    return
  }

  try {
    const res = await apiFetch('/auth/register', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        confirmPassword:confirmPassword.value
      }
      
    })

alert(res.message)
    router.push('/login')

  } catch (err) {
    console.log(err)
    error.value = err?.data?.message || 'Signup failed'
  } finally {
    loading.value = false
  }
}

</script>


<style scoped>
.login {
  background-image: url("/images/banner.jpg");
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>
