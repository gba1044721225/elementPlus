import { ElMessage } from 'element-plus'
import axios from 'axios'
import router from '../store/index'
import store from '@/store'
import { getTokenTime, isPassTime } from '@/util/logout/timePass'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000
})

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      if (isPassTime()) {
        store.commit('app/logout')
        return Promise.reject(new Error('token失效'))
      }
    }
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (err) => {
    return Promise.reject(new Error('错误'))
  }
)

service.interceptors.response.use(
  (config) => {
    // console.log(config, 'config')
    const { meta, data } = config.data
    // console.log(data)
    // console.log(meta)
    if (meta.status == 200) {
      return data
    } else {
      ElMessage({
        message: meta.msg,
        type: 'warning'
      })
      if (meta.status == 400) {
        localStorage.removeItem('token')
        router.repace('/login')
      }
      return Promise.reject(new Error(meta.msg))
    }
  },
  (error) => {
    console.log(error)
    error.response &&
      ElMessage({
        message: error.response.data,
        type: 'warning'
      })
    return Promise.reject(new Error('请求失败'))
  }
)

export default service
