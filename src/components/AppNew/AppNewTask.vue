<script setup lang="ts">
import type { CreateNewTask } from '@/types/CreateNewForm'
import { profilesQuery, projectsQuery } from '@/utils/supaQueries'

const sheetOpen = defineModel<boolean>()

type SelectOption = { label: string; value: number | string }

const selectOptions = ref({
  projects: [] as SelectOption[],
  profiles: [] as SelectOption[],
})

const getProjectsOptions = async () => {
  const { data: allProjects } = await projectsQuery

  if (!allProjects) return

  selectOptions.value.projects = allProjects.map((project) => ({
    label: project.name,
    value: project.id,
  }))
}

const getProfilesOptions = async () => {
  const { data: allProfiles } = await profilesQuery

  if (!allProfiles) return

  selectOptions.value.profiles = allProfiles.map((profile) => ({
    label: profile.full_name,
    value: profile.id,
  }))
}

const getOptions = async () => {
  await Promise.all([getProjectsOptions(), getProfilesOptions()])
}

getOptions()

const createTask = async (formData: CreateNewTask) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(formData))
    }, 2000)
  })
}
</script>

<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    :class="{ show: sheetOpen }"
    style="visibility: visible"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Create new task</h5>
      <button type="button" class="btn-close" @click="sheetOpen = false"></button>
    </div>

    <div class="offcanvas-body">
      <FormKit type="form" @submit="createTask" submit-label="Create Task">
        <FormKit type="text" name="name" id="name" label="Name" placeholder="My new task" />

        <FormKit
          type="select"
          name="for"
          id="for"
          label="For"
          placeholder="Select a user"
          :options="selectOptions.profiles"
        />

        <FormKit
          type="select"
          name="project"
          id="project"
          label="Porject"
          placeholder="Select a project"
          :options="selectOptions.projects"
        />

        <FormKit
          type="textarea"
          name="description"
          id="description"
          label="Description"
          placeholder="Task description"
        />
      </FormKit>
    </div>
  </div>

  <!-- Backdrop -->
  <div v-if="sheetOpen" class="offcanvas-backdrop fade show" @click="sheetOpen = false"></div>
</template>
