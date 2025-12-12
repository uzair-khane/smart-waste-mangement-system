<template>
  <header
    class="fixed w-full z-50 backdrop-blur-xl bg-white/70 shadow-lg border-b border-white/30 transition-all duration-300"
  >
    <div
      class="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-6"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center space-x-3 group">
        <img
          src="/images/logo.png"
          alt="Smart Waste Logo"
          class="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </NuxtLink>

      <!-- Mobile Hamburger -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden focus:outline-none transition-transform duration-300"
      >
        <Icon
          v-if="!isOpen"
          name="material-symbols:menu-rounded"
          class="text-4xl text-green-700"
        />
        <Icon
          v-else
          name="material-symbols:close-rounded"
          class="text-4xl text-green-700"
        />
      </button>

      <!-- Navigation -->
      <nav
        class="absolute md:static left-0 top-full w-full md:w-auto bg-white/90 md:bg-transparent overflow-hidden md:overflow-visible shadow-md md:shadow-none transition-all duration-500 ease-in-out"
        :class="isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-full'"
      >
        <div class="flex flex-col md:flex-row md:items-center text-center">
          <NuxtLink
            to="/"
            class="block px-4 py-3 text-lg md:py-0 font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/chatBot"
            class="block px-4 py-3 text-lg md:py-0 font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            Chatbot
          </NuxtLink>

          <NuxtLink
            to="/report"
            class="block px-4 py-3 text-lg md:py-0 font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            Report Issue
          </NuxtLink>

          <NuxtLink
            to="/complaint"
            class="block px-4 py-3 text-lg md:py-0 font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            My Complaints
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="block px-4 py-3 text-lg md:py-0 font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </NuxtLink>
        </div>
      </nav>

      <!-- Profile Icon -->
      <NuxtLink to="/profile" class="hidden md:block">
        <Icon
          name="uil:user"
          class="text-2xl text-green-700 hover:text-green-500 hover:scale-110 transition-all duration-300 cursor-pointer"
        />
      </NuxtLink>
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
