<template>
  
  <div>
   <!-- head section  -->
    <div class="flex justify-between mx-12 my-14">
      <div  >
        <h1 class="font-bold text-2xl text-slate-700 ">Complaint Dashboard</h1>
        <p class="text-slate-500">view,manage and track all Garbage issue complaints</p>
      </div>
      <button class="bg-green-500 hover:bg-green-600 px-2 text-white  font-bold rounded-sm hover:cursor-pointer">
         <Icon name="uil:plus" />  New Report
      </button>
    </div>
    <!-- table section  -->
     <div class="bg-amber-50   mx-12  shadow-2xl">
      <!-- search bar -->
      <div class="flex justify-between mx-16">
        <div class="relative ">
          <!-- icon  -->
          <Icon name="uil:search" class="absolute top-2 left-3 text-slate-700" />
           <input type="search" placeholder="Search by id" class="bg-gray-100 text-slate-700 py-1 px-10 rounded-sm focus:outline-blue-500 ">
          </div>
          <!-- button  -->
        <div>
           <button class="border px-2 py-2 border-slate-300 rounded-md"> <Icon name="uil:bars" class="service"/>Status</button>
           <button>Sort</button>
          </div>
      </div>
     </div>
  </div>
</template>

