import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useRouter } from 'next/router';
import { useAppState } from '../contexts/app/useAppState';

export const Signup = () => {
  const { register, handleSubmit, errors, getValues } = useForm();
  const { signup, clearErrors } = useAppDispatch();
  const {
    ui: { loading, errors: uiErrors }
  } = useAppState();
  const router = useRouter();

  const onSubmit = data => {
    clearErrors();
    signup(data, router);
  };

  return (
    <div className="flex flex-col items-center  p-5">
      <h1 className="font-display">Signup</h1>
      <div>
        <h2 className="text-center">Create an admin user</h2>
        <div className="w-full">
          <form
            className="flex flex-col text-black"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="text-white" htmlFor="handle">
              Username *
            </label>
            <input
              id="handle"
              className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
              name="handle"
              ref={register({
                required: true
              })}
            />
            {errors.handle && (
              <span className="text-red-500 mb-2">This field is required</span>
            )}
            {uiErrors.handle && (
              <span className="text-red-500 mb-2">{uiErrors.handle}</span>
            )}

            <label className="text-white" htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
              name="email"
              ref={register({
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email && (
              <span className="text-red-500 mb-2">
                This field must be a valid email
              </span>
            )}
            {uiErrors.email && (
              <span className="text-red-500 mb-2">{uiErrors.email}</span>
            )}

            <label className="text-white" htmlFor="password">
              Password *
            </label>
            <input
              id="password"
              className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
              name="password"
              type="password"
              ref={register({ required: true })}
            />
            {errors.password && (
              <span className="text-red-500 mb-2">This field is required</span>
            )}

            <label className="text-white" htmlFor="confirmPassword">
              Confirm password *
            </label>
            <input
              id="confirmPassword"
              className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
              name="confirmPassword"
              type="password"
              ref={register({
                required: true,
                validate: value => {
                  const values = getValues();
                  return values.password === value;
                }
              })}
            />
            {errors.confirmPassword &&
              errors.confirmPassword.type !== 'validate' && (
                <span className="text-red-500 mb-2">
                  This field is required
                </span>
              )}
            {errors.confirmPassword &&
              errors.confirmPassword.type === 'validate' && (
                <span className="text-red-500 mb-2">
                  This field must match password field
                </span>
              )}

            {uiErrors.general && (
              <span className="text-red-500 mb-2">{uiErrors.general}</span>
            )}

            <input
              type="submit"
              value="Signup"
              className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            />
            <pre className="text-white">
              {JSON.stringify(uiErrors, null, 2)}
            </pre>
          </form>
        </div>
      </div>
    </div>
  );
};
