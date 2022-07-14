import {AppProps} from 'next/app'
import { Header } from '../components/Header'
import '../styles/global.scss'

//Esse arquivo acessa todos os componentes que estão dentro de pages.
//Funciona de maneira parecida a context.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
