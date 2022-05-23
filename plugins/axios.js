export default function ({ $axios, error }) {
  $axios.onError((error) => {
    const notFound =
      error?.response?.status === 404
    if (notFound) {
      error({
        statusCode: 404,
        message: error.message
      })
    }
  })
}
