import React, { useEffect, useState } from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useForm } from 'react-hook-form';
import { convertToRaw, EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import draftToHtml from 'draftjs-to-html';
import { format } from 'date-fns';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);

export const AdminPosts = () => {
  const { getNews, postNews, deleteNews } = useAppDispatch();
  const {
    data: { news, loading }
  } = useAppState();
  const { register, handleSubmit } = useForm();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

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

  const createNews = async data => {
    if (!loading) {
      const content = editorState.getCurrentContent();
      console.log(convertToRaw(content));
      data.body = convertToRaw(content);
      await postNews(data);
    }
  };

  const deleteOneNews = async newsId => {
    if (!loading) {
      await deleteNews(newsId);
    }
  };

  return (
    <>
      <ul>
        {news.length > 0 &&
          news.map((n, index) => (
            <li key={n.newsId}>
              <h2>
                {format(new Date(n.createdAt), 'dd.MM.yyyy')}
                <button
                  className="ml-2 border hover:border-legbah-gold hover:text-legbah-gold px-1 rounded text-base"
                  onClick={() => deleteOneNews(n.newsId)}
                >
                  Delete
                </button>
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: draftToHtml(n.body)
                }}
              />

              {index !== news.length - 1 && (
                <hr className="my-4 border-legbah-gold" />
              )}
            </li>
          ))}
      </ul>
      <form
        className="flex flex-col text-black"
        onSubmit={handleSubmit(createNews)}
      >
        <label className="text-white" htmlFor="body">
          Message
        </label>
        <input
          ref={register}
          style={{ display: 'none' }}
          name="body"
          id="body"
        />
        <div
          style={{ minHeight: '6em' }}
          className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>

        <input
          type="submit"
          value="Add"
          className="cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1"
        />
      </form>
    </>
  );
};
