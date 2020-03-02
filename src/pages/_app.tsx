import * as React from 'react';
import { AppProps } from 'next/app';
import '../assets/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aftonbladet-Checker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
