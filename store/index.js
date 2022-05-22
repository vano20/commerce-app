export const state = () => ({
  products: [],
  showOverlay: false
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_OVERLAY(state, value) {
    state.showOverlay = value
  }
}

export const actions = {
  async getProducts({ commit }) {
    const products = await this.$axios.$get(
      'products'
    )
    if (products) {
      commit('SET_PRODUCTS', products)
    }
    return products
  }
}
