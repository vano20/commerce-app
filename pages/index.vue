<template>
  <div class="products">
    <Product
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :image="defaultImage(product.images)"
      :price="product.price"
      class="products-item"
      @click="toDetailProduct(product.id)"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Product from '@/components/Product.vue'

export default {
  name: 'IndexPage',
  components: { Product },
  layout: 'landing',
  async fetch() {
    await this.$nuxt.$store.dispatch(
      'getProducts'
    )
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  methods: {
    defaultImage(images) {
      return images.length ? images[0] : ''
    },
    toDetailProduct(id) {
      this.$router.push(`product/${id}`)
    }
  }
}
</script>
<style lang="scss">
.products {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  & &-item {
    margin: 0 0 10px 0;
  }
}
@media only screen and (min-width: 640px) {
  .products {
    justify-content: start;
    & &-item {
      margin: 0 10px 10px 0;
    }
  }
}
</style>
