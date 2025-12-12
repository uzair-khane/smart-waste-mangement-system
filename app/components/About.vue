<template>
  <section class="relative bg-gradient-to-r from-green-500 to-green-600 text-white py-16 px-6 lg:px-16 overflow-hidden">
    <!-- Decorative shapes -->
    <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulseSlow"></div>
    <div class="absolute -bottom-10 -left-10 w-60 h-60 bg-white/30 rounded-full blur-3xl animate-pulseSlow delay-300"></div>

    <div class="relative z-10 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
      <!-- Text Content -->
      <div class="lg:w-1/2 text-center lg:text-left animate-fadeInLeft">
        <h2 class="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
          About Us
        </h2>
        <p class="text-lg mb-4 text-white/90">
          The Smart Waste Management System is a modern web-based platform designed to help citizens report and track waste or cleanliness problems in their city.
        </p>
        <p class="text-lg mb-4 text-white/90">
          Our mission is to bridge the gap between citizens and municipal authorities, ensuring a cleaner, healthier, and more transparent environment for everyone.
        </p>
        <p class="text-lg text-white/90">
          We leverage advanced technologies like map-based address selection, AI chatbot assistance, and automated complaint validation to make waste reporting simple, efficient, and reliable.
        </p>
      </div>

      <!-- Image -->
      <div class="lg:w-1/2 animate-fadeInRight">
        <img
          src="/images/about.png"
          alt="About Smart Waste Management"
          class="w-full h-auto rounded-xl shadow-2xl "
        />
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Animations */
@keyframes fadeInLeft {
  0% { opacity: 0; transform: translateX(-30px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInRight {
  0% { opacity: 0; transform: translateX(30px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes pulseSlow {
  0%,100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.animate-fadeInLeft { animation: fadeInLeft 1s ease forwards; }
.animate-fadeInRight { animation: fadeInRight 1s ease forwards; }
.animate-pulseSlow { animation: pulseSlow 6s ease-in-out infinite; }
.delay-300 { animation-delay: 0.3s; }
</style>
