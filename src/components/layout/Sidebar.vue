<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
const { profile } = storeToRefs(useAuthStore())

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

const accountLinks = computed(() => {
  return [
    {
      title: 'Profile',
      to: `/users/${profile.value?.username}`,
      icon: 'lucide:user',
    },
    {
      title: 'Sign Out',
      icon: 'lucide:log-out',
    },
  ]
})

const router = useRouter()

const executeAction = async (linkTitle: string) => {
  if (linkTitle === 'Sign Out') {
    const { logout } = await import('@/utils/supaAuth')
    const isLoggedOut = await logout()

    if (isLoggedOut) router.push('/login')
  }
}

defineEmits(['taskClicked'])

const { menuOpen, toggleMenu } = useMenu()

const windowWidth = useWindowSize().width

watchEffect(() => {
  if (windowWidth.value > 1024) {
    menuOpen.value = true
  } else {
    menuOpen.value = false
  }
})
</script>

<template>
  <aside
    class="sidebar d-flex flex-column border-end position-fixed bg-dark"
    :class="{ 'sidebar-expanded': menuOpen, 'sidebar-collapsed': !menuOpen }"
  >
    <!-- Header -->
    <div
      class="d-flex align-items-center border-bottom px-0 px-lg-2 justify-content-around justify-content-lg-between"
      style="height: 4rem"
    >
      <Button @click="toggleMenu" class="btn btn-sm btn-dark">
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
  width: 5rem;
  height: 100vh;
  transition: width 0.2s ease;
  z-index: 1030;
}

/* Estado colapsado */
.sidebar-collapsed {
  width: 5rem;
}

/* Estado expandido */
.sidebar-expanded {
  width: 13rem;
}
</style>
