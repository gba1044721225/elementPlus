<template>
  <div class="app-wrapper">
    <el-container>
      <el-aside :width="storeState.slideWidth" class="sidebar-container">
        <Menu></Menu>
      </el-aside>
      <el-container
        class="container"
        :class="{ hidderContainer: !$store.state.menu.isOpen }"
      >
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Menu from './Menu'
import Header from './Header'
import { ref, computed } from 'vue'
import { mapState, useStore } from 'vuex'
const store = useStore()
const storeState = ref({})
const storeStateFn = mapState('menu', ['slideWidth'])
Object.keys(storeStateFn).forEach((keyFn) => {
  storeState.value[keyFn] = computed(
    storeStateFn[keyFn].bind({ $store: store })
  )
})
</script>

<style scoped lang="scss">
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  &.hidderContainer {
    width: calc(100% - $hideSideBarWidth);
  }
}
::v-deep .el-header {
  padding: 0;
}
</style>
