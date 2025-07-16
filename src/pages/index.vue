<template>
  <div>home</div>
</template>

<script setup lang="ts">
import { registerSW } from 'virtual:pwa-register'
onMounted(() => {
  registerSW({
    immediate: true,
    // onNeedRefresh() {
    //   console.log('Need Refresh!')
    // },
    onRegisteredSW(_url, registration) {
      setInterval(() => {
        registration?.update()
      }, 3600 * 1000)
    }
  })
})
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  layout: default
</route>
