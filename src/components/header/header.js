import React from 'react';

export const Header = () => {
  return (
    <>
      <img
        className="h-48 hidden md:inline-flex object-contain"
        src="/static/sun.png"
        alt="sun of Legbah"
      />

      <img
        className="h-full md:inline-flex object-contain"
        src="/static/legbah-inverted.png"
        alt="logotype of Legbah"
      />

      <img
        className="h-48 hidden md:inline-flex object-contain"
        src="/static/sun.png"
        alt="sun of Legbah"
      />
    </>
  );
};
