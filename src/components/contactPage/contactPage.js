import React from 'react';
import useForm from 'react-hook-form';

export const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="contact-container">
      <h2>Press images</h2>
      <div className="contact-presskits h-full mb-4">
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
      <div className="contact-form">
        <form
          className="contact-form-wrapper text-black"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="text-white" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            className="contact-form-input text-lg"
            name="email"
            ref={register({
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          {errors.email && (
            <span className="contact-form-input-error">
              This field must be a valid email
            </span>
          )}
          <label className="text-white" htmlFor="subject">
            Subject *
          </label>
          <input
            id="subject"
            className="contact-form-input text-lg"
            name="subject"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <span className="contact-form-input-error">
              This field is required
            </span>
          )}
          <label className="text-white" htmlFor="content">
            Message *
          </label>
          <textarea
            id="content"
            className="contact-form-input text-lg"
            name="content"
            ref={register({ required: true })}
          ></textarea>
          {errors.content && (
            <span className="contact-form-input-error">
              This field is required
            </span>
          )}

          <input
            type="submit"
            value="Send"
            class="cursor-pointer border hover:border-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1"
          />
        </form>
      </div>
    </div>
  );
};
