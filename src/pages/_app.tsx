import {AppProps} from 'next/app'

//Esse arquivo acessa todos os componentes que estão dentro de pages.
//Funciona de maneira parecida a context.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
