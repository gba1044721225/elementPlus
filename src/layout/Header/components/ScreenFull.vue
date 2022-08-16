<template>
  <div
    class="screen-full"
    @click="handlerScreen"
    id="second-element-introduction"
  >
    <svg-icon
      class="svg-container"
      :icon="isFull ? 'exit-fullscreen' : 'fullscreen'"
    ></svg-icon>
  </div>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onUnmounted } from 'vue'
// console.log(screenfull)
const isFull = ref(false)
const handlerScreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
const changeIsFull = () => {
  isFull.value = screenfull.isFullscreen ? true : false
  //   console.log(isFull)
}
onMounted(() => {
  screenfull.on('change', changeIsFull)
})
onUnmounted(() => {
  screenfull.off('change', changeIsFull)
})
</script>

<style scoped lang="scss">
.svg-container {
  width: 30px;
  height: 30px;
}
</style>
