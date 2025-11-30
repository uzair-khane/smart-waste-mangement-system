<template>
  <div class="bg-gray-100 min-h-screen p-4 md:p-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 class="font-bold text-3xl text-slate-800 mb-1">Complaint Dashboard</h1>
          <p class="text-slate-500 text-sm md:text-base">
            View, manage and track all garbage issue complaints
          </p>
        </div>

        <nuxt-link to="/report">
          <button
            class="mt-3 md:mt-0 bg-green-500 hover:bg-green-600 px-5 py-2 text-white font-semibold rounded-lg shadow-md hover:cursor-pointer transition transform hover:scale-105 flex items-center gap-2"
          >
            <Icon name="uil:plus" /> New Report
          </button>
        </nuxt-link>
      </div>

      <!-- Search & Filter Section -->
      <div class="bg-white shadow-lg rounded-xl overflow-x-auto mb-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 px-4 py-4">
          <div class="relative w-full md:w-1/3">
            <Icon name="uil:search" class="absolute top-3 left-3 text-slate-400 text-lg" />
            <input
              type="search"
              placeholder="Search by ID"
              class="bg-gray-100 text-slate-700 py-2 pl-10 pr-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition"
            />
          </div>

          <div class="flex gap-3 mt-2 md:mt-0">
            <button
              class="border py-1 px-3 border-slate-300 rounded-lg hover:cursor-pointer hover:bg-slate-800 hover:text-white transition shadow-sm"
            >
              <Icon name="uil:filter" /> Status
            </button>
            <button
              class="border py-1 px-3 border-slate-300 rounded-lg hover:cursor-pointer hover:bg-slate-800 hover:text-white transition shadow-sm"
            >
              <Icon name="uil:sort" />  Sort
            </button>
          </div>
        </div>

        <!-- Table Section -->
        <table class="w-full min-w-[600px] font-sans table-auto">
          <thead class="bg-gray-100">
            <tr>
              <th class="p-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider">
                Complaint ID
              </th>
              <th class="p-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider">
                Address
              </th>
              <th class="p-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider">
                Date Submitted
              </th>
              <th class="p-3 text-left text-md font-medium text-gray-700 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in complaints"
              :key="item.id"
              class="border-b border-gray-200 hover:bg-gray-50 transition duration-150 
                     [&:nth-child(odd)]:bg-gray-50 [&:nth-child(even)]:bg-white"
            >
              <td class="p-3 text-green-500 font-medium">{{ item.id }}</td>
              <td class="p-3 text-slate-700">{{ item.address }}</td>
              <td class="p-3 text-slate-700">{{ item.date }}</td>
              <td
                class="p-3 font-semibold"
                :class="{
                  'text-green-600': item.status === 'resolve',
                  'text-red-600': item.status === 'reject',
                  'text-yellow-600': item.status === 'pending'
                }"
              >
                {{ item.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let complaints = ref([
  {
    id: "G-12393",
    address: "University Town Tehkal Bala Peshawer",
    date: "2/3/2023",
    status: "resolve",
  },
  {
    id: "G-12394",
    address: "Hayatabad Phase 3",
    date: "5/3/2023",
    status: "pending",
  },
  {
    id: "G-12395",
    address: "University Town Tehkal Bala Peshawer",
    date: "8/3/2023",
    status: "reject",
  },
  {
    id: "G-12396",
    address: "Hayatabad Phase 5",
    date: "10/3/2023",
    status: "resolve",
  },
  {
    id: "G-12397",
    address: "University Town Tehkal Bala Peshawer",
    date: "12/3/2023",
    status: "pending",
  },
]);
</script>
