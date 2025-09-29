import type { AppProps } from 'next/app';
import Head from 'next/head';
import { PageLayout } from '../components/PageLayout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Head>
        <title>Fnilvu's Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </PageLayout>
  )
}