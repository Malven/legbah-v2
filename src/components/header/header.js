import React from 'react';
import useMedia from 'use-media';

export const Header = () => {
  const isWide = useMedia({ minWidth: 1450 });

  return (
    <>
      {isWide ? (
        <img
          style={{ height: '250px' }}
          src="/static/sun.png"
          alt="sun of Legbah"
        />
      ) : null}

      <img
        style={{
          height: '250px',
          width: '500px'
        }}
        src="/static/legbah-inverted.png"
        alt="logotype of Legbah"
      />

      {isWide ? (
        <img
          style={{ height: '250px' }}
          src="/static/sun.png"
          alt="sun of Legbah"
        />
      ) : null}
    </>
  );
};
