import Head from 'next/head';
import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>Top App</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
