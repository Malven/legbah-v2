import React from 'react';
import { WebStore } from '../components/webstore/webstore';
import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';

const Store = ({ articles }) => <WebStore articles={articles} />;

export async function getStaticProps() {
  const articles = await client.query(
    Prismic.Predicates.at('document.type', 'article')
  );

  return {
    props: { articles }
  };
}

export default Store;
