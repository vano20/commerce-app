<template>
  <div
    v-if="
      !$fetchState.pending && !$fetchState.error
    "
    id="product-detail-container"
  >
    <Gallery
      :images="product.images"
      class="gallery-grid"
    />
    <Detail
      :title="product.title"
      :price="product.price"
      :description="product.description"
      :category="product.category"
      class="detail-grid"
    />
    <FloatingAction>
      <template #variant>
        <Variant :variants="product.variants" />
      </template>
    </FloatingAction>
    <div id="variant-container">
      <Variant :variants="product.variants" />
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Gallery from '@/components/detail/Gallery.vue'
import Detail from '@/components/detail/Detail.vue'
import FloatingAction from '@/components/detail/FloatingAction.vue'
import Variant from '@/components/detail/Variant.vue'

export default {
  name: 'ProductDetail',
  components: {
    Gallery,
    Detail,
    FloatingAction,
    Variant
  },
  async fetch() {
    const { id } = this.$route.params
    await this.$store.dispatch(
      'product/getProductDetail',
      id
    )
  },
  computed: {
    ...mapState({
      product: state => state.product.product
    }),
    images() {
      return this.product.images
    }
  },
  beforeDestroy() {
    this.resetProduct()
  },
  methods: {
    ...mapMutations({
      resetProduct: 'product/RESET_PRODUCT'
    })
  }
}
</script>
<style lang="scss" scoped>
.gallery-grid {
  grid-area: gallery-container;
}
.detail-grid {
  grid-area: detail-container;
}
#variant-container {
  grid-area: variant-container;
  display: none;
}
@media only screen and (min-width: 1280px) {
  #variant-container {
    display: block;
  }
  #product-detail-container {
    display: grid;
    grid-template-areas: 'gallery-container detail-container variant-container';
    column-gap: 20px;
    grid-template-columns:
      minmax(0, 240px) minmax(0, 450px)
      minmax(0, 640px);
  }
}
@media only screen and (min-width: 1536px) {
  #product-detail-container {
    column-gap: 40px;
    grid-template-columns:
      minmax(0, 348px) minmax(0, 640px)
      minmax(0, 820px);
  }
}
</style>
