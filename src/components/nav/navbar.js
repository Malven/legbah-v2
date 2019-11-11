import React from 'react';
import { NavMenu } from './navMenu';
import { MobileNavMenu } from './mobileNavMenu';

export const Navbar = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileNavMenu />
      </div>
      <div className="hidden md:flex justify-around p-5">
        <NavMenu />
      </div>
    </div>
  );
};
