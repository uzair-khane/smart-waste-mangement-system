<template>
  <Header />

  <div class="min-h-screen pt-24 sm:pt-32 flex items-center justify-center px-4 sm:px-6 lg:px-28">
    <div class="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-3xl">

      <!-- Header -->
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Report Garbage Problem</h1>
      <p class="text-gray-500 mb-6 text-sm sm:text-base">
        Fill out the form below to report an issue in your area.
      </p>

      <!-- Form -->
      <form @submit.prevent="submitReport" class="space-y-4 sm:space-y-6">

        <!-- Full Name -->
        <div>
          <label class="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Full Name</label>
          <input
            v-model="fullName"
            type="text"
            placeholder="Enter your full name"
            class="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
          />
        </div>

        <!-- Location Address -->
        <div>
          <label class="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Location Address</label>
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              v-model="locationAddress"
              type="text"
              placeholder="Fetching current location..."
              class="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 bg-gray-100 text-gray-600 text-sm sm:text-base"
              readonly
            />
            <!-- Retry Button if Permission Denied -->
            <button
              v-if="locationError"
              type="button"
              @click="getLocation"
              class="mt-2 sm:mt-0 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base hover:bg-blue-600"
            >
              Retry Location
            </button>
          </div>
          <p v-if="locationError" class="text-red-500 text-sm mt-1">{{ locationError }}</p>
        </div>

        <!-- Describe the Issue -->
        <div>
          <label class="block text-gray-700 font-medium mb-1 text-sm sm:text-base">Describe the Issue</label>
          <textarea
            v-model="issueDescription"
            rows="4"
            placeholder="e.g., Overflowing public bin, illegal dumping..."
            class="w-full rounded-md border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
          ></textarea>
        </div>

        <!-- Attach Photo / Take Photo -->
        <div class="border border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v4h16v-4M12 12v8m0 0l-3-3m3 3l3-3M12 12V4" />
          </svg>
          <p class="text-gray-500 text-sm mb-2">Attach a Photo (Optional)</p>

          <!-- Hidden File Input for Upload & Camera -->
          <input 
            type="file" 
            @change="handleFileUpload" 
            class="hidden" 
            ref="fileInput" 
            accept="image/*" 
            capture="environment" 
          />

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-2">
            <button type="button" @click="$refs.fileInput.click()" class="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-200 text-green-800 rounded-md text-sm sm:text-base hover:bg-green-300">
              Take Photo / Upload
            </button>
          </div>

          <!-- Image Preview -->
          <div v-if="imagePreview" class="mt-2 w-full sm:w-[300px] h-[300px] object-cover overflow-hidden rounded-md border border-gray-200">
            <img :src="imagePreview" alt="Preview" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 sm:py-2.5 rounded-md mt-4 text-sm sm:text-base"
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
const locationError = ref(null)

// Function to get location (mobile + desktop)
const getLocation = () => {
  locationError.value = null
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          const data = await res.json()
          locationAddress.value = data.display_name || `${latitude}, ${longitude}`
        } catch (error) {
          locationAddress.value = `${latitude}, ${longitude}`
          console.error(error)
        }
      },
      (error) => {
        switch(error.code){
          case 1:
            locationError.value = 'Permission denied. Please allow location access.'
            break;
          case 2:
            locationError.value = 'Position unavailable.'
            break;
          case 3:
            locationError.value = 'Location request timed out.'
            break;
          default:
            locationError.value = 'Unable to fetch location.'
        }
        locationAddress.value = ''
        console.error(error)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  } else {
    locationError.value = 'Geolocation not supported.'
  }
}

// Fetch location on mount
onMounted(() => {
  getLocation()
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
  imagePreview.value = null
  locationAddress.value = ''
  locationError.value = null
}
</script>

<style scoped>

</style>
