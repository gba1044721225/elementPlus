import { login } from '@/api/login'
import router from '@/router'
import { setTokenTime } from '@/util/logout/timePass'

export default {
  namespaced: 'app',
  state() {
    return {
      token: localStorage.getItem('token') || ''
    }
  },
  mutations: {
    setToken(state, payload) {
      localStorage.setItem('token', payload)
      state.token = payload
    },
    logout(state) {
      state.token = ''
      localStorage.clear()
      sessionStorage.clear()
      router.replace({
        path: '/login'
      })
    }
  },
  actions: {
    async getLogin(context, payload) {
      let res = await login(payload)
      // console.log(res)
      context.commit('setToken', res.token)
      setTokenTime()
      router.replace({
        path: '/'
      })
      return res
    }
  }
}
