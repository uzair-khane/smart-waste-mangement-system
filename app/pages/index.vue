<template>
  <Header />
  <div class="relative min-h-screen flex flex-col justify-center items-start overflow-hidden">
    <!-- Background Video -->
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
      <source src="/images/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Hero Content -->
    <div class="relative z-10 px-4 sm:px-6 lg:px-16 text-white max-w-7xl w-full">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
        Smart Waste Management <br> System
      </h1>
      <p class="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl">
        Easily report waste or cleanliness problems in your city. Track your complaints and help create a cleaner, healthier environment.
      </p>
      <NuxtLink
        to="/report-issue"
        class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md text-sm sm:text-lg transition-all"
      >
        Report Issue
      </NuxtLink>
    </div>
  </div>

  <!-- Other Sections -->
  <Welcome />
  <About />
  <Vidios />
  <ImageGallary />
  <Together />
</template>

<script setup>
</script>

<style scoped>
/* Optional: additional styling */
</style>
