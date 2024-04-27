import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>follow @playboishaka</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="@music" />
        <p className="description">
          @destroyshaka
        </p>
      </main>

      <Footer />
    </div>
  )
}
