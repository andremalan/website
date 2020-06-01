import Intercom from 'react-intercom';
import { AppProps } from 'next/app'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Intercom appID="sksnpmyg"/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp