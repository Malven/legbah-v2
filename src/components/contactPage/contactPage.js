import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { GalleryLoader } from '../visuals/galleryLoader';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import { useAppState } from '../contexts/app/useAppState';

export const ContactPage = ({ photos }) => {
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
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Your Role:
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button onClick={e => e.preventDefault()} type="submit">
            Send
          </button>
        </p>
      </form>
      <h1 className="font-display">Contact</h1>
      <div className="w-full">
        <h2 className="text-center">Press images</h2>
        <GalleryLoader photos={photos} />
        <h2 className="mt-1">Get in contact</h2>
        <form
          className="flex flex-col text-black"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-white" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            className="w-full px-4 py-2 mb-2 leading-tight text-gray-700 bg-gray-200 border border-transparent rounded outline-none appearance-none focus:shadow-focus hover:bg-white hover:border-gray-300 focus:bg-white"
            name="email"
            ref={register({
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          {errors.email && (
            <span className="mb-2 text-red-500">
              This field must be a valid email
            </span>
          )}
          <label className="text-white" htmlFor="subject">
            Subject *
          </label>
          <input
            id="subject"
            className="w-full px-4 py-2 mb-2 leading-tight text-gray-700 bg-gray-200 border border-transparent rounded outline-none appearance-none focus:shadow-focus hover:bg-white hover:border-gray-300 focus:bg-white"
            name="subject"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <span className="mb-2 text-red-500">This field is required</span>
          )}
          <label className="text-white" htmlFor="subject">
            Message
          </label>
          <div
            style={{ minHeight: '6em' }}
            className="w-full px-4 py-2 mb-2 leading-tight text-gray-700 bg-gray-200 border border-transparent rounded outline-none appearance-none focus:shadow-focus hover:bg-white hover:border-gray-300 focus:bg-white"
          >
            <Editor editorState={editorState} onChange={setEditorState} />
          </div>

          {showMessage && (
            <div className="text-xl text-white">Message sent</div>
          )}
          <input
            type="submit"
            value="Send"
            className="px-4 py-2 mt-1 mb-2 text-xl font-normal text-white bg-black border rounded cursor-pointer hover:border-legbah-gold hover:text-legbah-gold font-body"
          />
        </form>
      </div>
    </div>
  );
};
