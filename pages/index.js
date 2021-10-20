import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import DefaultLayout, { siteTitle } from '../layouts/default/default'
import Date from '../components/common/date/date'

import utilStyles from '../styles/utils/utils.module.css'



// TODO: vue에서는 middleware로 썼던것 같은데, 모듈로 분리하는 방법
// getServerSideProps, getStaticProps
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData  }) {
  return (
    <DefaultLayout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>


      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </DefaultLayout>
  )
}

