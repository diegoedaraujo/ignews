import { Html, Head, Main, NextScript } from 'next/document'

//Esse componente é renderizado apenas uma única vez
export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}