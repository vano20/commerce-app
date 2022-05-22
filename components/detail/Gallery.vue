<template>
  <div id="gallery-container">
    <div
      class="selected-image-wrapper"
      @touchstart="touchStart"
    >
      <NuxtImg
        :src="selectedImage"
        loading="lazy"
        class="selected-image"
      />
      <div
        v-if="isCanNext"
        class="mobile slider next"
        @click="selected++"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
      <div
        v-if="isCanPrev"
        class="mobile slider prev"
        @click="selected--"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>
      <div class="mobile dots">
        <div
          v-for="(image, dotIndex) of images"
          :key="dotIndex"
          class="dot"
          :class="
            selected === dotIndex
              ? 'dot-selected'
              : ''
          "
        />
      </div>
    </div>
    <div class="gallery-images">
      <div
        v-for="(image, imageIndex) of images"
        :key="imageIndex"
        class="gallery-image"
        @click="selected = imageIndex"
      >
        <NuxtImg :src="image" loading="lazy" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductGallery',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selected: 0
    }
  },
  computed: {
    selectedImage() {
      return this.images
        ? this.images[this.selected]
        : ''
    },
    isCanNext() {
      return (
        this.selected < this.images.length - 1
      )
    },
    isCanPrev() {
      return this.selected > 0
    }
  },
  methods: {
    touchStart(touchEvent) {
      if (
        touchEvent.changedTouches.length !== 1
      ) {
        return
      }
      const xStartAt =
        touchEvent.changedTouches[0].clientX
      addEventListener(
        'touchend',
        touchEvent =>
          this.touchEnd(touchEvent, xStartAt),
        { once: true }
      )
    },
    touchEnd(touchEvent, xStartAt) {
      if (
        touchEvent.changedTouches.length !== 1
      ) {
        return
      }
      const xEndAt =
        touchEvent.changedTouches[0].clientX
      if (xStartAt < xEndAt) {
        if (this.isCanPrev) {
          this.selected--
        }
      } else if (xStartAt > xEndAt) {
        if (this.isCanNext) {
          this.selected++
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$xl: 348px;
$xlGallery: 60px;

$md: 240px;
$mdGallery: 40px;

#gallery-container {
  .selected-image {
    width: 100%;
    height: 100vw;
    object-fit: cover;
  }
  .gallery-images {
    display: none;
    flex-flow: row nowrap;
    overflow-x: auto;
    max-width: $md;
    .gallery-image {
      margin-right: 7px;
      &:last-child {
        margin-right: 0;
      }
      img {
        cursor: pointer;
        border-radius: 5px;
        height: $mdGallery;
        width: $mdGallery;
        object-fit: cover;
      }
    }
  }

  .selected-image-wrapper {
    position: relative;
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-flow: row nowrap;
    .dot {
      background: #fff;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      margin: 0 5px 5px 0;
      &-selected {
        background: #000;
      }
    }
  }
  .slider {
    position: absolute;
    top: 50%;
    background: rgba(
      $color: #4e4e4e,
      $alpha: 0.5
    );
    border-radius: 30px;
    height: 30px;
    width: 30px;
    transform: translate(0, -50%);
    &.next {
      right: 0;
      margin-right: 5px;
    }
    &.prev {
      left: 0;
      margin-left: 5px;
    }
  }
}

@media only screen and (min-width: 1280px) {
  #gallery-container
    .selected-image-wrapper
    .mobile {
    display: none;
  }
  #gallery-container {
    .gallery-images {
      display: flex;
      max-width: $md;
      .gallery-image img {
        height: $mdGallery;
        width: $mdGallery;
        object-fit: cover;
      }
    }
    .selected-image {
      height: $md;
      width: $md;
      border-radius: 8px;
    }
  }
}
@media only screen and (min-width: 1536px) {
  #gallery-container {
    .gallery-images {
      max-width: $xl;
      .gallery-image img {
        height: $xlGallery;
        width: $xlGallery;
      }
    }
    .selected-image {
      height: $xl;
      width: $xl;
      border-radius: 8px;
    }
  }
}
</style>
