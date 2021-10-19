import Head from 'next/head'
import DefaultLayout from '../../layouts/default/default'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/common/date/date'
// Add this import at the top of the file
import utilStyles from '../../styles/utils/utils.module.css'

// https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data
// TODO: 순서 찾기
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <DefaultLayout>
      {/* Add this <Head> tag */}
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </DefaultLayout>
  )
}