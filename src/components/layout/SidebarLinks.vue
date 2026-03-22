<script setup lang="ts">
interface LinkProp {
  title: string
  to?: string
  icon: string
}

defineProps<{
  links: LinkProp[]
}>()

const emits = defineEmits<{
  actionClicked: [string]
}>()

const emitActionClicked = (linkTitle: string) => {
  emits('actionClicked', linkTitle)
}

const { menuOpen } = useMenu()
</script>

<template>
  <template v-for="link in links" :key="link.title">
    <RouterLink
      v-if="link.to"
      exact-active-class="text-primary bg-secondary bg-opacity-10"
      :to="link.to"
      class="sidebar-link"
      :class="{
        'justify-content-start': menuOpen,
        'justify-content-center': !menuOpen,
      }"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>

      <span
        class="sidebar-text"
        :class="{
          'd-inline': menuOpen,
          'd-none': !menuOpen,
        }"
        >{{ link.title }}</span
      >
    </RouterLink>

    <div
      v-else
      class="sidebar-link"
      @click="emitActionClicked(link.title)"
      :class="{
        'justify-content-start': menuOpen,
        'justify-content-center': !menuOpen,
      }"
    >
      <iconify-icon :icon="link.icon"></iconify-icon>

      <span
        class="sidebar-text"
        :class="{
          'd-inline': menuOpen,
          'd-none': !menuOpen,
        }"
      >
        {{ link.title }}
      </span>
    </div>
  </template>
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
  transition: color 0.15s ease;
  cursor: pointer;
}

.sidebar-link:hover {
  color: var(--bs-primary);
}

.sidebar-text {
  white-space: nowrap;
}
</style>
