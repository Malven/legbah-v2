import React, { useEffect, useState } from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useForm } from 'react-hook-form';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import Link from 'next/link';
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

    if (news.length === 0) {
      setup();
    }
  }, [getNews, news]);

  const createNews = async data => {
    if (!loading) {
      const content = editorState.getCurrentContent();
      data.body = convertToRaw(content);
      setEditorState(EditorState.createEmpty());
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
      <h1>News</h1>
      <ul>
        {news.length > 0 &&
          news.map(n => (
            <li className="flex flex-col md:flex-row my-2" key={n.newsId}>
              <span className="mr-2">
                {format(new Date(n.createdAt), 'dd.MM.yyyy')}
              </span>
              <div>
                {EditorState.createWithContent(convertFromRaw(n.body))
                  .getCurrentContent()

                  .getPlainText()
                  .substring(0, 50) + '...'}
              </div>
              <div className="flex justify-between">
                <Link href={`/extras/admin/post?newsId=${n.newsId}`}>
                  <button
                    className={`mr-4 md:mr-0 md:ml-2 border hover:border-legbah-gold hover:text-legbah-gold px-1 rounded text-base w-1/2 md:w-auto ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Edit
                  </button>
                </Link>
                <button
                  className={`md:ml-2 border hover:border-legbah-gold hover:text-legbah-gold px-1 rounded text-base w-1/2 md:w-auto ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  onClick={() => deleteOneNews(n.newsId)}
                >
                  Delete
                </button>
              </div>
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
