<template>
  <div class="parent flex login justify-center px-2 items-center">
    <form class="form w-full relative sm:w-[550px] rounded-md space-y-4 py-6 px-3 md:p-10 bg-white/30 backdrop-blur-lg">
      <h3 class="text-3xl font-bold">Login</h3>

      <!-- Email Field -->
      <div class="flex items-center border-b-2 border-emerald-200 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572" class="w-7 h-7 mr-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0L12 12.75 2.25 6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25" />
        </svg>

        <input
          v-model="email"
          type="email"
          placeholder="Enter email"
          class="w-[95%] py-4 text-slate-700 placeholder-[#93C572] bg-transparent focus:outline-none text-xl"
        />
      </div>

      <!-- Password Field -->
      <div class="flex items-center border-b-2 border-emerald-200 w-full focus-within:border-emerald-400 transition relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572" class="w-7 h-7 mr-3">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m12 0h-15a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5z" />
        </svg>

        <input
          :type="showPassword ? 'text' : 'password'"
          v-model="password"
          placeholder="Enter password"
          class="w-[95%] py-3 text-slate-800 placeholder-[#93C572] bg-transparent focus:outline-none text-xl"
        />

        <!-- Eye Toggle -->
        <svg v-if="!showPassword" @click="showPassword = true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#93C572" class="w-6 h-6 absolute right-0 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12s-3.75 7.5-9.75 7.5S2.25 12 2.25 12z" />
          <circle cx="12" cy="12" r="3" stroke="#93C572" stroke-width="1.5" />
        </svg>

        <svg v-if="showPassword" @click="showPassword = false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#93C572" stroke-width="1.5" class="w-6 h-6 absolute right-0 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18M10.584 10.587A3 3 0 0012 15a3 3 0 001.414-.414M9.879 4.606A11.42 11.42 0 0112 4.5C18 4.5 21.75 12 21.75 12c-.621 1.24-1.38 2.332-2.25 3.24M6.75 6.751A11.451 11.451 0 002.25 12s3.75 7.5 9.75 7.5c1.883 0 3.57-.572 5.053-1.443" />
        </svg>
      </div>

      <!-- Button -->
     <button
  type="button"
  @click="login"
  :disabled="loading"
  class="w-full flex h-12 items-center justify-center hover:bg-green-500 transition-all my-16 py-2.5 bg-green-600 text-white text-[18px] font-semibold rounded-md"
>
  <span v-if="!loading">Login</span>
  <span v-else>Loading...</span>
</button>

<p v-if="error" class="text-red-500">{{ error }}</p>

      <div>
        <span>don't have an account? <NuxtLink class="text-blue-600" to="/signup">Sign up</NuxtLink></span>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useApi } from "../composables/useApi.js";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const loading = ref(false);
const error = ref("");

const router = useRouter();
const { apiFetch, token } = useApi(); 

const login = async () => {
  loading.value = true;
  error.value = "";

  if (!email.value || !password.value) {
    error.value = "All fields are required";
    loading.value = false;
    return;
  }

  try {
    const res = await apiFetch("/auth/login", {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    console.log(res);
    
 
  if (res.success) {
    const token = useCookie('token') 
    token.value = res.data.token;
    router.push("/"); 
  } else {
    error.value = res.message || "Login failed";
  }
} catch (err) {
  console.log(err);
  error.value = err?.data?.message || "Login failed";
}

  

};
</script>


<style scoped>
.login {
  background-image: url("/images/banner.jpg"); 
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>