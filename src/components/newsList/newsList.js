import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import draftToHtml from 'draftjs-to-html';

export const NewsList = () => {
  const { getNews } = useAppDispatch();
  const {
    data: { news }
  } = useAppState();

  useEffect(() => {
    const setup = async () => {
      if (!news.length) {
        getNews();
      }
    };

    setup();
  }, [getNews, news.length]);

  return (
    <div className="flex flex-col p-5">
      <h1 className="self-center font-display">News</h1>
      {news
        .filter(n => n.published)
        .map((n, index) => (
          <div key={n.newsId} className="flex flex-col">
            <h2 className="self-center">
              {format(new Date(n.createdAt), 'dd.MM.yyyy')}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: draftToHtml(n.body) }} />
            {index !== news.length - 1 && (
              <hr className="my-4 border-legbah-gold" />
            )}
          </div>
        ))}
    </div>
  );
};

NewsList.defaultProps = {
  news: []
};
