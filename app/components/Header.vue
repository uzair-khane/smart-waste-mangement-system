<template>
  <header
    class="fixed w-full z-50 backdrop-blur-xl bg-white/70 shadow-lg border-b border-white/30 transition-all duration-300"
  >
    <div
      class="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 md:px-6"
    >

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <img
          src="/images/logo.png"
          alt="Smart Waste Logo"
          class="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </NuxtLink>

      <!-- Mobile Hamburger -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden hover:cursor-pointer focus:outline-none"
      >
        <Icon
          :name="isOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'"
          class="text-4xl hover:cursor-pointer text-green-700 transition"
        />
      </button>

      <!-- Navigation -->
      <nav
        class="absolute md:static left-0 top-full w-full md:w-auto bg-white/95 md:bg-transparent overflow-hidden shadow-md md:shadow-none transition-all duration-500 ease-in-out"
        :class="isOpen
          ? 'max-h-96 opacity-100'
          : 'max-h-0 opacity-0 md:opacity-100 md:max-h-full'"
      >
        <div class="flex flex-col md:flex-row md:items-center text-center">

          <!-- Nav Links -->
          <NuxtLink
            to="/"
            class="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/chatBot"
            class="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            Chatbot
          </NuxtLink>

          <NuxtLink
            to="/report"
            class="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            Report Issue
          </NuxtLink>

          <NuxtLink
            to="/complaint"
            class="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            My Complaints
          </NuxtLink>

          <NuxtLink
            to="/contactUs"
            class="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-green-600 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </NuxtLink>

          <!-- Mobile Auth -->
          <div class="md:hidden border-t border-slate-200 mt-2 pt-2">
            <NuxtLink
            v-if="!token"
              to="/profile"
              class="flex items-center justify-center gap-2 px-4 py-3 text-lg font-medium text-slate-700 hover:text-green-600 transition"
            >
              <Icon name="uil:user" />
              Profile
            </NuxtLink>

            <NuxtLink
            v-if="token"
            to="/login"
              class="flex hover:cursor-pointer items-center justify-center gap-2 px-4 py-3 text-lg font-medium text-green-700 hover:text-green-600 transition"
            >
              <Icon name="mdi:account-plus" />
              Login
            </NuxtLink>
          </div>

        </div>
      </nav>

      <!-- Desktop Actions -->
      <div class="hidden md:flex items-center gap-3">

        <!-- Login -->
        <NuxtLink
        v-if="!token"
          to="/login"
          class="flex items-center hover:cursor-pointer gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2 rounded-md transition shadow"
        >
        <Icon name="mdi:account-plus" size="20" />
          Login
        </NuxtLink>

        <!-- Profile -->
        <NuxtLink
         v-if="token"
          to="/profile"
          class="flex items-center gap-2 border border-green-600 hover:bg-green-600 hover:text-white px-5 py-2 rounded-md transition"
        >
        
          <Icon name="uil:user" />
          Profile
        </NuxtLink>

      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from "vue"

const token = useCookie("token")
const isOpen = ref(false)
</script>
