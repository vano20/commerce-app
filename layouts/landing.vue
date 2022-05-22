<template>
  <div>
    <Nav />
    <div class="landing container">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'LandingLayout',
  components: { Nav }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/variable';

.landing {
  padding-top: calc($nav_bar_height + 10px);
}
</style>
