import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GalleryLoader } from '../visuals/galleryLoader';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import { useAppState } from '../contexts/app/useAppState';

export const ContactPage = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const { addContact } = useAppDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const {
    data: { loading }
  } = useAppState();

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

  const onSubmit = data => {
    if (loading) {
      return;
    }
    setShowMessage(true);
    const content = editorState.getCurrentContent();
    data.message = convertToRaw(content);
    setEditorState(EditorState.createEmpty());
    addContact(data);
    reset();
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="font-display">Contact</h1>
      <div className="w-1/2">
        <h2 className="text-center">Press images</h2>
        <GalleryLoader type="press" />
        <h2 className="mt-1">Get in contact</h2>
        <div className="w-full">
          <form
            className="flex flex-col text-black"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-white" htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
              name="email"
              ref={register({
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email && (
              <span className="text-red-500 mb-2">
                This field must be a valid email
              </span>
            )}
            <label className="text-white" htmlFor="subject">
              Subject *
            </label>
            <input
              id="subject"
              className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
              name="subject"
              ref={register({ required: true })}
            />
            {errors.subject && (
              <span className="text-red-500 mb-2">This field is required</span>
            )}
            <label className="text-white" htmlFor="subject">
              Message
            </label>
            <div
              style={{ minHeight: '6em' }}
              className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
            >
              <Editor editorState={editorState} onChange={setEditorState} />
            </div>

            {showMessage && (
              <div className="text-white text-xl">Message sent</div>
            )}
            <input
              type="submit"
              value="Send"
              className="cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
