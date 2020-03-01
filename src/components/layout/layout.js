import React from 'react';
import { Navbar } from '../nav/navbar';
import { Header } from '../header/header';
import { Socials } from '../socials/socials';
import { TourDates } from '../tour-dates/tourDates';
import { MobileNavMenu } from '../nav/mobileNavMenu';
import { useAppState } from '../contexts/app/useAppState';
import { useAppDispatch } from '../contexts/app/useAppDispatch';
import Link from 'next/link';

export const Layout = ({ children }) => {
  const { user } = useAppState();
  const { logout } = useAppDispatch();

  const handleLogout = () => logout();

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
        {user.authenticated && (
          <div className="p-1">
            <p>Logged in as: {user.credentials.handle}</p>
            <div className="flex">
              <button
                className="mb-1 mr-1 font-normal text-white bg-black cursor-pointer hover:text-legbah-gold font-body"
                onClick={handleLogout}
              >
                Logout
              </button>
              {' - '}
              <div className="ml-1 hover:text-legbah-gold">
                <Link href="/extras/admin">
                  <button>Admin</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
