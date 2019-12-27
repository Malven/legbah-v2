import React from 'react';
import { NewsList } from '../components/newsList/newsList';
import axios from 'axios';

const News = ({ news }) => {
  return <NewsList news={news} />;
};

News.getInitialProps = async () => {
  const res = await axios.get('/news');
  return { news: res.data };
};

export default News;
