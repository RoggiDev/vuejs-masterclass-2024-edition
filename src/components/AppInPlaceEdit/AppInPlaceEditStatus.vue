<script setup lang="ts">
const value = defineModel<'in-progress' | 'completed'>()

const emit = defineEmits(['commit'])

const { readonly = false } = defineProps<{
  readonly?: boolean
}>()

const toggleValue = () => {
  if (readonly) return

  value.value = value.value === 'completed' ? 'in-progress' : 'completed'
  emit('commit')
}
</script>

<template>
  <div class="fs-4 cursor-pointer" @click="toggleValue">
    <Transition mode="out-in">
      <iconify-icon v-if="value === 'completed'" icon="lucide:circle-check" class="text-success" />
      <iconify-icon v-else icon="lucide:circle-dot" class="text-secondary" />
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.1s;
}

.v-enter-from,
.v-leave-to {
  transform: scale(0.3);
}
</style>
