import useSWR from 'swr'

// https://swr.vercel.app/ko
// https://nextjs.org/learn/basics/data-fetching/request-time
function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}