<script setup lang="ts"></script>

<template>
  <aside class="sidebar d-flex flex-column border-end position-fixed bg-dark">
    <!-- Header -->
    <div
      class="d-flex align-items-center border-bottom px-0 px-lg-3 justify-content-center justify-content-lg-between"
      style="height: 4rem"
    >
      <button class="btn btn-sm">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </button>

      <button class="btn btn-sm">
        <iconify-icon icon="lucide:plus"></iconify-icon>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="d-flex flex-column justify-content-between flex-grow-1 py-2">
      <!-- Top links -->
      <div>
        <RouterLink to="/" class="sidebar-link">
          <iconify-icon icon="lucide:house"></iconify-icon>
          <span class="sidebar-text">Dashboard</span>
        </RouterLink>

        <RouterLink to="/projects" class="sidebar-link">
          <iconify-icon icon="lucide:building-2"></iconify-icon>
          <span class="sidebar-text">Projects</span>
        </RouterLink>

        <RouterLink to="/tasks" class="sidebar-link">
          <iconify-icon icon="lucide:badge-check"></iconify-icon>
          <span class="sidebar-text">My Tasks</span>
        </RouterLink>
      </div>

      <!-- Bottom links -->
      <div class="border-top py-3 text-center">
        <RouterLink to="/profile" class="sidebar-link">
          <iconify-icon icon="lucide:user"></iconify-icon>
          <span class="sidebar-text">Profile</span>
        </RouterLink>

        <RouterLink to="/settings" class="sidebar-link">
          <iconify-icon icon="lucide:settings"></iconify-icon>
          <span class="sidebar-text">Settings</span>
        </RouterLink>

        <RouterLink to="/signout" class="sidebar-link">
          <iconify-icon icon="lucide:log-out"></iconify-icon>
          <span class="sidebar-text">Sign out</span>
        </RouterLink>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
/* Sidebar */
.sidebar {
  width: 4rem;
  height: 100vh;
  transition: width 0.2s ease;
  z-index: 1030;
}

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
  .sidebar {
    width: 13rem;
  }

  .sidebar-link {
    justify-content: flex-start;
  }

  .sidebar-text {
    display: inline;
  }
}
</style>
