import store from '../../store'
const iconList = ['user', 'setting', 'shop', 'tickets', 'pie-chart']
let key = 0
const doLoop = (routerItem) => {
  //   console.log(routerItem)
  routerItem.icon = iconList[key]
  if (routerItem.children && routerItem.children.length != 0) {
    setIcon(routerItem.children)
  }
}

export const setIcon = (routers) => {
  //   console.log(iconList)

  //   console.log(iconList[key])
  routers.forEach((routerItem) => {
    doLoop(routerItem)
  })
  key++
  //   console.log(key)
}
