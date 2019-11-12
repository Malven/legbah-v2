import React from 'react';
import useForm from 'react-hook-form';

export const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center  p-5">
      <h1 className="font-display">Contact</h1>
      <div className="flex flex-col items-center">
        <h2>Press images</h2>
        <div className="flex flex-wrap justify-center items-center h-full">
          <img
            className="object-contain border hover:border-legbah-gold cursor-pointer w-1/3 m-2"
            src="/static/legbah-inverted.png"
            alt="legbah logo, white text on black background"
          />
          <img
            className="object-scale-down border hover:border-legbah-gold cursor-pointer w-1/3 m-2"
            src="/static/legbah-white.jpg"
            alt="legbah logo, black text on white background"
          />
          <img
            className="object-contain border hover:border-legbah-gold cursor-pointer w-1/3 m-2"
            src="/static/legbah.jpeg"
            alt="legbah album cover, gold text on black background"
          />
        </div>
        <h2>Get in contact</h2>
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
            <label className="text-white" htmlFor="content">
              Message *
            </label>
            <textarea
              id="content"
              className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
              name="content"
              ref={register({ required: true })}
            ></textarea>
            {errors.content && (
              <span className="text-red-500 mb-2">This field is required</span>
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
