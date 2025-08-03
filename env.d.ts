/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/vue" />

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
