import React, { useState, useEffect } from 'react';
import { convertToRaw, convertFromRaw, EditorState } from 'draft-js';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Switch } from '../switch/switch';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
);

export const AdminEditPost = ({ newsId }) => {
  const {
    data: { news, currentNews, loading }
  } = useAppState();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [showMessage, setShowMessage] = useState(false);
  const [added, setAdded] = useState(false);
  const [checked, setChecked] = useState(() => {
    if (newsId) {
      const found = news.find(x => x.newsId === newsId);
      if (found) {
        return found.published;
      }
      return false;
    }
  });
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
    updateNews({ newsId, body: convertToRaw(content), published: checked });
    setShowMessage(true);
  };

  const onChange = value => {
    setChecked(value);
  };

  return (
    <>
      <Link href="/extras/admin">
        <button className="px-4 py-2 mt-1 mb-2 text-xl font-normal text-white bg-black border rounded cursor-pointer hover:border-legbah-gold hover:text-legbah-gold font-body">
          Back to Admin
        </button>
      </Link>
      <div
        style={{ minHeight: '6em' }}
        className="w-full px-4 py-2 mb-2 leading-tight text-gray-700 bg-gray-200 border border-transparent rounded outline-none appearance-none focus:shadow-focus hover:bg-white hover:border-gray-300 focus:bg-white"
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      <Switch
        id="newsDraft"
        name="newsDraft"
        onChange={onChange}
        currentValue={checked}
      />

      {showMessage && (
        <div className="text-xl text-white">News post updated</div>
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
