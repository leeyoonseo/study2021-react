// https://nextjs.org/docs/advanced-features/custom-error-page#more-advanced-error-page-customizing
// @desc 클라이언트, 서버 모두 사용
function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error