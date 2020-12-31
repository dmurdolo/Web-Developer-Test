import Head from 'next/head'

import Layout from '../components/Layout'

import { ToastProvider } from 'react-toast-notifications'

import '../styles/app.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>💡 My App</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <ToastProvider autoDismiss={true} placement="top-center">
        <Component {...pageProps} />
      </ToastProvider>
    </Layout>
  ) 
}