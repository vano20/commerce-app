export default {
  async getProductDetail({ commit }, id) {
    try {
      const product = await this.$axios.$get(
        `products/${id}`
      )
      if (product) {
        commit('SET_PRODUCT_DETAIL', product)
      }
      return product
    } catch (error) {
      return error
    }
  }
}
