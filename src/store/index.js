import { createStore } from 'vuex'
import app from './modules/app'
import menu from './modules/menu'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    menu
  }
})
