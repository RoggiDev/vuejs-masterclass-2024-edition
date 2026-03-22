<script setup lang="ts">
const links = [
  {
    title: 'Dashboard',
    to: '/',
    icon: 'lucide:house',
  },
  {
    title: 'Projects',
    to: '/projects',
    icon: 'lucide:building-2',
  },
  {
    title: 'My Tasks',
    to: '/tasks',
    icon: 'lucide:badge-check',
  },
]

const accountLinks = [
  {
    title: 'Profile',
    to: '/profile',
    icon: 'lucide:user',
  },
  {
    title: 'Settings',
    to: '/settings',
    icon: 'lucide:settings',
  },
  {
    title: 'Sign out',
    icon: 'lucide:log-out',
  },
]

const router = useRouter()

const executeAction = async (linkTitle: string) => {
  if (linkTitle === 'Sign Out') {
    const { logout } = await import('@/utils/supaAuth')
    const isLoggedOut = await logout()

    if (isLoggedOut) router.push('/login')
  }
}

defineEmits(['taskClicked'])
</script>

<template>
  <aside class="sidebar d-flex flex-column border-end position-fixed bg-dark">
    <!-- Header -->
    <div
      class="d-flex align-items-center border-bottom px-0 px-lg-3 justify-content-center justify-content-lg-between"
      style="height: 4rem"
    >
      <Button class="btn btn-sm btn-dark">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </Button>

      <!-- Dropdown -->
      <div class="dropdown">
        <a
          class="d-flex align-items-center text-decoration-none"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
        >
          <Button class="btn btn-sm btn-dark">
            <iconify-icon icon="lucide:plus"></iconify-icon>
          </Button>
        </a>

        <ul class="dropdown-menu dropdown-menu-end">
          <li @click="$emit('taskClicked')"><a class="dropdown-item" href="#">Task</a></li>
          <li><a class="dropdown-item" href="#">Project</a></li>
        </ul>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="d-flex flex-column justify-content-between flex-grow-1 py-2">
      <!-- Top links -->
      <div>
        <SidebarLinks :links="links" />
      </div>

      <!-- Bottom links -->
      <div class="border-top py-3 text-center">
        <SidebarLinks :links="accountLinks" @actionClicked="executeAction" />
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

@media (min-width: 992px) {
  .sidebar {
    width: 13rem;
  }
}
</style>
