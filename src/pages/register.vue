<script setup lang="ts">
import { register } from '@/utils/supaAuth'

const formData = ref({
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const router = useRouter()

const signup = async () => {
  const isRegistered = await register(formData.value)

  if (isRegistered) router.push('/')
}
</script>

<template>
  <div
    class="container d-flex justify-content-center align-items-center text-center py-5"
    style="min-height: 90vh; margin-top: -2.5rem"
  >
    <div class="card shadow-sm w-100" style="max-width: 24rem">
      <!-- Card Header -->
      <div class="card-header bg-transparent border-0 text-center">
        <h2 class="h4 mb-1">Register</h2>
        <p class="text-secondary mb-0">Create a new account</p>
      </div>

      <!-- Card Body -->
      <div class="card-body">
        <!-- Google register -->
        <div class="d-flex flex-column gap-3 mb-4">
          <button type="button" class="btn btn-outline-secondary w-100">
            Register with Google
          </button>

          <div class="d-flex align-items-center gap-2">
            <hr class="flex-grow-1" />

            <span class="text-secondary small">Or</span>

            <hr class="flex-grow-1" />
          </div>
        </div>

        <!-- Form -->
        <form class="d-grid gap-3" @submit.prevent="signup">
          <!-- Username -->
          <div>
            <label for="username" class="form-label text-start w-100"> Username </label>

            <input
              id="username"
              type="text"
              class="form-control"
              placeholder="johndoe19"
              required
              v-model="formData.username"
            />
          </div>

          <div class="row g-3">
            <!-- First Name -->
            <div class="col-12 col-sm-6">
              <label for="first_name" class="form-label text-start w-100"> First Name </label>

              <input
                id="first_name"
                type="text"
                class="form-control"
                placeholder="John"
                required
                v-model="formData.firstName"
              />
            </div>

            <!-- Last Name -->
            <div class="col-12 col-sm-6">
              <label for="last_name" class="form-label text-start w-100"> Last Name </label>

              <input
                id="last_name"
                type="text"
                class="form-control"
                placeholder="Doe"
                required
                v-model="formData.lastName"
              />
            </div>
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="form-label text-start w-100"> Email </label>

            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="johndoe19@example.com"
              required
              v-model="formData.email"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="form-label text-start w-100"> Password </label>

            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="*****"
              autocomplete="new-password"
              required
              v-model="formData.password"
            />
          </div>

          <!-- Confirm Password -->
          <div>
            <label for="confirm_password" class="form-label text-start w-100">
              Confirm Password
            </label>

            <input
              id="confirm_password"
              type="password"
              class="form-control"
              placeholder="*****"
              autocomplete="new-password"
              required
              v-model="formData.confirmPassword"
            />
          </div>

          <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>

        <!-- Footer -->
        <div class="mt-4 text-center small">
          Already have an account?

          <RouterLink to="/login" class="text-decoration-underline ms-1"> Login </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
