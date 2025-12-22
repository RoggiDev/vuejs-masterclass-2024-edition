<script setup lang="ts">
const props = defineProps<{
  message: string
  customCode: number
  statusCode: number
  isCustomError: boolean
}>()

const error = ref({
  code: 500,
  msg: 'Ops, something went wrong!',
})

if (props.isCustomError) {
  error.value.code = props.customCode
  error.value.msg = props.message
}

if (props.statusCode === 406) {
  error.value.code = 404
  error.value.msg = "Sorry, we couldn't find this page"
}
</script>

<template>
  <div>
    <iconify-icon icon="lucide:triangle-alert" class="error-icon text-danger" />

    <h1 class="error-code text-secondary">{{ error.code }}</h1>

    <p class="error-msg">{{ error.msg }}</p>

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
