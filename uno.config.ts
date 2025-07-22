// uno.config.ts
import { defineConfig } from 'unocss'
// import presetWind from '@unocss/preset-wind'
import { presetWind, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  // 全局自定义样式类
  shortcuts: {
    'bg-image': 'w-full h-full bg-cover bg-no-repeat bg-center-top'
  },
  presets: [
    presetWind(), // 使用Unocss的预设风格（可以使用Tailwind CSS预设样式）
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup() // 支持媒介查询()写法
  ],
  theme: {
    colors: {
      'main': '#4e98f4'
    }
  }
})
