<script setup lang="ts">
const value = defineModel<'in-progress' | 'completed'>()
</script>

<template>
  <div class="fs-4 cursor-pointer">
    <iconify-icon v-if="value === 'completed'" icon="lucide:circle-check" class="text-success" />
    <iconify-icon v-else icon="lucide:circle-dot" class="text-secondary" />
  </div>
</template>
