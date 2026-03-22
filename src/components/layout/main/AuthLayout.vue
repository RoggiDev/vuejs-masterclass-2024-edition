<script setup lang="ts">
import { menuKey } from '@/utils/injectionKeys'

const { pageData } = storeToRefs(usePageStore())

const taskSheetOpen = ref(false)

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

provide(menuKey, {
  menuOpen,
  toggleMenu,
})
</script>

<template>
  <div>
    <!-- Sidebar -->
    <Sidebar @taskClicked="taskSheetOpen = true" />

    <AppNewTask v-model="taskSheetOpen" />

    <!-- Main content -->
    <div
      class="main-content d-flex flex-column"
      :class="{ 'content-expanded': menuOpen, 'content-collapsed': !menuOpen }"
    >
      <!-- Top Navbar -->
      <TopNavbar />

      <main class="flex-grow-1 p-4 p-lg-5">
        <div class="d-flex align-items-center mb-4">
          <h1>{{ pageData.title }}</h1>
        </div>

        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  transition: margin-left 0.25s ease-in-out;
}

/* Sidebar colapsado */
.content-collapsed {
  margin-left: 5rem;
}

/* Sidebar expandido */
.content-expanded {
  margin-left: 13rem;
}
</style>
