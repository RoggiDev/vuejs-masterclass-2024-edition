<script setup lang="ts">
import { profileQuery } from '@/utils/supaQueries'
import type { Tables } from '../../../database/types'

const { username } = useRoute('/users/[username]').params

usePageStore().pageData.title = ''

const profile = ref<Tables<'profiles'> | null>(null)
const getTasks = async () => {
  const { data, error, status } = await profileQuery({ column: 'username', value: username })

  if (error) useErrorStore().setError({ error, customCode: status })

  profile.value = data
}

await getTasks()
</script>

<template>
  <div
    class="container text-center py-5 mb-4 d-flex flex-column align-items-center justify-content-center"
  >
    <div class="d-flex flex-column align-items-center pb-3">
      <div
        class="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center mb-2"
        style="width: 80px; height: 80px; font-weight: bold"
        :src="profile?.avatar_url || ''"
      >
        CN
      </div>

      <p class="text-secondary mt-2">{{ profile?.username }}</p>

      <h1 class="fw-bold mt-4 display-6">{{ profile?.full_name }}</h1>

      <p class="small mt-2">{{ profile?.bio }}</p>
    </div>

    <button class="btn btn-primary">Edit profile</button>
  </div>
</template>
