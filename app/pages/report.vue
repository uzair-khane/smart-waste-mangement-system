<template>
  <Header />
  <div class="min-h-screen pt-36  flex items-center justify-center p-4 mx-28">
    <div class="bg-white rounded-xl shadow-lg p-6 md:p-10 w-full ">
      <!-- Header -->
      <h1 class="text-2xl font-bold text-gray-800 mb-1">Report Garbage Problem</h1>
      <p class="text-gray-500 mb-6 text-sm">Fill out the form below to report an issue in your area.</p>

      <!-- Form -->
      <form @submit.prevent="submitReport" class="space-y-4">

        <!-- Full Name -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            v-model="fullName"
            type="text"
            placeholder="Enter your full name"
            class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <!-- Location Address -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">Location Address</label>
          <input
            v-model="locationAddress"
            type="text"
            placeholder="Fetching current location..."
            class="w-full rounded-md border border-gray-300 px-4 py-2 bg-gray-100 text-gray-600"
            readonly
          />
        </div>

        <!-- Describe the Issue -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">Describe the Issue</label>
          <textarea
            v-model="issueDescription"
            rows="4"
            placeholder="e.g., Overflowing public bin, illegal dumping..."
            class="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <!-- Attach Photo -->
<div class="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v4h16v-4M12 12v8m0 0l-3-3m3 3l3-3M12 12V4" />
  </svg>
  <p class="text-gray-500 text-sm mb-2">Attach a Photo (Optional)</p>
  <input type="file" @change="handleFileUpload" class="hidden" ref="fileInput" accept="image/*" />
  <button type="button" @click="$refs.fileInput.click()" class="px-4 py-2 bg-green-200 text-green-800 rounded-md text-sm hover:bg-green-300 mb-2">
    Browse files
  </button>

  <!-- Image Preview -->
  <div v-if="imagePreview" class="mt-2 w-[300px] h-[300px] object-cover overflow-hidden rounded-md border border-gray-200">
    <img :src="imagePreview" alt="Preview" class="w-[300px] h-[300px] object-cover" />
  </div>
</div>


        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md mt-4"
        >
          Submit Report
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from '~/components/Header.vue'

const fullName = ref('')
const locationAddress = ref('')
const issueDescription = ref('')
const attachedFile = ref(null)
const imagePreview = ref(null)

// Fetch user's current location
onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords
      // Use reverse geocoding API (e.g., OpenStreetMap Nominatim)
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
      const data = await res.json()
      locationAddress.value = data.display_name || `${latitude}, ${longitude}`
    }, (error) => {
      locationAddress.value = 'Unable to fetch location'
      console.error(error)
    })
  } else {
    locationAddress.value = 'Geolocation not supported'
  }
})




const handleFileUpload = (event) => {
  attachedFile.value = event.target.files[0]
  if (attachedFile.value) {
    imagePreview.value = URL.createObjectURL(attachedFile.value)
  } else {
    imagePreview.value = null
  }
}


const submitReport = () => {
  console.log({
    fullName: fullName.value,
    location: locationAddress.value,
    issue: issueDescription.value,
    file: attachedFile.value
  })
  alert('Report submitted successfully!')
  // Reset form
  fullName.value = ''
  issueDescription.value = ''
  attachedFile.value = null
}
</script>

<style scoped>
/* Optional: adjust file input hover effect */
</style>
