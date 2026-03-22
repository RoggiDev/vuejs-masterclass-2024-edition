<script setup lang="ts">
const { id } = useRoute('/tasks/[id]').params

const tasksLoader = useTasksStore()
const { task } = storeToRefs(tasksLoader)
const { getTask, updateTask, deleteTask } = tasksLoader

watch(
  () => task.value?.name,
  () => {
    usePageStore().pageData.title = `Task: ${task.value?.name || ''}`
  },
)

await getTask(id)

const { getProfilesByIds } = useCollabs()

const collabs = task.value?.collaborators ? await getProfilesByIds(task.value?.collaborators) : []

const deleteLoading = ref(false)

const router = useRouter()

const triggerDelete = async () => {
  deleteLoading.value = true

  await deleteTask()

  deleteLoading.value = false

  router.push({ name: '/tasks/' })
}
</script>

<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
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

    <button
      @click="triggerDelete"
      class="btn btn-danger align-self-end mt-3 w-100"
      style="max-width: 10rem"
    >
      <Transition name="scale" mode="out-in">
        <iconify-icon
          v-if="deleteLoading"
          icon="lucide:loader-circle"
          class="me-1 spin"
        ></iconify-icon>
        <iconify-icon v-else icon="lucide:trash-2" class="me-1"></iconify-icon>
      </Transition>

      Delete Task
    </button>
  </div>
</template>

<style scoped>
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

.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.1s;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.3);
}
</style>
