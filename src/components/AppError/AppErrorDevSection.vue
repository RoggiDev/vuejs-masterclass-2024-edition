<script setup lang="ts">
defineProps<{
  message: string
  customCode: number
  code: string
  statusCode: number
  hint: string | null
  details: string
}>()
</script>

<template>
  <div>
    <iconify-icon icon="lucide:triangle-alert" class="error-icon text-danger" />

    <h1 class="error-code text-secondary">{{ customCode || code }}</h1>

    <p class="error-code" v-if="statusCode">Status Code: {{ statusCode }}</p>

    <p class="error-msg">{{ message }}</p>

    <p v-if="hint">{{ hint }}</p>

    <p v-if="details">{{ details }}</p>

    <div class="error-footer">
      <p class="error-footer-text text-secondary-emphasis">
        You'll find lots to explore on the home page.
      </p>

      <RouterLink to="/">
        <button class="btn btn-primary btn-sm px-4">Back to homepage</button>
      </RouterLink>
    </div>
  </div>
</template>
