import Prismic from 'prismic-javascript';
import React from 'react';
import { WebStore } from '../components/webstore/webstore';
import { client } from '../prismic-configuration';

const Store = ({ articles, webstoreContent }) => (
  <WebStore articles={articles} content={webstoreContent} />
);

export async function getStaticProps() {
  const articles = await client(process.env.PRISMIC).query(
    Prismic.Predicates.at('document.type', 'article')
  );

  const webstoreContent = await client(process.env.PRISMIC).getSingle(
    'webstore'
  );

  return {
    props: { articles, webstoreContent }
  };
}

export default Store;
