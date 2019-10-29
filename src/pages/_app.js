import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { withRouter } from 'next/router';
import './styles.css';
import { Layout } from '../components/layout/layout';
import { EnterSite } from '../components/enterSite/enterSite';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <EnterSite />
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(MyApp);
