import Head from 'next/head';
import React from 'react';
import './styles.css';

import { Layout } from '../components/layout/layout';
import AppProvider from '../components/contexts/app/appContext';
import { Configuration } from '../components/configuration/configuration';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>LEGBAH: Official site</title>
        <link rel="shortcut icon" href="/static/legbah-favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=UnifrakturCook:700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppProvider>
        <Configuration>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Configuration>
      </AppProvider>
    </React.Fragment>
  );
}

export default MyApp;
