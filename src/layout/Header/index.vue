<template>
  <div class="nav-container">
    <Hamburger />
    <Breadcrumb />
  </div>
</template>

<script setup>
import Hamburger from './components/Hamburger.vue'
import Breadcrumb from './components/Breadcrumb.vue'
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
}
</style>
