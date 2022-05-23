<template>
  <nav class="main-nav">
    <div class="container">
      <div class="nav-wrapper">
        <div class="nav-logo">
          <NuxtLink to="/">
            <NuxtLogo />
          </NuxtLink>
        </div>
        <div class="mobile nav right">
          <Menu :size="28" />
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Menu from '@/components/svg-icons/Menu.vue'
import NuxtLogo from '@/components/NuxtLogo.vue'

export default {
  name: 'MainNav',
  components: { NuxtLogo, Menu }
}
</script>
