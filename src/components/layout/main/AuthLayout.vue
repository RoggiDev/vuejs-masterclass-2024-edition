<script setup lang="ts">
import AppNewTask from '@/components/AppNew/AppNewTask.vue'

const { pageData } = storeToRefs(usePageStore())

const taskSheetOpen = ref(false)

const { menuOpen } = useMenu()
</script>

<template>
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
