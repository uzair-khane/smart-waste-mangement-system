<template>
  <section class="relative  text-slate-800 py-16 px-6 lg:px-16 overflow-hidden">
    <!-- Decorative shapes -->
    <div class="absolute -top-10 -right-10 w-40 h-40 bg-green-400 rounded-full opacity-30"></div>
    <div class="absolute -bottom-10 -left-10 w-60 h-60 bg-green-500 rounded-full opacity-30"></div>
    

    <!-- Content + Image -->
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <!-- Image -->
      <div class="lg:w-1/2">
        <img
          src="/images/welcome.jpg"
          alt="Smart Waste Management"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <!-- Text Content -->
      <div class="lg:w-1/2 text-center lg:text-left">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to Smart Waste Management System
        </h2>
        <p class="text-lg sm:text-xl mb-6">
          Helping citizens report waste or cleanliness issues quickly and efficiently. Together, we can make our city cleaner and healthier!
        </p>
       
      </div>

  

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Optional: add animations or shadows for content/image */
</style>
