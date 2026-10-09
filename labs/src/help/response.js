export default (res, data) => {
  const { status = 200, body } = data
  res.status(status).json(body)
}