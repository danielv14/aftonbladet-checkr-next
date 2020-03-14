import * as React from 'react';
import { AppProps } from 'next/app';
import '../assets/global.css';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { theme } from '../settings/theming/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aftonbladet-Checker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
