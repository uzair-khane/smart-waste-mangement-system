<template>
  <header class=" px-4 bg-gray-50 text-slate-700 fixed w-full z-20 shadow-lg">
    <div
      class="max-w-7xl mx-auto flex justify-between items-center  py-1 md:py-1"
    >
      <!-- Logo / Title -->
      <NuxtLink to="/" class="flex items-center space-x-3">
        <img
          src="/images/logo.png"
          alt="Smart Waste Logo"
          class="h-24 w-24 object-contain"
        />
      </NuxtLink>
 

      <!-- Hamburger Menu for Mobile -->
      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Navigation Links -->
      <nav
        :class="{ block: isOpen, hidden: !isOpen }"
        class="absolute md:static top-full left- w-full md:w-auto bg-green-600 md:bg-transparent md:flex md:space-x-3 md:items-end"
      >
        <NuxtLink
          to="/"
          class="block px-2 py-2 text-[18px] md:py-0 hover:text-green-300 md:hover: transition-all duration-300"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/register"
          class="block px-2 py-2 text-[18px] md:py-0 hover:text-green-300 md:hover: transition-all duration-300"
          >Register</NuxtLink
        >
        <NuxtLink
          to="/login"
          class="block px-2 py-2 md:py-0 text-[18px] hover:text-green-300 md:hover:transition-all duration-300"
          >Login</NuxtLink
        >
        <NuxtLink
          to="/report-issue"
          class="block px-2 py-2 text-[18px] md:py-0 hover:text-green-300 md:hover: transition-all duration-300"
          >Report Issue</NuxtLink
        >
        <NuxtLink
          to="/my-complaints"
          class="block px-2 py-2 text-[18px] md:py-0 hover:text-green-300 md:hover: transition-all duration-300"
          >My Complaints</NuxtLink
        >
       
        <NuxtLink
          to="/contact"
          class="block px-2 text-[18px] py-2 md:py-0 hover:text-green-300 md:hover: transition-all duration-300"
          >Contact Us</NuxtLink
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
header nav a {
  transition: all 0.3s ease;
}
</style>
