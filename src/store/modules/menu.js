import variables from '../../styles/variables.scss'
export default {
  namespaced: 'menu',
  state() {
    return {
      menuList: null,
      slideWidth: variables.sideBarWidth,
      isOpen: true
    }
  },
  mutations: {
    getMenuList(state, payload) {
      state.menuList = JSON.parse(JSON.stringify(payload))
    },
    setOpen(state) {
      state.isOpen = !state.isOpen
    },
    setSlideWidth(state) {
      if (state.isOpen) {
        state.slideWidth = variables.sideBarWidth
      } else {
        state.slideWidth = variables.hideSideBarWidth
      }
    }
  }
}
