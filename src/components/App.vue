<template>
  <div class="app-container">
    <NButton secondary class="open-button" @click="appStore.openDrawer"> 🧚</NButton>
    <NDrawer v-model:show="appStore.drawerActive" placement="right" width="min(100%, 450px)">
      <NDrawerContent title="缇宝" closable>
        <DrawerBody />
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<script setup>
import { NButton, NDrawer, NDrawerContent } from 'naive-ui'
import DrawerBody from '@/components/DrawerBody.vue'
import { useAppStore } from '@/store/app.js'
import { onMounted } from 'vue'

const appStore = useAppStore()

onMounted(() => {
  if (location.hostname === 'localhost') {
    appStore.openDrawer()
  }
})
</script>

<style scoped lang="less">
.app-container {
  position: relative;
  z-index: 10;

  .open-button {
    position: fixed;
    top: 4rem;
    right: 1rem;
  }
}
</style>
