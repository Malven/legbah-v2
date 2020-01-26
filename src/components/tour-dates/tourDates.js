import React, { useEffect } from 'react';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import { useAppState } from '../contexts/app/useAppState';

export const TourDates = () => {
  const { getTours } = useAppDispatch();
  const {
    data: { tours }
  } = useAppState();

  useEffect(() => {
    const setup = async () => {
      if (!tours.length) {
        await getTours();
      }
    };

    setup();
  }, [getTours, tours]);

  return (
    <div className="flex flex-col pt-5">
      <h1 className="self-center font-display text-4xl">Tour dates</h1>
      <hr className="mb-1" />
      <ul className="list-inside mx-1">
        {tours &&
          tours.map(tour => (
            <li key={tour.tourId} className="flex">
              <span className="flex-shrink-0 text-legbah-gray">{`${tour.liveDate}:`}</span>
              <span className="ml-1">{tour.location}</span>
              <span className="ml-1">{tour.city}</span>
              <span className="ml-1">{tour.country}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
