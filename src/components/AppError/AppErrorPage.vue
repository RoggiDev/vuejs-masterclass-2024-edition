<script setup lang="ts">
const router = useRouter()

const errorStore = useErrorStore()

const error = ref(errorStore.activeError)

const message = ref('')
const customCode = ref(0)

const details = ref('')
const code = ref('')
const hint = ref('')
const statusCode = ref(0)

if (error.value && !('code' in error.value)) {
  message.value = error.value.message
  customCode.value = error.value.customCode ?? 0
}

if (error.value && 'code' in error.value) {
  message.value = error.value.message
  details.value = error.value.details
  hint.value = error.value.hint
  code.value = error.value.code
  statusCode.value = error.value.statusCode ?? 0
}

router.afterEach(() => {
  errorStore.activeError = null
})
</script>

<template>
  <section class="error d-flex justify-content-center align-items-center text-center">
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
  </section>
</template>

<style scoped>
.error {
  min-height: 90vh;
  padding: 2.5rem;
  margin-top: -5rem;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-code {
  font-weight: 800;
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

.error-msg {
  font-weight: 800;
  font-size: 1.75rem;
}

.error-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.5rem;
  font-weight: 300;
}

.error-footer-text {
  font-size: 1.125rem;
}

p {
  margin: 0.5rem 0;
}
</style>
