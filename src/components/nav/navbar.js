import React from 'react';
import { NavMenu } from './navMenu';

export const Navbar = () => {
  return (
    <div className="hidden md:flex justify-around p-5">
      <NavMenu />
    </div>
  );
};
