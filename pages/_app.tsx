import type { AppProps } from 'next/app'
import '../styles/globals.css'
import OnAuth from "./onAuth"


function MyApp({ Component, pageProps }: AppProps) {
  return( <OnAuth>
            <Component {...pageProps} />
          </OnAuth>
  )
}

export default MyApp
