import Head from 'next/head';
import React from 'react';
import { EnterSite } from '../components/enterSite/enterSite';
import { Layout } from '../components/layout/layout';
import './styles.css';

const titles = {
  '/contact': 'Get in touch with us',
  '/news': 'Get the latest news',
  '/releases': 'Get the latest releases',
  '/store': 'Check out our webstore',
  '/visuals/artwork': 'Check out our artwork',
  '/visuals/photos': 'Check out our photos',
  '/visuals/videos': 'Check out our videos',
  '/': 'Enter the site'
};

const descriptions = {
  '/contact': 'Get in contact with Legbah',
  '/news': 'See the latest news from Legbah',
  '/releases': 'Listen to the new releases from Legbah',
  '/store': 'Get your merch from Legbah webstore',
  '/visuals/artwork': 'See the latest artwork from Legbah',
  '/visuals/photos': "Take a look at Legbah's latest photos",
  '/visuals/videos': 'Enjoy the latest videos from Legbah',
  '/': 'Official page for the band Legbah.'
};

function MyApp({ Component, pageProps, router }) {
  return (
    <React.Fragment>
      <Head>
        <title>{`LEGBAH: Official site - ${titles[router.pathname]}`}</title>
        <meta name="description" content={descriptions[router.pathname]} />
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
