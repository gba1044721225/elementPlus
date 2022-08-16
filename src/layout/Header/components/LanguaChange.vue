<template>
  <el-dropdown @command="handleCommand" id="first-element-introduction">
    <span class="el-dropdown-link">
      <svg-icon icon="language" class="svg-container"></svg-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="cn" :disabled="isCurrentLua == 'cn'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="isCurrentLua == 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const i18n = useI18n()
// console.log(i18n)
const isCurrentLua = computed(() => {
  return i18n.locale.value
})
const handleCommand = (e) => {
  i18n.locale.value = e
  localStorage.setItem('languageCode', e)
  console.log(i18n)
}
</script>

<style scoped lang="scss">
.el-dropdown {
  margin: 50px;
}
.svg-container {
  width: 30px;
  height: 30px;
}
</style>
