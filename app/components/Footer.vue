<template>
  <footer class="bg-slate-800 text-white mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-0"
      >
        <!-- Logo & About -->
        <div class="flex flex-col items-start gap-4">
          <div class="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              class="w-24 h-24 object-contain"
            />
            <span class="text-2xl font-bold text-shadow-white"
              >Smart Waste Management System</span
            >
          </div>
          <p class="text-sm text-white/80 leading-relaxed max-w-sm">
            Our mission is to provide a cleaner and smarter city through
            technology. We connect citizens with municipal authorities for
            efficient waste management.
          </p>
          <div class="flex space-x-4 mt-2">
            <a
              href="#"
              class="text-white hover:text-amber-400 transition text-lg"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="#"
              class="text-white hover:text-amber-400 transition text-lg"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              class="text-white hover:text-amber-400 transition text-lg"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="#"
              class="text-white hover:text-amber-400 transition text-lg"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-bold mb-2">Quick Links</h3>
          <NuxtLink to="/" class="hover:text-amber-400 transition"
            >Home</NuxtLink
          >
          <NuxtLink to="/about" class="hover:text-amber-400 transition"
            >About</NuxtLink
          >
          <NuxtLink to="/contact" class="hover:text-amber-400 transition"
            >Contact Us</NuxtLink
          >
          <NuxtLink to="/report" class="hover:text-amber-400 transition"
            >Report Issue</NuxtLink
          >
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col gap-2">
          <h3 class="text-xl font-bold mb-2">Contact</h3>
          <p class="text-white/80 text-sm">
            <span class="font-semibold">Address:</span> Shamali Market Rd,
            Hayatabad, Peshawar
          </p>
          <p class="text-white/80 text-sm">
            <span class="font-semibold">Phone:</span> 0300-0000000
          </p>
          <p class="text-white/80 text-sm">
            <span class="font-semibold">Email:</span> info@example.com
          </p>
      <div class="flex gap-3">
            <Icon
            name="uil:facebook"
            style="color: white; width: 30px; height: 30px"
          />
          <Icon
            name="uil:instagram"
            style="color: white; width: 30px; height: 30px"
          />
            <Icon
            name="uil:youtube"
            style="color: white; width: 30px; height: 30px"
          />
      </div>
        </div>
      </div>

      <div
        class="border-t border-white/20 mt-8 pt-6 text-center text-white/70 text-sm"
      >
        &copy; 2025 Smart Waste Management System. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
// No JS needed for static footer
</script>

<style scoped>
/* Optional: Smooth icon hover scaling */
i {
  transition: transform 0.3s, color 0.3s;
}
i:hover {
  transform: scale(1.2);
  color: #f59e0b;
}
</style>
