export default function (context) {
  context.$axios.onError((error) => {
    const notFound =
      error?.response?.status === 404
    if (notFound) {
      context.error({
        statusCode: 404,
        message: error.message
      })
    }
  })
}
