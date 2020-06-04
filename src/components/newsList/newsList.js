import React from 'react';
import { format } from 'date-fns';
import { RichText, Date } from 'prismic-reactjs';
import { linkResolver } from '../../prismic-configuration';

export const NewsList = ({ news }) => {
  return (
    <div className="flex flex-col p-5">
      <h1 className="self-center font-display">News</h1>
      {news?.results.map((n, index) => (
        <div key={n.uid} className="flex flex-col">
          <h3 className="self-center">
            {format(Date(n.data.date), 'dd.MM.yyyy')}
          </h3>

          <div className="text-center text-legbah-gold">
            <RichText render={n.data.title} linkResolver={linkResolver} />
          </div>
          <div className="flex flex-col items-center text-center">
            <RichText render={n.data.content} linkResolver={linkResolver} />
          </div>

          {news.results.length > 1 && index !== news.results.length - 1 && (
            <hr className="my-4 border-legbah-gold" />
          )}
        </div>
      ))}
    </div>
  );
};
