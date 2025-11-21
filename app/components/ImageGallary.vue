<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="text-4xl font-extrabold text-center mb-12 text-gray-800">Image Gallery</h2>

    <!-- Responsive Masonry Grid (Static Images) -->
    <div class="grid grid-flow-row-dense grid-cols-6 sm:grid-cols-12 gap-4 auto-rows-[200px]">

      <!-- Image 1 -->
      <div class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-4" @click="selectedImage = '/images/1.jpeg'">
        <img src="/images/1.jpeg" alt="Image 1" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" />
        <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-white text-lg font-semibold">View Image</span>
        </div>
      </div>

      <!-- Image 2 -->
      <div class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3" @click="selectedImage = '/images/2.jpg'">
        <img src="/images/2.jpg" alt="Image 2" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" />
        <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-white text-lg font-semibold">View Image</span>
        </div>
      </div>

      <!-- Image 3 -->
      <div class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2" @click="selectedImage = '/images/3.jpg'">
        <img src="/images/3.jpg" alt="Image 3" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" />
        <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-white text-lg font-semibold">View Image</span>
        </div>
      </div>

      <!-- Image 4 -->
      <div class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-4" @click="selectedImage = '/images/4.jpeg'">
        <img src="/images/4.jpeg" alt="Image 4" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" />
        <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-white text-lg font-semibold">View Image</span>
        </div>
      </div>

      <!-- Image 5 -->
      <div class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group col-span-6 sm:col-span-3 md:col-span-3 lg:col-span-3" @click="selectedImage = '/images/5.jpeg'">
        <img src="/images/5.jpeg" alt="Image 5" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" />
        <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-white text-lg font-semibold">View Image</span>
        </div>
      </div>

      <!-- Image 6 -->
      <div class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2" @click="selectedImage = '/images/6.jpeg'">
        <img src="/images/6.jpeg" alt="Image 6" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" />
        <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-white text-lg font-semibold">View Image</span>
        </div>
      </div>

      <!-- Image 7 -->
      <div class="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-4" @click="selectedImage = '/images/7.jpeg'">
        <img src="/images/7.jpeg" alt="Image 7" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1" />
        <div class="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span class="text-white text-lg font-semibold">View Image</span>
        </div>
      </div>

    </div>

    <!-- Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      @click.self="selectedImage = null"
    >
      <div class="relative max-w-3xl w-full">
        <button
          @click="selectedImage = null"
          class="absolute top-2 right-2 text-white text-2xl font-bold hover:text-gray-300"
        >
          &times;
        </button>
        <img :src="selectedImage" class="w-full h-auto rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedImage = ref(null)
</script>

<style>
img {
  transition: all 0.5s ease;
}

.group:hover {
  z-index: 10;
  transform: translateY(-5px);
  transition: all 0.5s ease;
}
</style>
