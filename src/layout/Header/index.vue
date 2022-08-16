<template>
  <div class="nav-container">
    <Hamburger />
    <Breadcrumb />
    <div class="nav-right">
      <MyDriver />
      <ScreenFull />
      <LanguaChange />
      <Avatar />
    </div>
  </div>
</template>

<script setup>
import Hamburger from './components/Hamburger.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Avatar from './components/Avatar.vue'
import LanguaChange from './components/LanguaChange.vue'
import ScreenFull from './components/ScreenFull.vue'
import MyDriver from './components/driver'
</script>

<style scoped lang="scss">
.nav-container {
  //   background: red;
  height: 60px;
  box-sizing: border-box;
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.1);

  .nav-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
