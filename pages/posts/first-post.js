import Head from 'next/head'
import Link from 'next/link'
// import Layout from '../../components/layout/layout'
import DefaultLayout from '../../layouts/default/default'

export default function FirstPost() {
  return (
    <DefaultLayout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </DefaultLayout>
  )
}