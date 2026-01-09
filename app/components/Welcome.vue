<template>
  <section class="relative text-slate-800 py-16 px-6 lg:px-16 overflow-hidden bg-gray-50">
    <!-- Decorative shapes -->
    <div
      class="absolute -top-10 -right-10 w-40 h-40 bg-green-400 rounded-full opacity-30 blur-3xl animate-pulseSlow"
    ></div>
    <div
      class="absolute -bottom-10 -left-10 w-60 h-60 bg-green-500 rounded-full opacity-30 blur-3xl animate-pulseSlow delay-300"
    ></div>

    <!-- Content + Image -->
    <div
      class="relative z-10 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10"
    >
      <!-- Image -->
      <div class="lg:w-1/2 animate-fadeInRight">
        <img
          src="/images/welcome.jpg"
          alt="Smart Waste Management"
          class="w-full h-auto rounded-xl shadow-2xl border-4 border-green-100"
        />
      </div>

      <!-- Text Content -->
      <div class="lg:w-1/2 text-center lg:text-left animate-fadeInLeft">
        <h2
          class="text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700"
        >
          Welcome to Smart Waste Management System
        </h2>
        <p class="text-lg sm:text-xl mb-6 text-slate-700">
          Helping citizens report waste or cleanliness issues quickly and efficiently. Together, we can make our city cleaner and healthier!
        </p>
        <button
          @click="handeLogin()"
          class="inline-block hover:cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
        >
          Report an Issue
      </button>
      </div>
    </div>
  </section>
</template>

<script setup>
  const token = useCookie("token");
  function handeLogin(){
    if(!token.value){
       alert("Pleace login first ")
       navigateTo("login")
    }
    else{
      navigateTo("/report")
    }
  }
</script>

<style scoped>
/* Animations */
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
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

.animate-fadeInLeft {
  animation: fadeInLeft 1s ease forwards;
}

.animate-fadeInRight {
  animation: fadeInRight 1s ease forwards;
}

.animate-pulseSlow {
  animation: pulseSlow 6s ease-in-out infinite;
}

.delay-300 {
  animation-delay: 0.3s;
}
</style>
