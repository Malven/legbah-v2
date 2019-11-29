import React from 'react';
const faker = require('faker/locale/sv');

export const TourDates = () => (
  <div className="flex flex-col pt-5">
    <h1 className="self-center font-display text-4xl">Tour dates</h1>
    <hr className="mb-1" />
    <ul className="list-inside">
      <li className="">
        <span className="text-legbah-gray text-lg">
          {`${faker.date
            .future()
            .getFullYear()
            .toString()
            .substr(
              2,
              2
            )}.${faker.date
            .future()
            .getMonth()}.${faker.date.future().getDate()}`}
        </span>{' '}
        - The Dome - {faker.address.city()}
      </li>
      <li className="">
        <span className="text-legbah-gray text-lg">
          {`${faker.date
            .future()
            .getFullYear()
            .toString()
            .substr(
              2,
              2
            )}.${faker.date
            .future()
            .getMonth()}.${faker.date.future().getDate()}`}
        </span>{' '}
        - The Dome - {faker.address.city()}
      </li>
      <li className="">
        <span className="text-legbah-gray text-lg">
          {`${faker.date
            .future()
            .getFullYear()
            .toString()
            .substr(
              2,
              2
            )}.${faker.date
            .future()
            .getMonth()}.${faker.date.future().getDate()}`}
        </span>{' '}
        - The Dome - {faker.address.city()}
      </li>
      <li className="">
        <span className="text-legbah-gray text-lg">
          {`${faker.date
            .future()
            .getFullYear()
            .toString()
            .substr(
              2,
              2
            )}.${faker.date
            .future()
            .getMonth()}.${faker.date.future().getDate()}`}
        </span>{' '}
        - The Dome - {faker.address.city()}
      </li>
      <li className="">
        <span className="text-legbah-gray text-lg">
          {`${faker.date
            .future()
            .getFullYear()
            .toString()
            .substr(
              2,
              2
            )}.${faker.date
            .future()
            .getMonth()}.${faker.date.future().getDate()}`}
        </span>{' '}
        - The Dome - {faker.address.city()}
      </li>
      <li className="">
        <span className="text-legbah-gray text-lg">
          {`${faker.date
            .future()
            .getFullYear()
            .toString()
            .substr(
              2,
              2
            )}.${faker.date
            .future()
            .getMonth()}.${faker.date.future().getDate()}`}
        </span>{' '}
        - The Dome - {faker.address.city()}
      </li>
    </ul>
  </div>
);
