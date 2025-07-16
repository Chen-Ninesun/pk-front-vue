import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动化路由生成
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'
// 核心库自动引入
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
// 组件自动引入
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { VitePWA } from 'vite-plugin-pwa'

import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    vueJsx(),
    UnoCSS(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.vue\.[tj]sx?\?vue/, // .vue (vue-loader with experimentalInlineMatchResource enabled)
        /\.md$/ // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        VueRouterAutoImports,
        '@vueuse/core'
      ],
      // dts: './auto-imports.d.ts', // 生成对应文件后可注释
      eslintrc: {
        enabled: false, // 启用 ESLint 配置生成
        filepath: './.eslintrc-auto-import.json' // 生成的 ESLint 配置文件路径
      }
    }),
    Components({
      /* options */
      resolvers: [
        ElementPlusResolver() // 集成 Element-Plus
      ],
      directoryAsNamespace: true, // 将目录名作为前缀 user/UserDialog -> UserUserDialog
      collapseSamePrefixes: true // 合并相同前缀 user/UserDialog -> UserDialog
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default'
    }),
    VitePWA({
      manifest: {
        name: 'Vite App',
        short_name: 'Vite App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate'
    }),
    viteMockServe({
      // default
      mockPath: 'mock',
      enable: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
