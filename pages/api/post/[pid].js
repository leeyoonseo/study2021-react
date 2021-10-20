// https://nextjs.org/docs/api-routes/dynamic-api-routes
export default function handler(req, res) {
  const { pid } = req.query
  res.end(`Post: ${pid}`)
}