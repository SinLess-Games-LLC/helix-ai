import { AppProps } from 'next/app'
import Head from 'next/head'
import { trpc } from '../utils/trpc'
import './styles.css'

function HelixApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Helix Ai</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default trpc.withTRPC(HelixApp)
