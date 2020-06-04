import React from 'react';
import { NewsList } from '../components/newsList/newsList';
import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript';

const News = ({ news }) => {
  return <NewsList news={news} />;
};

export async function getStaticProps() {
  const news = await client(process.env.PRISMIC).query(
    Prismic.Predicates.at('document.type', 'news'),
    { orderings: '[my.news.date desc]' }
  );

  return {
    props: { news }
  };
}

export default News;
