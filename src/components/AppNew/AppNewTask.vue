<script setup lang="ts">
import type { CreateNewTask } from '@/types/CreateNewForm'

const sheetOpen = defineModel<boolean>()

const createTask = async (formData: CreateNewTask) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(formData))
    }, 200)
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
          :options="[{ label: 'Item name', value: 1 }]"
        />

        <FormKit
          type="textarea"
          name="description"
          id="description"
          label="Description"
          placeholder="Task description"
        />

        <FormKit
          type="select"
          name="project"
          id="project"
          label="Porject"
          placeholder="Select a project"
          :options="[{ label: 'Item name', value: 1 }]"
        />
      </FormKit>
    </div>
  </div>

  <!-- Backdrop -->
  <div v-if="sheetOpen" class="offcanvas-backdrop fade show" @click="sheetOpen = false"></div>
</template>
