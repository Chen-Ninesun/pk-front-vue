import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
// import '@unocss/reset/normalize.css'
// 使用Unocss的样式重置
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { createHead } from '@unhead/vue'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
