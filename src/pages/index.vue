<template>
  <div class="pb-15">
    <Swiper :items="items" :height="36 * store.rate + 'rem'"></Swiper>
    <!-- 标题 -->
    <Container>
      <div class="py-4">
        <div class="text-2xl">“</div>
        <div class="text-2xl font-bold pb-4">传播技术的种子 让分享带来价值</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400 w-2/3">
            多年来，toimc技术不忘初心，以建立行业服务标杆为目标，不断提升技术设计服务水平，帮助客户在互联网推广自己的产品、服务和品牌，为客户创造价值从而实现自身价值！
          </div>
          <div class="flex pl-20 w-1/3 justify-end items-center">
            <div class="w-1/2 h-[1px] bg-gray-500"></div>
            <div class="text-2xl relative ml-2 top-1">”</div>
          </div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full lt-sm:px-4">
        <a
          href="item.url"
          target="_blank"
          class="box flex group transition-all hover:(bg-sky-500 shadow-lg text-white transform-translate-y--1)"
          v-for="(item, index) in projects"
          :key="index"
        >
          <Card
            class="w-full"
            :icon="item.icon"
            image-type="default"
            :title="item.title"
            :subTitle="item.subTitle"
            :border="true"
          >
            <template #default>
              <div
                class="mx-4 flex items-center justify-between text-gray-500 mb-4 group-hover:text-white"
              >
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 标题 -->
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">官方课程</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">toimc官方出品，经典内容设计，匠心细致，专业讲解。</div>
        </div>
      </div>
    </Container>
    <Container>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lt-sm:px-4">
        <a href="item.url" target="_blank" v-for="(item, index) in lessons" :key="index">
          <Card
            class="w-full rounded-3 transition-all hover:(transform-translate-y--1 shadow-lg)"
            :image="item.image"
            image-type="rounded"
            :title="item.title"
            :sub-title="item.subTitle"
            border
          >
            <template #default>
              <div class="mx-4 flex items-center justify-between text-gray-500 mb-4">
                查看更多
                <div class="i-mdi:arrow-right-thin text-3xl ml-2"></div>
              </div>
            </template>
          </Card>
        </a>
      </div>
    </Container>
    <!-- 标题 -->
    <Container class="mt-5">
      <div class="py-4">
        <div class="text-2xl font-bold pb-4">官方课程</div>
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-400">toimc官方出品，经典内容设计，匠心细致，专业讲解。</div>
        </div>
      </div>
    </Container>
    <Container class="w-full text-gray-400">
      <Swiper
        :items="items"
        :height="28 * store.rate + 'rem'"
        class="w-2/3"
        @change="handleSwiperChange"
      ></Swiper>
      <a
        :href="selectItem.url"
        target="_blank"
        class="w-1/3 bg-coolGray-700 self-stretch flex flex-col justify-center px-4"
      >
        <div class="text-2xl font-bold pb-4 text-gray-100">{{ selectItem.title }}</div>
        <div class="text-sm">{{ selectItem.subTitle }}</div>
        <div class="flex items-start justify-between mb-4">查看更多</div>
        <div class="i-mdi:arrow-right-thin text-4xl"></div>
      </a>
    </Container>
    <Container class="py-4">
      <div class="w-2/3 h-[400px]">
        <div class="grid grid-cols-4 grid-rows-3 gap-4 p-4 h-full">
          <div class="border col-span-4 row-span-1"></div>
          <div class="border col-span-2 row-span-2"></div>
          <div class="border col-span-2 row-span-1"></div>
          <div class="border"></div>
          <div class="border"></div>
        </div>
      </div>
      <div class="w-1/3 flex flex-col justify-center self-stretch">
        <div class="text-2xl font-bold pb-4">讲师团队</div>
        <div class="text-sm text-gray-400">
          <div>一线大厂、资深技术大牛10名</div>
          <div>技术专家不定期坐镇直播间</div>
          <div>前端、Java、Python工程师对应不同用户开发需求</div>
          <div>年薪百万不是梦，加入我们!</div>
        </div>
      </div>
    </Container>
    <!-- 合作伙伴 -->
    <Container>
      <FreeSwiper :items="partners"></FreeSwiper>
    </Container>
  </div>
</template>

<script setup lang="ts">
import type { SwiperItemType } from '@/components/types'
// import { registerSW } from 'virtual:pwa-register'
import bg from '@/assets/images/bg.png'
import { useThemeStore } from '@/store/useThemeStore'

import front from '@/assets/lessons/front-end.jpeg'
import nestjs from '@/assets/lessons/nestjs.jpeg'
import small from '@/assets/lessons/6.jpeg'
import project from '@/assets/lessons/project.jpeg'
import book from '@/assets/lessons/book.jpeg'
import blog from '@/assets/lessons/blog.png'
import type Swiper from 'swiper'
import Container from '@/components/Container.vue'

const store = useThemeStore()

const items: SwiperItemType[] = [
  {
    image: bg,
    title: '传播技术的种子',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://class.imooc.com/'
  },
  {
    image: bg,
    title: '传播技术的种子1',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://class.imooc.com/'
  },
  {
    image: bg,
    title: '传播技术的种子2',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://class.imooc.com/'
  },
  {
    image: bg,
    title: '传播技术的种子3',
    subTitle: '让技术没有门槛，让沟通没有障碍',
    url: 'https://class.imooc.com/'
  }
]

const selectItem = ref(items[0])

const projects = [
  {
    title: 'AI人工智能',
    subTitle: 'AIGC | ChatGPT | LLM',
    icon: 'i-streamline-plump:web-remix',
    url: 'https://class.imooc.com/sale/pgmaths?mc_marking=22f1a4480f55bcb6a666d3563d26cbf5&mc_channel=syjptx14'
  },
  {
    title: 'AI人工智能',
    subTitle: 'AIGC | ChatGPT | LLM',
    icon: 'i-streamline-plump:web-remix',
    url: 'https://class.imooc.com/sale/pgmaths?mc_marking=22f1a4480f55bcb6a666d3563d26cbf5&mc_channel=syjptx14'
  },
  {
    title: 'AI人工智能',
    subTitle: 'AIGC | ChatGPT | LLM',
    icon: 'i-streamline-plump:web-remix',
    url: 'https://class.imooc.com/sale/pgmaths?mc_marking=22f1a4480f55bcb6a666d3563d26cbf5&mc_channel=syjptx14'
  },
  {
    title: 'AI人工智能',
    subTitle: 'AIGC | ChatGPT | LLM',
    icon: 'i-streamline-plump:web-remix',
    url: 'https://class.imooc.com/sale/pgmaths?mc_marking=22f1a4480f55bcb6a666d3563d26cbf5&mc_channel=syjptx14'
  },
  {
    title: 'AI人工智能',
    subTitle: 'AIGC | ChatGPT | LLM',
    icon: 'i-streamline-plump:web-remix',
    url: 'https://class.imooc.com/sale/pgmaths?mc_marking=22f1a4480f55bcb6a666d3563d26cbf5&mc_channel=syjptx14'
  },
  {
    title: 'AI人工智能',
    subTitle: 'AIGC | ChatGPT | LLM',
    icon: 'i-streamline-plump:web-remix',
    url: 'https://class.imooc.com/sale/pgmaths?mc_marking=22f1a4480f55bcb6a666d3563d26cbf5&mc_channel=syjptx14'
  },
  {
    title: 'AI人工智能',
    subTitle: 'AIGC | ChatGPT | LLM',
    icon: 'i-streamline-plump:web-remix',
    url: 'https://class.imooc.com/sale/pgmaths?mc_marking=22f1a4480f55bcb6a666d3563d26cbf5&mc_channel=syjptx14'
  },
  {
    title: 'AI人工智能',
    subTitle: 'AIGC | ChatGPT | LLM',
    icon: 'i-streamline-plump:web-remix',
    url: 'https://class.imooc.com/sale/pgmaths?mc_marking=22f1a4480f55bcb6a666d3563d26cbf5&mc_channel=syjptx14'
  }
]

const lessons = [
  {
    title: '前端高级工程师（大前端）',
    subTitle: '技术成长&值也颇具“双高体系，深度打通”全栈 + 全流程 + 多端+ 提效+AI赋能',
    url: 'https://class.imooc.com/sale/fesenior',
    image: front
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '技术成长&值也颇具“双高体系，深度打通”全栈 + 全流程 + 多端+ 提效+AI赋能',
    url: 'https://class.imooc.com/sale/fesenior',
    image: nestjs
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '技术成长&值也颇具“双高体系，深度打通”全栈 + 全流程 + 多端+ 提效+AI赋能',
    url: 'https://class.imooc.com/sale/fesenior',
    image: small
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '技术成长&值也颇具“双高体系，深度打通”全栈 + 全流程 + 多端+ 提效+AI赋能',
    url: 'https://class.imooc.com/sale/fesenior',
    image: project
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '技术成长&值也颇具“双高体系，深度打通”全栈 + 全流程 + 多端+ 提效+AI赋能',
    url: 'https://class.imooc.com/sale/fesenior',
    image: book
  },
  {
    title: '前端高级工程师（大前端）',
    subTitle: '技术成长&值也颇具“双高体系，深度打通”全栈 + 全流程 + 多端+ 提效+AI赋能',
    url: 'https://class.imooc.com/sale/fesenior',
    image: blog
  }
]

function handleSwiperChange(e: Swiper) {
  console.log('🚀 ~ handleSwiperChange ~ e:', e)
  const index = e.activeIndex
  selectItem.value = items[index]
}

const partners = ref([
  'https://wayearn.static.toimc.com/partner/logo1.png',
  'https://wayearn.static.toimc.com/partner/logo2.png',
  'https://wayearn.static.toimc.com/partner/logo8.png',
  'https://wayearn.static.toimc.com/partner/logo5.png',
  'https://wayearn.static.toimc.com/partner/logo6.png',
  'https://wayearn.static.toimc.com/partner/logo7.png'
])
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

<style lang="scss" scoped>
.box {
  &:hover {
    :deep(.card) {
      p {
        color: white;
      }
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>
