import React, { useEffect, useState } from 'react';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useForm } from 'react-hook-form';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { format } from 'date-fns';
import { Switch } from '../switch/switch';

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
            <li
              className="flex flex-col justify-between my-2 md:flex-row"
              key={n.newsId}
            >
              <span className="mr-2 text-legbah-gray">
                {format(new Date(n.createdAt), 'dd.MM.yyyy')}
              </span>
              <div className="w-full md:mr-2">
                {EditorState.createWithContent(convertFromRaw(n.body))
                  .getCurrentContent()
                  .getPlainText()
                  .substring(0, 50) + '...'}
              </div>
              <div className="flex flex-col-reverse justify-between md:flex-row-reverse md:w-3/5">
                <div className="flex flex-col justify-end w-full md:flex-row">
                  <Link href={`/extras/admin/post?newsId=${n.newsId}`}>
                    <button
                      className={`border hover:border-legbah-gold hover:text-legbah-gold px-1 md:mr-2 rounded text-base ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    className={`border hover:border-legbah-gold hover:text-legbah-gold px-1 rounded text-base ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => deleteOneNews(n.newsId)}
                  >
                    Delete
                  </button>
                </div>
                <span
                  className={`md:w-auto px-1 rounded text-base text-yellow-400 border ${
                    n.published
                      ? 'border-green-500 bg-green-900 text-green-400'
                      : 'border-yellow-500 bg-yellow-900 text-yellow-400'
                  } rounded`}
                >
                  {n.published ? 'Published' : 'Draft'}
                </span>
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
          className="w-full px-4 py-2 mb-2 leading-tight text-gray-700 bg-gray-200 border border-transparent rounded outline-none appearance-none focus:shadow-focus hover:bg-white hover:border-gray-300 focus:bg-white"
        >
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
          />
        </div>
        <Switch id="newsDraft" name="newsDraft" ref={register} />

        <input
          type="submit"
          value="Add"
          className="px-4 py-2 mt-1 mb-2 text-xl font-normal text-white bg-black border rounded cursor-pointer hover:border-legbah-gold hover:text-legbah-gold font-body"
        />
      </form>
    </>
  );
};
