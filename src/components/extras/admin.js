import React, { useEffect } from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';

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
    await postNews({ body: 'this is a test' });
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
      <button onClick={createNews}>Create</button>
    </div>
  ) : (
    <div>logged out</div>
  );
};
