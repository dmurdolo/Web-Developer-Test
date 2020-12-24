import Layout from '../components/Layout'

import { ToastProvider } from 'react-toast-notifications'

import '../styles/app.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastProvider autoDismiss={true} placement="top-center">
        <Component {...pageProps} />
      </ToastProvider>
    </Layout>
  ) 
}