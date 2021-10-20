// https://nextjs.org/docs/api-routes/dynamic-api-routes#catch-all-api-routes
export default function handler(req, res) {
  const { slug } = req.query
  res.end(`Post: ${slug.join(', ')}`)
}