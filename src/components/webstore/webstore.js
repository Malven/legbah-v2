import React from 'react';
import Link from 'next/link';

const Article = ({ article }) => {
  return (
    <div className="flex flex-col h-full border border-gray-600 hover:border-legbah-gold">
      <div className="w-full bg-yellow-500 border border-t-0 border-l-0 border-r-0 border-gray-600 md:h-auto">
        <img
          height={article.image.dimensions.height}
          width={article.image.dimensions.width}
          src={article.image.url}
          alt={article.image.alt}
          className="w-full h-full"
        />
      </div>
      <ul className="w-full bg-gray-800">
        <li className="p-1 border border-t-0 border-l-0 border-r-0 border-legbah-gray">
          {article.name}
        </li>
        <li className="p-1 border border-t-0 border-l-0 border-r-0 border-legbah-gray">
          <ul>
            {article.sizes?.map(s => (
              <li className="inline-block">
                {s.in_stock ? (
                  <span className="mr-1 text-green-500">{s.size}</span>
                ) : (
                  <span className="mr-1 text-red-500">{s.size}</span>
                )}
              </li>
            ))}
          </ul>
        </li>
        <li className="p-1 border border-t-0 border-l-0 border-r-0 border-legbah-gray">
          Art nr: {article.article_number}
        </li>
        <li className="p-1">{article.cost} kr</li>
      </ul>
    </div>
  );
};

export const WebStore = ({ articles }) => {
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="self-center font-display">Store</h1>
      <p className="mb-1">
        <Link href="/contact">
          <a className="text-legbah-gold hover:text-white" href="/contact">
            Contact
          </a>
        </Link>{' '}
        us with what kind of merchandise you want together with size and amount
        and we'll email you back with payment details.
      </p>
      <div className="article-grid">
        {articles?.results.map(article => (
          <div>
            <Article key={article.uid} article={article.data} />
          </div>
        ))}
      </div>
    </div>
  );
};
