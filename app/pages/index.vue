<template>
  <Header />
  <div class="min-h-screen flex flex-col justify-center pt-9 items-start relative overflow-hidden pl-16">
    <!-- Background Video -->
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover">
      <source src="/images/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Hero Content -->
    <div class=" z-10 text-left text-white px-4 sm:px-6 lg:px-2 w-3xl">
      <h1 class="text-4xl sm:text-5xl font-bold mb-6">Smart Waste Management System</h1>
      <p class="text-lg sm:text-xl mb-8">
        Easily report waste or cleanliness problems in your city. Track your complaints and help create a cleaner, healthier environment.
      </p>
      <NuxtLink 
        to="/report-issue" 
        class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md text-lg transition-all"
      >
        Report Issue
      </NuxtLink>
    </div>

    <!-- Features Section -->
    
  </div>
  <Welcome />
  <About />
  <Vidios />
  <ImageGallary />
</template>

<script setup>
</script>

<style scoped>
/* Optional: additional styling */
</style>