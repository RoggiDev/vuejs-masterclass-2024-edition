<script setup lang="ts">
interface LinkProp {
  title: string
  to: string
  icon: string
}

defineProps<{
  links: LinkProp[]
}>()
</script>

<template>
  <RouterLink
    exact-active-class="text-primary bg-secondary bg-opacity-10"
    v-for="link in links"
    :key="link.title"
    :to="link.to"
    class="sidebar-link"
  >
    <iconify-icon :icon="link.icon"></iconify-icon>

    <span class="sidebar-text">{{ link.title }}</span>
  </RouterLink>
</template>

<style scoped>
.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  margin: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: var(--bs-secondary-color);
  justify-content: center;
  transition: color 0.15s ease;
}

.sidebar-link:hover {
  color: var(--bs-primary);
}

.sidebar-text {
  display: none;
  white-space: nowrap;
}

@media (min-width: 992px) {
  .sidebar-link {
    justify-content: flex-start;
  }

  .sidebar-text {
    display: inline;
  }
}
</style>
