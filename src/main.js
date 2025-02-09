import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import AppWrapper from '@/components/AppWrapper.vue'

const app = createApp({
  render() {
    return h(AppWrapper)
  },
})
app.use(createPinia())
const divRef = document.createElement('div')
document.body.appendChild(divRef)
app.mount(divRef)
