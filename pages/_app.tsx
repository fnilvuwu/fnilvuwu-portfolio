import type { AppProps } from 'next/app'
import { PageLayout } from '../components/PageLayout'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  )
}