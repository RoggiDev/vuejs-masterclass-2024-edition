<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'

console.log(supabase)
</script>

<template>
  <nav class="p-4 d-flex align-items-center justify-content-between px-4 border-bottom">
    <!-- Search -->
    <form class="flex-grow-1" style="max-width: 24rem">
      <div class="position-relative">
        <input type="text" class="form-control" placeholder="Search ..." />
      </div>
    </form>

    <!-- Avatar -->
    <div class="rounded-circle bg-white border ms-3" style="width: 2rem; height: 2rem"></div>
  </nav>

  <main>
    <RouterView />
  </main>
</template>
