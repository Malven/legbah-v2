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
        <div className="legbah-container">
          <div className="flex header hidden justify-between md:flex">
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
        {user.authenticated && (
          <div>
            <p>Logged in as: {user.credentials.handle}</p>
            <div className="flex">
              <button
                className="cursor-pointer mr-1 hover:text-legbah-gold font-body bg-black text-white font-normal mb-1"
                onClick={handleLogout}
              >
                Logout
              </button>
              {' - '}
              <div className="hover:text-legbah-gold ml-1">
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
