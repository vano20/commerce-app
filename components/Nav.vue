<template>
  <nav class="main-nav">
    <div class="container">
      <div class="nav-wrapper">
        <div class="nav-logo">
          <NuxtLink to="/">
            <NuxtLogo />
          </NuxtLink>
        </div>
        <div class="nav right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-menu"
          >
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
            />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
            />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import NuxtLogo from '@/components/NuxtLogo.vue'

export default {
  name: 'MainNav',
  components: { NuxtLogo }
}
</script>
