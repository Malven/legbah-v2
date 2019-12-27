import React, { useEffect } from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
const faker = require('faker/locale/sv');

export const Admin = () => {
  const { user } = useAppState();
  const { getNews, postNews, deleteNews } = useAppDispatch();
  const {
    data: { news }
  } = useAppState();

  useEffect(() => {
    const setup = async () => {
      try {
        await getNews();
      } catch (error) {
        console.error(error);
      }
    };

    setup();
  }, [getNews]);

  const createNews = async () => {
    await postNews({ body: faker.lorem.sentences(3) });
  };

  const deleteOneNews = async newsId => {
    await deleteNews(newsId);
  };

  return user.loading ? null : user.authenticated ? (
    <div>
      <ul>
        {news.length > 0 &&
          news.map(n => (
            <li key={n.newsId}>
              {n.body}
              {n.userHandle === user.credentials.handle && (
                <>
                  {' '}
                  -{' '}
                  <button onClick={() => deleteOneNews(n.newsId)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
      </ul>
      <button
        className="cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1"
        onClick={createNews}
      >
        Create fake news post
      </button>
    </div>
  ) : (
    <div>logged out</div>
  );
};
