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
  <div class="table-responsive mb-4">
    <table class="table table-borderless align-middle">
      <tbody>
        <tr>
          <th scope="row" class="w-25">Name</th>
          <td>Lorem ipsum dolor sit amet.</td>
        </tr>

        <tr>
          <th scope="row">Description</th>
          <td>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iure qui tempora ex nihil,
            ab reprehenderit dolorem sunt veritatis perferendis? Repudiandae quis velit quasi ab
            natus quia ratione voluptas deserunt labore sed distinctio nam fuga fugit vero
            voluptates placeat aperiam, saepe excepturi eos harum consectetur doloremque
            perspiciatis nesciunt! Incidunt, modi.
          </td>
        </tr>

        <tr>
          <th scope="row">Status</th>
          <td>In progress</td>
        </tr>

        <tr>
          <th scope="row">Collaborators</th>
          <td>
            <div class="d-flex align-items-center">
              <RouterLink
                v-for="n in 5"
                :key="n"
                to=""
                class="rounded-circle border border-primary bg-secondary text-white d-flex align-items-center justify-content-center avatar"
              >
                <!-- Placeholder avatar -->
                <span class="small fw-semibold">{{ n }}</span>
              </RouterLink>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <section class="row g-4">
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
            <tr v-for="n in 5" :key="n">
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
.avatar {
  width: 36px;
  height: 36px;
  margin-right: -0.75rem;
  transition: transform 0.15s ease;
}

.avatar:hover {
  transform: scale(1.1);
  z-index: 1;
}
</style>
