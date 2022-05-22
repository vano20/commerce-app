<template>
  <div id="detail-container">
    <div class="detail-title">
      {{ `${title}` }}
    </div>
    <div class="detail-price">
      {{ formattedPrice }}
    </div>
    <div class="divider" />
    <div class="detail-description">
      {{ description }}
    </div>
    <div class="detail-category">
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
  padding-bottom: 90px;
  .detail-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 4px;
    padding: 0 10px;
  }
  .detail-price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 4px;
    padding: 0 10px;
  }
  .detail-description {
    margin-bottom: 20px;
    word-break: break-all;
    padding: 0 10px;
  }
  .detail-category {
    padding: 0 10px;
    font-size: 1rem;
    color: rgb(110, 110, 110);
    span {
      color: rgb(31, 31, 31);
      text-transform: capitalize;
    }
  }
}
@media only screen and (min-width: 1280px) {
  #detail-container {
    .detail-title {
      font-size: 1rem;
      padding: 0;
    }
    .detail-price {
      font-size: 1.3rem;
      padding: 0;
    }
    .detail-description {
      font-size: 1rem;
      padding: 0;
    }
    .detail-category {
      font-size: 0.8rem;
      padding: 0;
    }
  }
}
@media only screen and (min-width: 1536px) {
  #detail-container {
    .detail-title {
      font-size: 1.3rem;
    }
    .detail-price {
      font-size: 1.5rem;
    }
    .detail-description {
      font-size: 1.2rem;
    }
    .detail-category {
      font-size: 1rem;
    }
  }
}
</style>
