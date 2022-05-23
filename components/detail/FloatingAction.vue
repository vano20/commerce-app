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
        <ChevronUp
          v-show="!showModalAddItem"
          :size="30"
          color="#bd3136"
        />
        <ChevronDown
          v-show="showModalAddItem"
          :size="30"
          color="#bd3136"
        />
      </button>
      <slot name="variant" />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import ChevronUp from '@/components/svg-icons/ChevronUp.vue'
import ChevronDown from '@/components/svg-icons/ChevronDown.vue'

export default {
  name: 'FloatingAction',
  components: { ChevronUp, ChevronDown },
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
