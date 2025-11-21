<template>
  <div class="flex justify-center mx-20 mb-14">
    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="30"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      class="w-full mt-28"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <!-- Video Slides -->
      <SwiperSlide
        v-for="(video, index) in videos"
        :key="index"
        class="relative"
      >
        <video
          :ref="el => videoRefs[index] = el"
          class="w-full h-64 object-cover rounded-xl"
          :src="video.src"
          muted
          loop
          playsinline
        ></video>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

// Swiper modules
const modules = [Navigation, Pagination, Scrollbar, A11y]

// Video data
const videos = [
  { src: '/images/vidio.mp4' },
  { src: '/images/vidio.mp4' },
  { src: '/images/vidio.mp4' },
  { src: '/images/vidio.mp4' },
]

// Refs for all video elements
const videoRefs = []

// Track active slide
const activeIndex = ref(0)

// Function to play the active video and pause others
const playActiveVideo = () => {
  videoRefs.forEach((v, idx) => {
    if (!v) return
    if (idx === activeIndex.value) {
      v.play().catch(() => {}) // fallback for autoplay restrictions
    } else {
      v.pause()
    }
  })
}

// Swiper initialized
const onSwiper = (swiper) => {
  console.log('Swiper initialized', swiper)
  // Play the initial visible slides (centered)
  activeIndex.value = swiper.activeIndex
  playActiveVideo()
}

// Slide change
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
  playActiveVideo()
}

// Play the initial slide video on component mount
onMounted(() => {
  nextTick(() => {
    playActiveVideo()
  })
})
</script>
