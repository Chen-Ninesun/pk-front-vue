<template>
  <!-- 顶部菜单 -->
  <div
    class="fixed top-0 w-full z-50 transition-all duration-300"
    :class="[{ 'bg-black opacity-30 shadow-lg': y > 0 }, { 'lt-sm:(h-full bg-black)': show }]"
  >
    <Container>
      <img src="/512x512.png" alt="top icon" class="w-14 h-full lt-sm:mx-auto" />
      <div
        :class="[
          'display-none  text-gray-300 text-2xl absolute cursor-pointer right-5 top-3 hover:text-white lt-sm:display-block'
        ]"
        @click="toggle()"
      >
        <Transition name="rolate-icon" mode="out-in">
          <div v-if="show && flag" class="i-radix-icons:cross-2"></div>
          <div v-else class="i-ic-round-menu"></div>
        </Transition>
      </div>
      <Menu v-show="show"></Menu>
    </Container>
  </div>
  <!-- 页面切换 -->
  <router-view></router-view>
  <!-- 底部导航 -->
  <div>
    <div class="mobile-hide">
      <DefaultFooter icp="鄂ICP备19018123号-1"></DefaultFooter>
    </div>
    <div class="display-none mobile">
      <MobileNavbar></MobileNavbar>
    </div>
  </div>
</template>

<script setup lang="ts">
const { y } = useWindowScroll()
const [show, toggle] = useToggle(false)

const flag = ref(false)
useResizeObserver(document.body, () => {
  const width = window.innerWidth
  if (width >= 640) {
    toggle(true)
    flag.value = false
  } else {
    if (flag.value) return
    flag.value = true
    toggle(false)
  }
})
</script>

<style scoped lang="scss">
.rolate-icon-enter-active {
  animation: scaleYin 0.3s;
}
.rolate-icon-leave-active {
  animation: scaleYin 0.3s reverse;
}
@keyframes scaleYin {
  0% {
    opacity: 0;
    transform: scaleY(0);
  }
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
}
</style>
