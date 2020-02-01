import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useAppState } from '../contexts/app/useAppState';

export const AdminTours = () => {
  const { register, handleSubmit, errors } = useForm();
  const { getTours, addTour, deleteTour } = useAppDispatch();
  const {
    data: { tours, loading }
  } = useAppState();

  useEffect(() => {
    const setup = async () => {
      try {
        await getTours();
      } catch (error) {
        console.error(error);
      }
    };

    if (!tours) {
      setup();
    }
  }, [getTours, tours]);

  const onSubmit = async data => {
    if (!loading) {
      await addTour(data);
    }
  };

  const handleOnDelete = async tourId => {
    if (!loading) {
      await deleteTour(tourId);
    }
  };

  return (
    <div>
      <h1>Tour dates</h1>
      {tours &&
        tours.map(tour => (
          <div key={tour.tourId} className="my-1">
            {`${tour.liveDate} - ${tour.location} - ${tour.city}${
              tour.country ? ` - ${tour.country} ` : ' '
            }`}
            <button
              className={`border hover:border-legbah-gold hover:text-legbah-gold px-1 rounded ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => handleOnDelete(tour.tourId)}
            >
              Delete
            </button>
          </div>
        ))}
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label className="text-white" htmlFor="city">
          City
        </label>
        <input
          id="city"
          className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
          name="city"
          ref={register({ required: true })}
        />
        {errors.city && (
          <span className="text-red-500 mb-2">This field is required</span>
        )}

        <label className="text-white" htmlFor="location">
          Location
        </label>
        <input
          id="location"
          className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
          name="location"
          ref={register({ required: true })}
        />
        {errors.location && (
          <span className="text-red-500 mb-2">This field is required</span>
        )}

        <label className="text-white" htmlFor="liveDate">
          Date
        </label>
        <input
          id="liveDate"
          type="date"
          className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
          name="liveDate"
          ref={register({ required: true })}
        />
        {errors.liveDate && (
          <span className="text-red-500 mb-2">This field is required</span>
        )}

        <label className="text-white" htmlFor="country">
          Country
        </label>
        <input
          id="country"
          className="mb-2 bg-gray-200 focus:shadow-focus hover:bg-white hover:border-gray-300 outline-none focus:bg-white appearance-none border border-transparent rounded w-full py-2 px-4 text-gray-700 leading-tight"
          name="country"
          ref={register}
        />

        <button
          className={`cursor-pointer border hover:border-legbah-gold hover:text-legbah-gold font-body bg-black text-white text-xl font-normal py-2 px-4 rounded mb-2 mt-1 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="submit"
        >
          Add tour
        </button>
      </form>
    </div>
  );
};
