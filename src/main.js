import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import 'element-plus/dist/index.css'
import './router/permission'
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
Object.keys(Icons).forEach((iconItem) => {
  app.component(iconItem, Icons[iconItem])
})
// console.log(app)
app.use(SvgIcon)
app.use(store).use(router).mount('#app')
