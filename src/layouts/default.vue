<template>
  <div class="fixed top-0 w-full z-50" :class="{ 'bg-black opacity-30 shadow-lg': y > 0 }">
    <Container>
      <img src="/512x512.png" alt="top icon" class="w-14 h-full lt-sm:mx-auto" />
      <div
        class="display-none i-ic-round-menu text-gray-300 text-2xl absolute cursor-pointer right-5 top-3 hover:text-white lt-sm:display-block"
        @click="toggle()"
      ></div>
      <Menu v-show="show" class="lt-sm:(absolute top-14 right-0 w-full flex-col)"></Menu>
    </Container>
  </div>
  <router-view></router-view>
  <div class="h-[800px]"></div>
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

<style scoped></style>
