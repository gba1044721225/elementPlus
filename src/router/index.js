import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../layout/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: () => import('../views/NotFound/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from) => {
//   console.log(to)
// })

export default router
