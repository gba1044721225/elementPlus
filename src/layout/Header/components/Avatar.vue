<template>
  <div class="my-avatar">
    <el-dropdown id="third-element-introduction">
      <span class="el-dropdown-link">
        <el-avatar
          class="my-avatar"
          shape="square"
          size="large"
          src="https://img0.baidu.com/it/u=325674188,3280397254&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
const logout = () => {
  store.commit('app/logout')
}
</script>

<style scoped lang="scss">
// .my-avatar {
//   display: flex;
//   align-items: center;
//   flex: 1;
//   justify-content: flex-end;
// }
</style>
