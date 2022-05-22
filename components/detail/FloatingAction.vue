<template>
  <div
    class="mobile modal-add-item"
    :class="modalAddItemClass"
  >
    <div class="action-wrapper">
      <button
        id="modal-handler"
        @click="toggleAddItemModal"
      >
        <svg
          v-show="!showModalAddItem"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#bd3136"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-up"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <svg
          v-show="showModalAddItem"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#bd3136"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <slot name="variant" />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'FloatingAction',
  data() {
    return {
      modalAddItemClass: [],
      modalTimeout: null
    }
  },
  computed: {
    ...mapState({
      showOverlay: state => state.showOverlay
    }),
    showModalAddItem: {
      get() {
        return this.showOverlay
      },
      set(value) {
        this.setShowOverlay(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      setShowOverlay: 'SET_OVERLAY'
    }),
    toggleAddItemModal() {
      if (!this.showModalAddItem) {
        this.modalAddItemClass = ['active']
      }
      if (this.showModalAddItem) {
        this.modalAddItemClass = []
      }
      if (this.modalTimeout) {
        clearTimeout(this.modalTimeout)
      }
      this.modalTimeout = setTimeout(() => {
        this.showModalAddItem =
          !this.showModalAddItem
      }, 550)
    }
  }
}
</script>
<style lang="scss" scoped>
.modal-add-item {
  background: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 2px solid
    rgba($color: #646464, $alpha: 0.5);
  border-left: 2px solid
    rgba($color: #646464, $alpha: 0.5);
  border-right: 2px solid
    rgba($color: #646464, $alpha: 0.8);
  box-shadow: 0 -5px 10px #6464644d;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 2;
  height: 80px;
  transition: height 0.5s ease-out;
  .action-wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }
  &.active {
    height: 50vh;
  }
}

#modal-handler {
  background: #c2c2c28c;
  border-radius: 25px;
  padding: 10px;
  margin-bottom: 10px;
}

@media only screen and (min-width: 1280px) {
  .mobile {
    display: none;
  }
}
</style>
