<script setup lang="ts">
const errorStore = useErrorStore()

onErrorCaptured((error) => {
  errorStore.setError({ error })
})

onMounted(() => {
  useAuthStore().trackAuthChanges()
})

const { user } = storeToRefs(useAuthStore())

const AuthLayout = defineAsyncComponent(() => import('./components/Layout/main/AuthLayout.vue'))
const GuestLayout = defineAsyncComponent(() => import('./components/Layout/main/GuestLayout.vue'))

useMeta({
  title: 'Pulse',
})
</script>

<template>
  <metainfo></metainfo>

  <Transition name="fade" mode="out-in">
    <Component :is="user ? AuthLayout : GuestLayout" :key="user?.id">
      <AppErrorPage v-if="errorStore.activeError" />

      <RouterView v-else v-slot="{ Component, route }">
        <Transition name="fade" mode="out-in">
          <div class="w-100" :key="route.path">
            <Suspense v-if="Component" :timeout="0">
              <Component :is="Component">Hi</Component>

              <template #fallback>
                <div class="loading-overlay d-flex justify-content-center align-items-center">
                  <iconify-icon icon="lucide:loader-circle" class="fs-1 spin"></iconify-icon>
                </div>
              </template>
            </Suspense>
          </div>
        </Transition>
      </RouterView>
    </Component>
  </Transition>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1050;

  display: flex;
  justify-content: center;
  align-items: center;
}

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
