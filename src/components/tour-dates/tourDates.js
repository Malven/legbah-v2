import { format } from 'date-fns';
import Prismic from 'prismic-javascript';
import { Date } from 'prismic-reactjs';
import React, { useEffect, useState } from 'react';
import { client } from '../../prismic-configuration';

export const TourDates = () => {
  const [tours, setTours] = useState();

  useEffect(() => {
    (async () => {
      if (!tours) {
        const fetchedTours = await client(
          process.env.NEXT_PUBLIC_PRISMIC
        ).query(Prismic.Predicates.at('document.type', 'tours'), {
          orderings: '[my.tours.date]'
        });
        setTours(fetchedTours);
      }
    })();
  }, [tours]);

  return (
    <div className="flex flex-col pt-5">
      <h1 className="self-center text-2xl font-display">Tour dates</h1>
      <hr className="mb-1" />
      <ul className="mx-1 list-inside">
        {tours?.results.map(tour => (
          <li key={tour.uid} className="flex justify-center">
            <span className="flex-shrink-0 text-legbah-gray">{`${format(
              Date(tour.data.date),
              'dd.MM.yyyy'
            )}:`}</span>
            <span className="ml-1">{tour.data.venue}</span>
            <span className="ml-1">{tour.data.city}</span>
            <span className="ml-1">{tour.data.country}</span>
          </li>
        ))}
        {tours?.results.length < 1 && (
          <li className="flex justify-center">No dates announced yet.</li>
        )}
      </ul>
    </div>
  );
};
