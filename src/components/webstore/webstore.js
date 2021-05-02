import { RichText } from 'prismic-reactjs';
import React, { useState } from 'react';
import { linkResolver } from '../../prismic-configuration';

const Article = ({ article }) => {
  return (
    <div className="flex flex-col h-full border border-gray-600 hover:border-legbah-gold">
      <div className="w-full border border-t-0 border-l-0 border-r-0 border-gray-600 md:h-auto">
        <img
          height={article.image.dimensions.height}
          width={article.image.dimensions.width}
          src={article.image.url}
          alt={article.image.alt}
          className="w-full h-full"
        />
      </div>
      <ul className="w-full">
        <li className="p-1 border border-t-0 border-l-0 border-r-0 border-legbah-gray">
          {article.name}
        </li>
        {article.sizes?.map((s, index) => (
          <li
            key={`${s}-${index}`}
            className="p-1 border border-t-0 border-l-0 border-r-0 border-legbah-gray"
          >
            <ul>
              <li key={`article-${index}`} className="inline-block">
                {s.in_stock ? (
                  <span className="mr-1 text-green-500">{s.size}</span>
                ) : (
                  <span className="mr-1 text-red-500">{s.size}</span>
                )}
              </li>
            </ul>
          </li>
        ))}
        <li className="p-1 border border-t-0 border-l-0 border-r-0 border-legbah-gray">
          Art nr: {article.article_number}
        </li>
        <li className="p-1">{article.cost} SEK + shipping</li>
      </ul>
    </div>
  );
};

const compare = (a, b, reverse) => {
  if (reverse) {
    return b - a;
  }
  return a - b;
};

export const WebStore = ({ articles, content }) => {
  const [sortedArticles, setSortedArticles] = useState(() =>
    articles?.results.sort((a, b) => compare(a.data.cost, b.data.cost, true))
  );
  const [highestFirst, setHighestFirst] = useState(false);

  const onSort = () => {
    const arts = articles?.results.sort((a, b) =>
      compare(a.data.cost, b.data.cost, highestFirst)
    );

    setSortedArticles(arts);
    setHighestFirst(highest => !highest);
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="self-center font-display">Store</h1>
      <div className="mb-1">
        <RichText render={content?.data.content} linkResolver={linkResolver} />
      </div>
      <div>
        <button
          className="flex items-baseline p-1 m-2 border rounded border-legbah-gray hover:border-legbah-gold"
          onClick={onSort}
        >
          <span>Sort by price</span>
          <i className="ml-1">
            <SortIcon size={12} highestFirst={highestFirst} />
          </i>
        </button>
      </div>
      <div className="article-grid">
        {sortedArticles?.map(article => (
          <div key={article.uid}>
            <Article article={article.data} />
          </div>
        ))}
      </div>
    </div>
  );
};

const SortIcon = ({ size, highestFirst }) => {
  let rects = [
    <rect
      key="rect1"
      x="0"
      y={`${highestFirst ? '64' : '277.333'}`}
      width="128"
      height="42.667"
      fill="#fff"
    />,
    <rect
      key="rect2"
      x="0"
      y="170.667"
      width="256"
      height="42.667"
      fill="#fff"
    />,
    <rect
      key="rect3"
      x="0"
      y={`${highestFirst ? '277.333' : '64'}`}
      width="384"
      height="42.667"
      fill="#fff"
    />
  ];

  return (
    <svg viewBox="0 0 384 384" width={size} height={size}>
      <g>{rects}</g>
    </svg>
  );
};
