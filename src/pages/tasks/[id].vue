<script setup lang="ts">
import { taskQuery } from '@/utils/supaQueries'
import type { Task } from '@/utils/supaQueries'

const route = useRoute('/tasks/[id]')

const task = ref<Task | null>(null)

watch(
  () => task.value?.name,
  () => {
    usePageStore().pageData.title = `Task: ${task.value?.name || ''}`
  },
)

const getTasks = async () => {
  const { data, error } = await taskQuery(route.params.id)

  if (error) console.log(error)

  task.value = data
}

await getTasks()
</script>

<template>
  <div v-if="task" class="table-responsive">
    <table class="table table-borderless align-middle">
      <tbody>
        <tr>
          <th scope="row" class="w-25">Name</th>
          <td>{{ task?.name }}</td>
        </tr>

        <tr>
          <th scope="row">Description</th>
          <td>
            {{ task.description }}
          </td>
        </tr>

        <tr>
          <th scope="row">Assignee</th>
          <td>Lorem ipsum</td>
        </tr>

        <tr>
          <th scope="row">Project</th>
          <td>{{ task.projects?.name }}</td>
        </tr>

        <tr>
          <th scope="row">Status</th>
          <td>{{ task.status }}</td>
        </tr>

        <tr>
          <th scope="row">Collaborators</th>
          <td>
            <div class="d-flex align-items-center">
              <RouterLink
                v-for="collab in task.collaborators"
                :key="collab"
                to=""
                class="avatar-wrapper me-n3"
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

        <!-- Comments -->
        <tr>
          <th scope="row" class="align-top pt-4">Comments</th>
          <td>
            <p class="mb-2 text-secondary">Comments cards goes in here..</p>

            <div class="bg-secondary bg-opacity-10 rounded p-3">
              <textarea
                class="form-control mb-3"
                rows="3"
                placeholder="Add your comment.."
              ></textarea>

              <div class="d-flex justify-content-between align-items-center">
                <button class="btn btn-primary btn-sm">Comment</button>

                <div class="d-flex gap-3">
                  <button class="btn btn-outline-secondary btn-sm" type="button">
                    <iconify-icon icon="lucide:paperclip"></iconify-icon>
                    <span class="visually-hidden">Attach file</span>
                  </button>

                  <button class="btn btn-outline-secondary btn-sm" type="button">
                    <iconify-icon icon="lucide:image-up"></iconify-icon>
                    <span class="visually-hidden">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
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
