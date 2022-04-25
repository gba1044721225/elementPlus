<template>
  <el-breadcrumb class="breadcrumb-path" separator="/">
    <el-breadcrumb-item
      :to="{ path: item.path == '/layout' ? '/layout/users' : item.path }"
      v-for="item in pathName"
      :key="item.name"
      @click="changePath(item.name)"
      >{{ item.name }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import mitter from '@/util/eventBus/mitter'
const route = useRoute()
const pathName = ref([])
// console.log(route)
watch(
  () => route.matched,
  (newVal, oldVal) => {
    pathName.value = [...newVal]
    // console.log(pathName)
  },
  {
    immediate: true,
    deep: true
  }
)
const changePath = (path) => {
  if (path === 'layout') path = 'users'
  sessionStorage.setItem('path', path)
  mitter.emit('pathChange', path)
}
</script>

<style scoped lang="scss">
.breadcrumb-path {
  margin-left: 20px;
}
</style>
