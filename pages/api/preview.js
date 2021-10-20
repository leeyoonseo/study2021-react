// Preview Mode 
// https://nextjs.org/docs/advanced-features/preview-mode
// - API 경로에서 res.setPreviewData 호출
// - setPreviewData는 객체
// - getStaticProps에 의해 사용 

// 아래의 테스트 상황은 {} 사용
// export default function handler(req, res) {
//   // ...
//   res.setPreviewData({})
//   // ...
// }

// 수동으로 접근 및 테스트 가능
// export default function handler(req, res) {
//   res.setPreviewData({})
//   res.end('Preview mode enabled')
// }

// https://nextjs.org/docs/advanced-features/preview-mode#securely-accessing-it-from-your-headless-cms

// * https://<your-site>/api/preview?secret=<token>&slug=<path>
// <your-site> 배포 도메인이어야 합니다.
// <token> 생성한 비밀 토큰으로 바꿔야 합니다.
// <path> 미리 보려는 페이지의 경로여야 합니다. 미리 보려면 /posts/foo를 사용해야 합니다 &slug=/posts/foo.
// 전체가 일치한다면 지정한 경로로 리디렉션, 아닐 경우 401, 307등 리디렉션
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== 'MY_SECRET_TOKEN' || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  const post = await getPostBySlug(req.query.slug)
  
  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.redirect(post.slug)
}