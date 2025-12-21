<script setup lang="ts">
import { projectsQuery } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'
import type { Projects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProyects = async () => {
  const { data, error } = await projectsQuery

  if (error) console.log(error)

  projects.value = data

  // console.log('Projects: ', projects.value)
}

await getProyects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
