<template>
  <div>
    <div class="modal-overlay" :class="active" />
    <Nuxt />
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
.modal-overlay {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: #6464646b;
  z-index: 1;
  transition: opacity 0.1s ease-out;
  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
