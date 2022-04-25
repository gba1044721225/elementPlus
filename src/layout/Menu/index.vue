<template>
  <!-- router模式通过 :index的属性来跳转 -->
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    text-color="#fff"
    :default-active="activeSubMenu"
    :collapse-transition="true"
    @open="handleOpen"
    @close="handleClose"
    unique-opened
    :collapse="!$store.state.menu.isOpen"
    ref="menuRef"
  >
    <nav-menu :list="navList"></nav-menu>
  </el-menu>
</template>

<script setup>
import NavMenu from './NavMenu.vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'

import variables from '../../styles/variables.scss'
import { menuRequest } from '../../api/menu'
import { routerPackage } from './routerPackage'
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { setIcon } from './setIcon'
import mitter from '@/util/eventBus/mitter'
const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath)

  sessionStorage.setItem('path', key)
}
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath)
}

const router = useRouter()
const store = useStore()
const navList = ref(null)
const activeSubMenu = ref(null)
const getMenu = async () => {
  const res = await menuRequest()
  setIcon(res)
  navList.value = res
  // console.log(res)

  //记录菜单，生成动态路由
  sessionStorage.setItem('menuList', JSON.stringify(res))
  store.commit('menu/getMenuList', res)
  routerPackage(store.state.menu.menuList)

  //默认激活的选项
  activeSubMenu.value = sessionStorage.getItem('path') || res[0].path
  sessionStorage.getItem('path')
    ? router.push(`/layout/${sessionStorage.getItem('path')}`)
    : router.push('/layout/users')
}
getMenu()

//获取ref
const menuRef = ref(null)
mitter.on('pathChange', (item) => {
  console.log(item)
  menuRef.value.open(item)
})
// const navList = [
//   {
//     authName: '一级导航 1'
//   },
//   {
//     authName: '一级导航 2',
//     children: [
//       { authName: '二级导航 2-1' },
//       {
//         authName: '二级导航 2-2',
//         children: [{ authName: '三级导航 2-2-1' }, { authName: '三级导航 2-2-2' }]
//       },
//       { authName: '二级导航 2-2' }
//     ]
//   },
//   {
//     authName: '一级导航 3'
//   }
// ]
</script>

<style scoped></style>
