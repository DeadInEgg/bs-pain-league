import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

const roboto = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.className} w-full h-full`}>
      <Component {...pageProps} />

      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </main>
  )
}
