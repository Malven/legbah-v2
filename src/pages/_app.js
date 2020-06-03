import Head from 'next/head';
import React from 'react';
import './styles.css';

import { Layout } from '../components/layout/layout';
import AppProvider from '../components/contexts/app/appContext';
import { EnterSite } from '../components/enterSite/enterSite';

function MyApp({ Component, pageProps, router }) {
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
      {router.pathname !== '/' ? (
        <AppProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
      ) : (
        <EnterSite />
      )}
    </React.Fragment>
  );
}

export default MyApp;
