import Head from 'next/head';
import React from 'react';
import './styles.css';

import { Layout } from '../components/layout/layout';
import { EnterSite } from '../components/enterSite/enterSite';

function MyApp({ Component, pageProps, router }) {
  return (
    <React.Fragment>
      <Head>
        <title>LEGBAH: Official site</title>
        <meta name="description" content="Official page for the band Legbah" />
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <EnterSite />
      )}
    </React.Fragment>
  );
}

export default MyApp;
