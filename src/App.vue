<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'
</script>

<template>
  <nav class="p-4 d-flex align-items-center justify-content-between px-4 border-bottom">
    <!-- Search -->
    <form class="flex-grow-1" style="max-width: 24rem">
      <div class="position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="m21 21l-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </g>
        </svg>

        <Input type="text" class="form-control" placeholder="Search ..." />
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
