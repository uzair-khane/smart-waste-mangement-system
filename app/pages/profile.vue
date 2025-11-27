<template>
  <div class="min-h-screen bg-gray-100 flex">

    <!-- Sidebar -->
    <div class="w-72 bg-white shadow-md p-6 flex flex-col">
      <!-- Profile -->
      <div class="flex flex-col items-center text-center mb-10">
        <div class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-3xl">
         <img src="/images/1.jpeg" class="w-20 h-20 rounded-full" alt="">
        </div>
        <h2 class="mt-4 text-lg font-semibold">John Doe</h2>
        <p class="text-gray-500 text-sm">john.doe@email.com</p>
      </div>

      <!-- Navigation -->
      <nav class="space-y-2 flex-1">
        <NuxtLink
          to="/profile"
          class="flex items-center gap-3 px-4 py-3 rounded-lg transition
                 bg-blue-50 text-blue-600 font-medium"
        >
          <Icon name="uil:user" />
          Personal Information
        </NuxtLink>

        <NuxtLink
          to="/profile/security"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
        >
          <Icon name="uil:lock" />
          Security
        </NuxtLink>

        <NuxtLink
          to="/profile/reports"
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
        >
        <Icon name="uil:line" />
          My Reports
        </NuxtLink>
      </nav>

      <!-- Footer -->
      <div class="mt-10 space-y-3">
        

        <button class=" hover:cursor-pointer flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-100 w-full rounded-lg">
         <Icon name="uil:signout" />
          Logout
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <main class="flex-1 p-10">
      <div class="bg-white rounded-xl shadow p-8">
        
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <div>
            <h1 class="text-2xl font-bold text-slate-800">Personal Information</h1>
            <p class="text-gray-500">View and update your personal details.</p>
          </div>

          <div class="flex gap-4">
            <button class="px-4 py-2 text-white rounded-lg bg-red-400 hover:cursor-pointer hover:bg-red-500">Cancel</button>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>

        <hr class="my-6 text-slate-300" />

        <!-- Form -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <!-- Full Name -->
          <div>
            <label class="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              value="John Doe"
              class="w-full  rounded-md  focus:outline-slate-300 text-slate-600 bg-slate-100 px-4 py-2 "
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="text"
              value="john.doe@email.com"
              disabled
             class="w-full  rounded-md  focus:outline-slate-300 text-slate-600 bg-slate-100 px-4 py-2 "
            />
          </div>

          <!-- Address -->
          <div class="md:col-span-2">
            <label class="block text-gray-700 font-medium mb-1">Home Address</label>
            <textarea
              rows="3"
            class="w-full  rounded-md  focus:outline-slate-300 text-slate-600 bg-slate-100 px-4 py-2 "
            >123 Green Street, Enviro City, 10101</textarea>
          </div>
        </div>

     

      </div>
    </main>

  </div>
</template>
