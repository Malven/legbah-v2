import React from 'react';
import useForm from 'react-hook-form';

export const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <h1>Contact us here or download presskits</h1>
      <hr />
      <div className="contact-presskits">
        <div className="contact-presskits__item">
          <img
            src="/static/legbah-inverted.png"
            alt="legbah logo, white text on black background"
          />
        </div>
        <div className="contact-presskits__item">
          <img
            src="/static/legbah-white.jpg"
            alt="legbah logo, black text on white background"
          />
        </div>
        <div className="contact-presskits__item">
          <img
            src="/static/legbah.jpeg"
            alt="legbah album cover, gold text on black background"
          />
        </div>
      </div>
      <div className="contact-form">
        <form
          className="contact-form-wrapper"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            className="contact-form-input"
            name="email"
            ref={register({
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            })}
          />
          {errors.email && (
            <span className="contact-form-input-error">
              This field must be a valid email
            </span>
          )}
          <label htmlFor="subject">Subject *</label>
          <input
            id="subject"
            className="contact-form-input"
            name="subject"
            ref={register({ required: true })}
          />
          {errors.subject && (
            <span className="contact-form-input-error">
              This field is required
            </span>
          )}
          <label htmlFor="content">Message *</label>
          <textarea
            id="content"
            className="contact-form-input"
            name="content"
            ref={register({ required: true })}
          ></textarea>
          {errors.content && (
            <span className="contact-form-input-error">
              This field is required
            </span>
          )}

          <input className="contact-form-input" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
