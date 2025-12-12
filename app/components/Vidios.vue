<template>
  <section class="py-16 px-4 sm:px-10 lg:px-20 bg-gray-50">
    <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-10 text-center">
      Our Videos
    </h2>

    <div class="flex justify-center mx-2 sm:mx-10 md:mx-20 h-auto">
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
        class="w-full mt-6"
      >
        <!-- Video Slides -->
        <SwiperSlide
          v-for="(video, index) in videos"
          :key="index"
          class="relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
        >
          <video
            class="w-full h-56 sm:h-64 md:h-72 lg:h-80  object-cover rounded-xl"
            :src="video.src"
            muted
            loop
            autoplay
            playsinline
          ></video>
          <!-- Optional overlay on hover -->
          <div
            class="absolute inset-0 bg-black/20 opacity-0 hover:opacity-25 transition-opacity duration-300 rounded-xl flex items-center justify-center"
          >
            <span class="text-white font-semibold text-lg">▶ Play</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Swiper modules
const modules = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

// Breakpoints for responsive slides
const breakpoints = {
  640: { slidesPerView: 1, spaceBetween: 20 },
  768: { slidesPerView: 2, spaceBetween: 25 },
  1024: { slidesPerView: 3, spaceBetween: 30 },
  1280: { slidesPerView: 3, spaceBetween: 30 },
};

// Video sources
const videos = [
  { src: "/images/vidio.mp4" },
  { src: "/images/vidio2.mp4" },
  { src: "/images/vidio3.mp4" },
  { src: "/images/vidio4.mp4" },
];
</script>

<style scoped>
/* Swiper scrollbar adjustments */
.swiper-scrollbar {
  bottom: 0 !important;
  top: auto;
  height: 6px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
}

.swiper-scrollbar-drag {
  background: rgba(34, 197, 94, 0.8); /* green highlight */
  border-radius: 3px;
}
</style>
