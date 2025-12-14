<script setup lang="ts">
import TopNavbar from './components/layout/TopNavBar.vue'
import Sidebar from './components/layout/Sidebar.vue'
</script>

<template>
  <!-- Sidebar -->
  <Sidebar />

  <!-- Main content -->
  <div class="main-content">
    <!-- Top Navbar -->
    <TopNavbar />

    <main>
      <RouterView />
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
