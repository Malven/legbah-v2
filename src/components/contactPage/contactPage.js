import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { GalleryLoader } from '../visuals/galleryLoader';

export const ContactPage = ({ photos }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [showMessage, setShowMessage] = useState(false);

  // const onSubmit = data => {
  //   if (loading) {
  //     return;
  //   }
  //   setShowMessage(true);
  //   const content = editorState.getCurrentContent();
  //   data.message = convertToRaw(content);
  //   setEditorState(EditorState.createEmpty());
  //   addContact(data);
  //   reset();
  // };

  const onHandleSubmit = data => {
    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contactPage', ...data })
    })
      .then(() => {
        setShowMessage(true);
        reset();
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      })
      .catch(error => alert(error));
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="font-display">Contact</h1>
      <div className="w-full">
        <h2 className="text-center">Press images</h2>
        <GalleryLoader photos={photos} />
        <h2 className="mt-1">Get in contact</h2>
        <form
          className="flex flex-col text-black"
          onSubmit={handleSubmit(onHandleSubmit)}
        >
          <input type="hidden" name="form-name" value="contactPage" />
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
          <label className="text-white" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            style={{ minHeight: '6em' }}
            className="w-full px-4 py-2 mb-2 leading-tight text-gray-700 bg-gray-200 border border-transparent rounded outline-none appearance-none focus:shadow-focus hover:bg-white hover:border-gray-300 focus:bg-white"
            ref={register({ required: true })}
          >
            {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
          </textarea>

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
