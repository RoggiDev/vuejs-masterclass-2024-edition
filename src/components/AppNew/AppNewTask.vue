<script setup lang="ts">
const sheetOpen = defineModel<boolean>()
</script>

<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    :class="{ show: sheetOpen }"
    style="visibility: visible"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Create new task</h5>
      <button type="button" class="btn-close" @click="sheetOpen = false"></button>
    </div>

    <div class="offcanvas-body">
      <p>Content</p>
    </div>
  </div>

  <!-- Backdrop -->
  <div v-if="sheetOpen" class="offcanvas-backdrop fade show" @click="sheetOpen = false"></div>
</template>
