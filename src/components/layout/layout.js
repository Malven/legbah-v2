import React from 'react';
import { Navbar } from '../nav/navbar';
import { Header } from '../header/header';
import { Socials } from '../socials/socials';
import { TourDates } from '../tour-dates/tourDates';
import { MobileNavMenu } from '../nav/mobileNavMenu';

export const Layout = ({ children }) => {
  return (
    <div>
      <div className="md:hidden">
        <MobileNavMenu />
      </div>
      <div className="container mx-auto">
        <div className="m-auto legbah-container">
          <div className="flex justify-between hidden mt-10 header md:flex">
            <Header />
          </div>
          <div className="nav">
            <Navbar />
          </div>
          <div className="p-1 main">{children}</div>
          <div className="p-1 tour">
            <TourDates />
          </div>
          <div className="social">
            <Socials />
            <div className="flex flex-col justify-center md:flex-row">
              <form
                className="flex flex-col self-center w-2/4 md:flex-row md:items-center"
                method="POST"
                action="https://gansub.com/s/LOPbuRB3Q8/"
              >
                <label
                  className="m-1 text-center md:text-right"
                  htmlFor="email"
                >
                  Join our mailing list
                </label>
                <input
                  className="px-4 py-2 m-1 leading-tight text-gray-700 bg-gray-200 border border-transparent rounded outline-none appearance-none focus:bg-white focus:shadow-focus hover:bg-white hover:border-gray-300 md:w-1/3"
                  type="text"
                  id="email"
                  name="email"
                />

                <input type="hidden" name="gan_repeat_email" />
                <input
                  className="px-4 py-1 m-1 text-xl font-normal text-white bg-black border rounded cursor-pointer font-body hover:border-legbah-gold hover:text-legbah-gold"
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
