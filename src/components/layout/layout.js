import React from 'react';
import { Navbar } from '../nav/navbar';
import useMedia from 'use-media';
import { Header } from '../header/header';
import { Socials } from '../socials/socials';
import { TourDates } from '../tour-dates/tourDates';

export const Layout = ({ children }) => {
  const isWide = useMedia({ minWidth: 1450 });

  return (
    <div className="legbah-grid-container">
      <div className={`legbah-header ${!isWide ? 'header-logo__center' : ''}`}>
        <Header />
      </div>
      <div className="legbah-social">
        <Socials />
      </div>
      <div className="legbah-main">{children}</div>
      <div className="legbah-navbar">
        <Navbar />
      </div>
      <div className="legbah-tour-dates">
        <div className="legbah-tour-dates_container">
          <h2>
            Tour Header
            <hr />
          </h2>
          <TourDates />
        </div>
      </div>
    </div>
  );
};
