import router from '../../router'
// console.log(router)
export const routerPackage = (routers) => {
  if (routers == null) return
  routers.filter((itemRouter) => {
    router.addRoute('layout', {
      path: `${itemRouter.path}`,
      name: itemRouter.path,
      component: () => import(`@/views/Layouts/${itemRouter.path}`)
    })
    // 是否存在子集
    if (itemRouter.children && itemRouter.children.length) {
      routerPackage(itemRouter.children)
    }
    return true
  })
}
