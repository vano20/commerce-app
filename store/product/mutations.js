export default {
  SET_PRODUCT_DETAIL(state, product) {
    state.product = product
  },
  RESET_PRODUCT(state) {
    state.product = {
      id: '',
      title: '',
      price: 0,
      category: '',
      description: '',
      images: []
    }
  }
}
