<template>
  <Card
    :image="image"
    :title="title"
    class="product"
    @click="$emit('click')"
  >
    <template #content>
      <div class="product-content">
        <div class="price">
          {{ formattedPrice }}
        </div>
      </div>
    </template>
  </Card>
</template>
<script>
import Card from '@/components/base/Card.vue'
import { toRp } from '@/helper/currency'

export default {
  name: 'ProductCard',
  components: { Card },
  props: {
    title: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    formattedPrice() {
      return toRp.format(this.price)
    }
  },
  methods: {
    clickEvent() {
      alert('asdf')
    }
  }
}
</script>
<style lang="scss" scoped>
.product {
  cursor: pointer;
  & &-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
    flex-direction: row-reverse;
    & .price {
      font-size: 1rem;
      font-weight: bold;
    }
    & .location {
      font-size: 0.95rem;
      color: rgba($color: #383838, $alpha: 1);
    }
  }
}
</style>
