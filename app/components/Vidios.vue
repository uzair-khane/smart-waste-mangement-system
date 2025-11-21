<template>
  <div class="flex justify-center mx-4 sm:mx-10 md:mx-20 mb-14 h-auto">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="breakpoints"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      loop
      class="w-full mt-12"
    >
      <!-- Video Slides -->
      <SwiperSlide class="relative">
        <video
          class="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl"
          src="/images/vidio.mp4"
          muted
          loop
          autoplay
          playsinline
        ></video>
      </SwiperSlide>

      <SwiperSlide class="relative">
        <video
          class="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl"
          src="/images/vidio2.mp4"
          muted
          loop
          autoplay
          playsinline
        ></video>
      </SwiperSlide>

      <SwiperSlide class="relative">
        <video
          class="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl"
          src="/images/vidio3.mp4"
          muted
          loop
          autoplay
          playsinline
        ></video>
      </SwiperSlide>

      <SwiperSlide class="relative">
        <video
          class="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl"
          src="/images/vidio4.mp4"
          muted
          loop
          autoplay
          playsinline
        ></video>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Swiper modules
const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay]

// Breakpoints for responsive slides
const breakpoints = {
  640: { slidesPerView: 1, spaceBetween: 20 }, // Mobile
  768: { slidesPerView: 2, spaceBetween: 25 }, // Tablet
  1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktop
  1280: { slidesPerView: 3, spaceBetween: 30 }  // Large Desktop
}
</script>

<style>
.swiper-scrollbar {
  bottom: 0 !important;
  top: auto;
}
</style>
