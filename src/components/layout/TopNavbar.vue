<script setup lang="ts">
import { ref } from 'vue'

const { profile } = storeToRefs(useAuthStore())

const isDark = ref(true)

const toggleDark = () => {
  isDark.value = !isDark.value

  document.documentElement.setAttribute('data-bs-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <nav class="p-4 d-flex align-items-center justify-content-between px-4 border-bottom">
    <!-- Search -->
    <form class="flex-grow-1 position-relative" style="max-width: 24rem">
      <div class="position-relative">
        <iconify-icon
          icon="lucide:search"
          class="position-absolute top-50 start-0 translate-middle-y ms-1 text-muted"
        ></iconify-icon>

        <Input type="text" class="form-control ps-4" placeholder="Search ..." />
      </div>
    </form>

    <div class="d-flex justify-content-center align-items-center gap-2 ms-3">
      <!-- Theme Button -->
      <button
        @click="toggleDark()"
        class="btn bg-transparent d-flex justify-content-center align-items-center"
        style="width: 2rem; height: 2rem"
      >
        <Transition name="scale" mode="out-in">
          <iconify-icon v-if="isDark" icon="lucide:sun"></iconify-icon>
          <iconify-icon v-else icon="lucide:moon"></iconify-icon>
        </Transition>
      </button>

      <div style="width: 2rem">
        <!-- Dropdown -->
        <div class="dropdown" v-if="profile">
          <a
            class="d-flex align-items-center text-decoration-none"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
          >
            <!-- Avatar -->
            <img
              :src="
                profile.avatar_url || 'https://avatars.githubusercontent.com/u/6128107?s=200&v=4'
              "
              :alt="`${profile.full_name} profile picture`"
              class="rounded-circle border border-secondary bg-dark"
              width="40"
              height="40"
            />
          </a>

          <ul class="dropdown-menu dropdown-menu-end">
            <li><h6 class="dropdown-header">My Account</h6></li>
            <li><hr class="dropdown-divider" /></li>

            <RouterLink
              :to="{
                name: '/users/[username]',
                params: { username: profile.username },
              }"
              class="w-full h-full"
            >
              Profile
            </RouterLink>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
/* Avatar */
.dropdown img {
  transition: transform 0.15s ease;
}

.dropdown img:hover {
  transform: scale(1.1);
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.1s;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.3);
}
</style>
