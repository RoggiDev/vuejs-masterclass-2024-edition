<script setup lang="ts">
import { login } from '@/utils/supaAuth'

const formData = ref({
  email: '',
  password: '',
})

const router = useRouter()

const signin = async () => {
  const isLoggedIn = await login(formData.value)

  if (isLoggedIn) router.push('/')
}
</script>

<template>
  <div
    class="container d-flex justify-content-center align-items-center text-center py-5"
    style="min-height: 90vh; margin-top: -5rem"
  >
    <div class="card shadow-sm w-100" style="max-width: 380px">
      <!-- Card Header -->
      <div class="card-header bg-transparent border-0 text-center">
        <h2 class="h4 mb-1">Login</h2>
        <p class="text-secondary mb-0">Login to your account</p>
      </div>

      <!-- Card Body -->
      <div class="card-body">
        <!-- Google Login -->
        <div class="d-flex flex-column gap-3 mb-4">
          <button type="button" class="btn btn-outline-secondary w-100">Login with Google</button>

          <div class="d-flex align-items-center gap-2">
            <hr class="flex-grow-1" />

            <span class="text-secondary small">Or</span>

            <hr class="flex-grow-1" />
          </div>
        </div>

        <!-- Form -->
        <form class="d-grid gap-3" @submit.prevent="signin">
          <!-- Email -->
          <div>
            <label for="email" class="form-label text-start w-100"> Email </label>

            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="johndoe19@example.com"
              autocomplete="email"
              required
              v-model="formData.email"
            />
          </div>

          <!-- Password -->
          <div>
            <div class="d-flex align-items-center mb-1">
              <label for="password" class="form-label mb-0"> Password </label>

              <a href="#" class="ms-auto small text-decoration-underline">
                Forgot your password?
              </a>
            </div>

            <input
              id="password"
              type="password"
              class="form-control"
              autocomplete="current-password"
              required
              v-model="formData.password"
            />
          </div>

          <!-- Submit -->
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>

        <!-- Footer -->
        <div class="mt-4 small text-center">
          Don't have an account?

          <RouterLink to="/register" class="text-decoration-underline"> Register </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
