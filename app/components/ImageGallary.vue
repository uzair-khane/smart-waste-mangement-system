<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <h2 class="text-4xl font-extrabold text-center mb-12 text-gray-800">Image Gallery</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative overflow-hidden rounded-xl shadow-lg group"
        :class="getSpan(index)"
      >
        <img
          :src="image"
          alt="Gallery Image"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold"
        >
          View Image
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const images = [
  '/images/banner.jpg',
  '/images/banner.jpg',
  '/images/banner.jpg',
  '/images/banner.jpg',
  '/images/banner.jpg',
  '/images/banner.jpg',
  '/images/banner.jpg',
  '/images/banner.jpg',
]

// Randomly vary row span for a masonry effect
const getSpan = (index) => {
  const spans = ['row-span-1', 'row-span-2', 'row-span-3']
  return spans[Math.floor(Math.random() * spans.length)]
}
</script>

<style>
/* Smooth fade-in for images */
img {
  transition: all 0.5s ease;
}

/* Optional: subtle shadow animation */
.group:hover {
  z-index: 10;
  transform: translateY(-5px);
  transition: all 0.5s ease;
}
</style>
