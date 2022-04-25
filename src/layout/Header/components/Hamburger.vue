<template>
  <div>
    <svg-icon
      :icon="isOpen ? 'hamburger-opened' : 'hamburger-closed'"
      class="hamburger"
      @click="changeOpenType"
    ></svg-icon>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const isOpen = ref(store.state['menu']['isOpen'])
const changeOpenType = () => {
  store.commit('menu/setOpen')
  store.commit('menu/setSlideWidth')
}
</script>

<style scoped lang="scss"></style>
