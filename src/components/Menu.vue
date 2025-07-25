<template>
  <div :class="['flex', 'lt-sm:(absolute top-14 right-0 w-full flex-col)']">
    <router-link class="item" to="/">
      <span>产品</span>
      <i class="i-simple-line-icons:arrow-right"></i>
    </router-link>
    <a class="item" href="http://www.imooc.com" target="_blank">
      <span>社区</span>
      <i class="i-simple-line-icons:arrow-right"></i>
    </a>
    <router-link class="item" to="/study">
      <span>学习</span>
      <i class="i-simple-line-icons:arrow-right"></i>
    </router-link>
    <router-link class="item" to="/about">
      <span>关于</span>
      <i class="i-simple-line-icons:arrow-right"></i>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.item {
  @apply relative text-white text-xl px-8 py-2 font-300 cursor-pointer lt-sm:(self-start w-full flex items-center justify-between);
  i {
    @apply display-none;
  }
  &:hover {
    @apply font-500 lt-sm:font-300;
    i {
      animation: moveToRight 0.3s;
      @apply lt-sm:display-block;
    }
    &:after {
      @apply content-empty absolute bg-gray-100 w-8 h-[1px] bottom-0 left-[calc(50%-1rem)] lt-sm:display-none;
    }
  }
}
@keyframes moveToRight {
  0% {
    opacity: 0;
    transform: translateX(-0.5rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
