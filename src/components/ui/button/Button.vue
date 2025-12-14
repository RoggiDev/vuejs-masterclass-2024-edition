<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'dark' | 'outline-secondary'
type Size = 'sm' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
  }>(),
  {
    variant: 'secondary',
  },
)

const classes = computed(() => [
  'btn',
  `btn-${props.variant}`,
  props.size ? `btn-${props.size}` : '',
])
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
