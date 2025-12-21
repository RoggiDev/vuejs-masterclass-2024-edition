<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'
import { projectsQuery } from '@/utils/supaQueries'
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

const columns: ColumnDef<Projects[0]>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-start' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        { to: `/projects/${row.original.slug}`, class: 'text-start font-medium d-block w-100' },
        () => row.getValue('name'),
      )
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-start' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-start font-medium' }, row.getValue('status'))
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-start' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-start font-medium' },
        JSON.stringify(row.getValue('collaborators')),
      )
    },
  },
]
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
