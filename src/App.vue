<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'
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

    <!-- Dropdown -->
    <div class="dropdown ms-3">
      <a
        class="d-flex align-items-center text-decoration-none"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        <!-- Avatar -->
        <img
          src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4"
          alt="@radix-vue"
          class="rounded-circle"
          width="40"
          height="40"
        />
      </a>

      <ul class="dropdown-menu dropdown-menu-end">
        <li><h6 class="dropdown-header">My Account</h6></li>
        <li><hr class="dropdown-divider" /></li>

        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><a class="dropdown-item" href="#">Billing</a></li>
        <li><a class="dropdown-item" href="#">Team</a></li>
        <li><a class="dropdown-item" href="#">Subscription</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
