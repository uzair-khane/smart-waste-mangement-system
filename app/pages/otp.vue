<template>
  <div class=" otp min-h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-white">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">

      <!-- Title -->
      <h2 class="text-2xl font-semibold text-green-700 mb-2">
        Verify OTP
      </h2>
      <p class="text-sm text-gray-500 mb-6">
        Enter the 6-digit OTP sent to your email
      </p>

      <!-- OTP Inputs -->
      <div class="flex justify-between mb-6">
        <input
          v-for="(digit, index) in otp"
          :key="index"
          ref="otpInputs"
          type="text"
          maxlength="1"
          class="w-12 h-12 text-center text-lg border border-green-200 rounded-md
                 focus:outline-none focus:ring-2 focus:ring-green-600"
          v-model="otp[index]"
          @input="moveNext(index)"
          @keydown.backspace="movePrev(index)"
        />
      </div>

      <!-- Verify Button -->
      <button
        class="w-full py-3 bg-green-600 text-white rounded-md font-medium
               hover:bg-green-700 transition"
      >
        Verify OTP
      </button>

      <!-- Resend -->
      <p class="text-sm text-gray-600 mt-4">
        Didn’t receive OTP?
        <button class="text-green-700 font-semibold hover:underline ml-1">
          Resend
        </button>
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const otp = ref(['', '', '', '', '', ''])
const otpInputs = ref([])

const moveNext = (index) => {
  if (otp.value[index] && index < 5) {
    otpInputs.value[index + 1].focus()
  }
}

const movePrev = (index) => {
  if (!otp.value[index] && index > 0) {
    otpInputs.value[index - 1].focus()
  }
}
</script>
<style>
    .otp {
  background-image: url("/images/banner.jpg"); 
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>
