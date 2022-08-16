<template>
  <template v-for="(item, keyValue) in navList" :key="keyValue">
    <!-- 有child就显示child的下拉型菜单，有小箭头 -->
    <el-sub-menu
      :index="item.path"
      :key="item.authName"
      v-if="item.children && item.children.length != 0"
    >
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ $t(`menus.${item.path}`) }}</span>
      </template>
      <!-- 再次调用自身组件，传入子集，进行循环递归调用 -->
      <Menu :list="item.children"></Menu>
    </el-sub-menu>

    <!-- 没有children,就显示单个目录，没有小箭头 -->

    <el-menu-item
      v-else
      :index="item.path"
      :key="item.authName + '1'"
      @click="handleSelect(item)"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ $t(`menus.${item.path}`) }}</span>
    </el-menu-item>
  </template>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'

import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
// console.log(props)

const props = defineProps({
  list: {
    required: true
  }
})

const navList = computed({
  get() {
    return props.list
  }
})

const router = useRouter()
const handleSelect = (item) => {
  console.log(item)
  router.push({
    path: `/layout/${item.path}`
  })
}
</script>

<style scoped></style>
