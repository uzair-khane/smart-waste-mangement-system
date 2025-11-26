<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-center font-extrabold text-4xl text-slate-800 mb-12">Contact Us</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      <!-- MAP -->
      <div
        class="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/40 backdrop-blur-md h-96 lg:h-[790px]"
      >
        <iframe
          title="Location Map"
          class="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.550208429349!2d71.43020611096792!3d33.97839867307306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9108a36a16351%3A0x348fc42d9a14e078!2sShamali%20Market%20Rd%2C%20Hayatabad%2C%20Peshawar%2C%20Pakistan!5e0!3m2!1sen!2s!4v1764114500385!5m2!1sen!2s"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <!-- FORM -->
      <form
        @submit.prevent="onSubmit"
        class="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/40 shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 space-y-6"
      >
        <h2 class="text-2xl font-bold text-green-500 mb-4">Send us a message</h2>

        <!-- Full Name -->
        <div>
          <label class="block text-sm font-medium text-slate-700">Full Name *</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter your full name"
            required
            class="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 shadow-inner focus:border-amber-400 focus:ring-2 focus:ring-amber-300 transition"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-slate-700">Email Address *</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            required
            class="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 shadow-inner focus:border-amber-400 focus:ring-2 focus:ring-amber-300 transition"
          />
        </div>

        <!-- Phone -->
        <div>
          <label class="block text-sm font-medium text-slate-700">Phone Number</label>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="0300-0000000"
            class="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 shadow-inner focus:border-amber-400 focus:ring-2 focus:ring-amber-300 transition"
          />
        </div>

        <!-- CURRENT LOCATION -->
        <div>
          <label class="block text-sm font-medium text-slate-700">Current Location (Auto Detect)</label>

          <div class="mt-2 flex flex-col sm:flex gap-3">
            <input
              v-model="form.location"
              type="text"
              placeholder="Click button to detect your location"
              readonly
              class="flex-1 rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 shadow-inner text-sm"
            />

            <button
              type="button"
              @click="getLocation"
              class="px-4 py-3 bg-green-500 text-white rounded-xl shadow-lg hover:bg-green-600 transition"
            >
              Get Location
            </button>
          </div>

          <p v-if="locLoading" class="text-xs text-slate-500 mt-1">Detecting your location...</p>
        </div>

        <!-- Message -->
        <div>
          <label class="block text-sm font-medium text-slate-700">Message *</label>
          <textarea
            v-model="form.message"
            rows="5"
            placeholder="Write your message here..."
            required
            class="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 shadow-inner focus:border-amber-400 focus:ring-2 focus:ring-amber-300 transition"
          ></textarea>
        </div>

        <!-- Buttons -->
        <div class="flex items-center gap-4 pt-4">
          <button
            type="submit"
            class="px-6 py-3 bg-green-500 text-white font-semibold rounded-xl shadow-lg hover:bg-green-600 hover:shadow-xl transition-all"
          >
            Submit
          </button>

          <button
            type="button"
            @click="resetForm"
            class="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-100 transition"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
  location: "",
});

const locLoading = ref(false);

function getLocation() {
  if (!navigator.geolocation) {
    alert("Your browser does not support GPS.");
    return;
  }

  locLoading.value = true;

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;

      form.location = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
      locLoading.value = false;
    },
    (err) => {
      alert("Unable to access your location. Please allow GPS.");
      locLoading.value = false;
    }
  );
}

function resetForm() {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.message = "";
  form.location = "";
}

function onSubmit() {
  alert("Form submitted (frontend only)");
}
</script>

<style scoped></style>
