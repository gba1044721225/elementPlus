<template>
  <div class="driver" @click="handlerDriver">
    <svg-icon icon="guide" class="driver-icon"></svg-icon>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const handlerDriver = () => {
  import('./driver').then((driver) => {
    driver.default.start()
  })
}
</script>

<style scoped lang="scss">
.driver {
  margin-right: 50px;
  .driver-icon {
    width: 30px;
    height: 30px;
  }
}
</style>
