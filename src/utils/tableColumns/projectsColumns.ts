import { RouterLink } from 'vue-router'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Projects } from '../supaQueries'
import type { Ref } from 'vue'
import type { GroupedCollabs } from '@/types/GroupedCollabs'

export const columns = (collabs: Ref<GroupedCollabs>): ColumnDef<Projects[0]>[] => [
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
        { class: 'text-start fw-medium d-flex gap-2' },
        collabs.value[row.original.id]
          ? collabs.value[row.original.id]?.map((collab) => {
              return h(RouterLink, { to: `/users/${collab.username}` }, () => {
                return h(
                  'div',
                  {
                    class: 'rounded-circle overflow-hidden border border-secondary',
                    style: 'width:40px; height:40px;',
                  },
                  [
                    h('img', {
                      src: collab.avatar_url || '',
                      alt: 'avatar',
                      class: 'w-100 h-100 object-fit-cover',
                    }),
                  ],
                )
              })
            })
          : row.original.collaborators.map(() => {
              return h(
                'div',
                {
                  class:
                    'rounded-circle overflow-hidden border border-secondary d-flex align-items-center justify-content-center placeholder-glow',
                  style: 'width:40px; height:40px;',
                },
                [
                  h('span', {
                    class: 'placeholder col-6 rounded-circle',
                  }),
                ],
              )
            }),
      )
    },
  },
]
