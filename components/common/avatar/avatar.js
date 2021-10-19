import useUser from '../../../hooks/useUser'

export default function Avatar ({ id }) {
  const { user, isLoading, isError } = useUser(id)

  // if (isLoading) return <Spinner />
  // if (isError) return <Error />
  // return <img src={user.avatar} />

  return;
}