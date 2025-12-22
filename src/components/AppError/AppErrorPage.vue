<script setup lang="ts">
import AppErrorDevSection from './AppErrorDevSection.vue'

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
    <AppErrorDevSection :message :customCode :code :statusCode :hint :details />
  </section>
</template>

<style scoped>
.error {
  min-height: 90vh;
  padding: 2.5rem;
  margin-top: -5rem;
}

:deep(.error-icon) {
  font-size: 4rem;
  margin-bottom: 1rem;
}

:deep(.error-code) {
  font-weight: 800;
  font-size: 4rem;
  margin-bottom: 0.5rem;
}

:deep(.error-msg) {
  font-weight: 800;
  font-size: 1.75rem;
}

:deep(.error-footer) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 1.5rem;
  font-weight: 300;
}

:deep(.error-footer-text) {
  font-size: 1.125rem;
}

:deep(p) {
  margin: 0.5rem 0;
}
</style>
