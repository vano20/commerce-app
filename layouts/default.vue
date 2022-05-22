<template>
  <div>
    <Nav />
    <div class="container default">
      <div
        class="modal-overlay"
        :class="active"
      />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState(['showOverlay']),
    active() {
      return this.showOverlay ? ['active'] : ['']
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/variable';

.default {
  padding-top: calc($nav_bar_height + 10px);
}
</style>
