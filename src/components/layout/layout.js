import React from 'react';
import { Navbar } from '../nav/navbar';
import { Header } from '../header/header';
import { Socials } from '../socials/socials';
import { TourDates } from '../tour-dates/tourDates';

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="legbah-container">
        <div className="header">
          <Header />
        </div>
        <div className="nav">
          <Navbar />
        </div>
        <div className="main">{children}</div>
        <div className="tour">
          <TourDates />
        </div>
        <div className="social">
          <Socials />
        </div>
      </div>
    </div>
  );
};
