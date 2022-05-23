<template>
  <div id="detail-container">
    <div class="detail detail-title">
      {{ title }}
    </div>
    <div class="detail detail-price">
      {{ formattedPrice }}
    </div>
    <div class="divider" />
    <div class="detail detail-description">
      {{ description }}
    </div>
    <div class="detail detail-category">
      Category: <span>{{ category }}</span>
    </div>
  </div>
</template>
<script>
import { toRp } from '@/helper/currency'

export default {
  name: 'ProductDetail',
  props: {
    title: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    }
  },
  computed: {
    formattedPrice() {
      return toRp.format(this.price)
    }
  }
}
</script>
<style lang="scss" scoped>
#detail-container {
  display: flex;
  flex-direction: column;
  .detail {
    padding: 0 10px;
    &-title {
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 4px;
    }
    &-price {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 4px;
    }
    &-description {
      margin-bottom: 20px;
      word-break: break-all;
    }
    &-category {
      font-size: 1rem;
      color: rgb(110, 110, 110);
      span {
        color: rgb(31, 31, 31);
        text-transform: capitalize;
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  #detail-container {
    padding-bottom: 0;
    margin-bottom: 50px;
    .detail {
      padding: 0;
      &-title {
        font-size: 1rem;
      }
      &-price {
        font-size: 1.3rem;
      }
      &-description {
        font-size: 1rem;
      }
      &-category {
        font-size: 0.8rem;
      }
    }
  }
}
@media only screen and (min-width: 1536px) {
  #detail-container {
    .detail {
      &-title {
        font-size: 1.3rem;
      }
      &-price {
        font-size: 1.5rem;
      }
      &-description {
        font-size: 1.2rem;
      }
      &-category {
        font-size: 1rem;
      }
    }
  }
}
</style>
