<template>
  <swiper
    :class="getClassAndStyle(props.height).class"
    :style="getClassAndStyle(props.height).style"
    :modules="modules"
    :navigation="{ prevEl: '.prev', nextEl: '.next' }"
    :pagination="{ clickable: true, type: 'fraction', el: '.pagination' }"
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item, index) in items" :key="index">
      <slot :item="item">
        <div
          class="w-full h-full bg-cover bg-no-repeat bg-center-top"
          :style="{ backgroundImage: `url(${item.image})` }"
        >
          <Container class="h-full">
            <div class="flex flex-col justify-center items-start">
              <p class="lt-sm:text-xl text-4xl font-bold text-white">{{ item.title }}</p>
              <p class="text-sm sm:text-xl text-gray-100 pt-4">{{ item.subTitle }}</p>
            </div>
          </Container>
        </div>
      </slot>
    </swiper-slide>
    <div
      class="flex items-center justify-center absolute right-0 bottom-0 bg-white opacity-60 text-dark-300 w-40 h-12 z-30"
    >
      <div class="pagination w-unset! font-bold mr-4"></div>
      <div class="prev i-mdi-arrow-left-thin" style="font-size: 1.5rem"></div>
      <div class="next i-mdi-arrow-right-thin" style="font-size: 1.5rem"></div>
    </div>
  </swiper>
</template>

<script setup lang="ts">
import type { Swiper as SwiperTypes } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { SwiperItemType } from '@/components/types'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const props = defineProps({
  height: {
    type: String,
    default: 'h-80'
  },
  items: {
    type: Array as PropType<Array<SwiperItemType>>,
    default: () => []
  }
})

const modules = [Navigation, Pagination]

const emits = defineEmits(['change'])

function getClassAndStyle(str: string) {
  return {
    style: /(rem|em|px)/.test(props.height) ? { height: str } : {},
    class: /h-/.test(props.height) ? str : ''
  }
}

const onSwiper = (swiper: SwiperTypes) => {
  console.log(swiper)
}

const onSlideChange = (e: SwiperTypes) => {
  emits('change', e)
}
</script>

<style scoped lang="scss">
.swiper-button-disabled {
  color: rgba($color: #000, $alpha: 0.3);
}
</style>
