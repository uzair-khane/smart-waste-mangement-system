
<template>
  <Header />

  <!-- Hero Section -->
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Video -->
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
      <source src="/images/hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

    <!-- Hero Content -->
    <div class="relative md:justify-start sm:justify-center sm:items-center md:items-start md:flex md:flex-col sm:flex sm:flex-col z-10 px-6 sm:px-10 lg:px-20 max-w-7xl w-full text-center md:text-left flex flex-col justify-center items-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6 animate-fadeInDown">
        Smart Waste Management <br>
        <span class="text-green-500">System</span>
      </h1>
      <p class="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl animate-fadeInUp">
        Easily report waste or cleanliness problems in your city. Track your complaints and help create a cleaner, healthier environment.
      </p>
      <NuxtLink
        to="/report"
        class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-lg shadow-lg transition-all transform hover:scale-105 animate-fadeInUp delay-200"
      >
        Report Issue
      </NuxtLink>
    </div>

    <!-- Floating Shapes / Decorative Elements -->
    <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/30 rounded-full blur-3xl animate-pulseSlow"></div>
    <div class="absolute -top-20 -left-20 w-60 h-60 bg-green-400/20 rounded-full blur-2xl animate-pulseSlow delay-300"></div>
  </section>

  <!-- Other Sections -->
  <Welcome />
  <About />
  <Vidios />
  <ImageGallary />
  <Together />
  <ContactUs />
  <Asked />
  <Footer />
</template>

<script setup>
</script>

<style scoped>
/* Animations */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseSlow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.animate-fadeInDown {
  animation: fadeInDown 1s ease forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease forwards;
}

.animate-pulseSlow {
  animation: pulseSlow 6s ease-in-out infinite;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-300 {
  animation-delay: 0.3s;
}
</style>
