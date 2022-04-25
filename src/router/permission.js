import router from './index'
import store from '../store'
import { routerPackage } from '../layout/Menu/routerPackage'

const whilteList = ['/login']
if (store.state.menu.menuList == null) {
  routerPackage(JSON.parse(sessionStorage.getItem('menuList')))
}

router.beforeEach((to, from) => {
  if (store.state.app.token) {
    if (to.path == '/login') {
      return {
        path: '/'
      }
    }
  } else {
    if (!whilteList.includes(to.path)) {
      return {
        path: '/login'
      }
    }
  }
})
