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
          </div>
        </div>
      </div>
    </div>
  );
};
