<template>
  <div class="card" @click="$emit('click')">
    <div>
      <NuxtImg
        :src="image"
        :alt="`image of ${title}`"
        width="240"
        height="160"
        loading="lazy"
        fit="cover"
        class="card-image"
      />
    </div>
    <div class="card-content-wrapper">
      <div class="card-title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div class="card-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  max-width: 242px;
  & &-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 0.86rem;
    word-break: break-all;
  }
  & &-content {
    // border-top: 1px solid rgba(0, 0, 0, 0.5);
    margin: 10px 0 0 0;
  }
  & &-image {
    border-radius: 4px;
  }
  & &-content-wrapper {
    padding: 10px;
  }
}
</style>
