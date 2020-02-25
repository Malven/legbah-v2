import React, { useState, useEffect } from 'react';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);

export const AdminEditPost = ({ newsId }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showMessage, setShowMessage] = useState(false);
  const [added, setAdded] = useState(false);
  const {
    data: { news, currentNews, loading }
  } = useAppState();
  const { updateNews, getNews } = useAppDispatch();

  useEffect(() => {
    if (newsId && !added) {
      const found = news.find(x => x.newsId === newsId);
      if (found) {
        setEditorState(
          EditorState.createWithContent(convertFromRaw(found.body))
        );
        setAdded(true);
      } else {
        if (news.length === 0) {
          getNews();
        }
      }
    }
  }, [added, currentNews, getNews, news, newsId]);

  useEffect(() => {
    let ignore = false;
    if (showMessage) {
      setTimeout(() => {
        if (!ignore) {
          setShowMessage(false);
        }
      }, 3000);
    }

    return () => (ignore = true);
  }, [showMessage]);

  const onUpdate = () => {
    if (loading) {
      return;
    }
    const content = editorState.getCurrentContent();
    updateNews({ newsId, body: convertToRaw(content) });
    setShowMessage(true);
  };

  return (
    <>
      <Link href="/extras/admin">
        <button className="cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1">
          Back to Admin
        </button>
      </Link>
      <div
        style={{ minHeight: '6em' }}
        className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      {showMessage && (
        <div className="text-white text-xl">News post updated</div>
      )}
      <button
        onClick={onUpdate}
        className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        Update
      </button>
    </>
  );
};
