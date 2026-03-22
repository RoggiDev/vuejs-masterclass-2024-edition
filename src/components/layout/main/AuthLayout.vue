<script setup lang="ts">
import AppNewTask from '@/components/AppNew/AppNewTask.vue'

const { pageData } = storeToRefs(usePageStore())

const taskSheetOpen = ref(false)
</script>

<template>
  <!-- Sidebar -->
  <Sidebar @taskClicked="taskSheetOpen = true" />

  <AppNewTask v-model="taskSheetOpen" />

  <!-- Main content -->
  <div class="main-content d-flex flex-column">
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
  margin-left: 4rem;
  transition: margin-left 0.2s ease;
}

@media (min-width: 992px) {
  .main-content {
    margin-left: 13rem;
  }
}
</style>
