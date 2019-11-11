import React from 'react';

export const Header = () => {
  return (
    <>
      <img
        className="object-contain w-1/5 hidden sm:hidden md:hidden lg:block"
        src="/static/sun.png"
        alt="sun of Legbah"
      />

      <img
        className="max-h-full object-contain w-full sm:w-full md:w-full lg:w-1/2"
        src="/static/legbah-inverted.png"
        alt="logotype of Legbah"
      />

      <img
        className="object-contain w-1/5 hidden sm:hidden md:hidden lg:block"
        src="/static/sun.png"
        alt="sun of Legbah"
      />
    </>
  );
};
