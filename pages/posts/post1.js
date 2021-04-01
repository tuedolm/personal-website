import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout';


export default function FirstPost() {
  return (
    <Layout>
    <Head>
        <title>why is this even a bug</title>
    </Head>
      <h1>Really?</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
