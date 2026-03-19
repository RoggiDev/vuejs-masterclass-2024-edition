<script setup lang="ts">
const value = defineModel()

defineEmits(['commit'])
</script>

<template>
  <input
    class="w-100 p-1 bg-transparent border-0 custom-focus"
    type="text"
    v-model="value"
    @blur="$emit('commit')"
    @keypress.enter="($event.target as HTMLInputElement).blur()"
  />
</template>

<style scoped>
.custom-focus:focus {
  outline: none;
  box-shadow: none; /* Bootstrap usa box-shadow en focus */
  border: none;
  background-color: #343a40; /* equivalente a gray-800 */
  border-radius: 0.375rem; /* rounded-md */
}
</style>
