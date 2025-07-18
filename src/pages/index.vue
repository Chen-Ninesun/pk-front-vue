<template>
  <Swiper :items="items" height="h-100"></Swiper>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'
// import { registerSW } from 'virtual:pwa-register'
import bg from '@/assets/images/bg.png'

const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍'
  },
  {
    image: bg
  },
  {
    image: bg
  },
  {
    image: bg
  }
]

// onMounted(() => {
//   registerSW({
//     immediate: true,
//     // onNeedRefresh() {
//     //   console.log('Need Refresh!')
//     // },
//     onRegisteredSW(_url, registration) {
//       setInterval(() => {
//         registration?.update()
//       }, 3600 * 1000)
//     }
//   })
// })
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  layout: default
</route>
