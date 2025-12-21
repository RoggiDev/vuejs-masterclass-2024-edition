<script setup lang="ts">
import { projectQuery } from '@/utils/supaQueries'
import type { Project } from '@/utils/supaQueries'

const route = useRoute('/projects/[slug]')

const project = ref<Project | null>(null)

watch(
  () => project.value?.name,
  () => {
    usePageStore().pageData.title = `Project: ${project.value?.name || ''}`
  },
)

const getProjects = async () => {
  const { data, error } = await projectQuery(route.params.slug)

  if (error) console.log(error)

  project.value = data
}

await getProjects()
</script>

<template>
  <!-- Project details -->
  <div v-if="project" class="table-responsive mb-4">
    <table class="table table-borderless align-middle">
      <tbody>
        <tr>
          <th scope="row" class="w-25">Name</th>
          <td>{{ project?.name }}</td>
        </tr>

        <tr>
          <th scope="row">Description</th>
          <td>
            {{ project.description }}
          </td>
        </tr>

        <tr>
          <th scope="row">Status</th>
          <td>{{ project.status }}</td>
        </tr>

        <tr>
          <th scope="row">Collaborators</th>
          <td>
            <div class="d-flex align-items-center">
              <RouterLink
                v-for="collab in project.collaborators"
                :key="collab"
                to=""
                class="avatar-wrapper"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4"
                  alt="Collaborator avatar"
                  class="rounded-circle border border-secondary bg-dark avatar"
                  width="40"
                  height="40"
                />
              </RouterLink>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <section v-if="project" class="row g-4">
    <!-- Tasks -->
    <div class="col-12 col-md-6">
      <h2 class="section-title">Tasks</h2>

      <div class="table-container">
        <table class="table table-dark table-hover mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Due Date</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="task in project.tasks" :key="task.id">
              <td>Lorem ipsum dolor sit amet.</td>
              <td>In progress</td>
              <td>22/08/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Documents -->
    <div class="col-12 col-md-6">
      <h2 class="section-title">Documents</h2>

      <div class="table-container d-flex align-items-center">
        <p class="text-secondary small fw-semibold mb-0 px-3">
          This project doesn't have documents yet...
        </p>

        <!-- <table class="table table-dark table-hover mb-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Visibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>Private</td>
            </tr>
          </tbody>
        </table> -->
      </div>
    </div>
  </section>
</template>

<style>
/* Headings */
.section-title {
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  width: fit-content;
}

/* Table container */
.table-container {
  max-height: 20rem; /* h-80 ≈ 320px */
  overflow-y: auto;
  border-radius: 0.375rem;
  background-color: var(--bs-dark);
}

/* Avatars */
.avatar-wrapper {
  position: relative;
}

.avatar {
  width: 40px;
  height: 40px;
  margin-right: -16px;
  transition: transform 0.15s ease;
}

.avatar-wrapper:hover {
  z-index: 10;
}

.avatar-wrapper:hover .avatar {
  transform: scale(1.1);
}
</style>
