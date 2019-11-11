import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const NavMenu = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <div
        className={`text-4xl font-display hover:text-legbah-gold ${
          router.pathname === '/news' ? 'text-legbah-gold' : ''
        }`}
      >
        <Link href="/news">
          <button>News</button>
        </Link>
      </div>
      <div
        className={`text-4xl font-display hover:text-legbah-gold ${
          router.pathname === '/releases' ? 'text-legbah-gold' : ''
        }`}
      >
        <Link href="/releases">
          <button>Releases</button>
        </Link>
      </div>
      <div
        className={`text-4xl font-display hover:text-legbah-gold ${
          router.pathname === '/visuals' ? 'text-legbah-gold' : ''
        }`}
      >
        <Link href="/releases">
          <button>Visuals</button>
        </Link>
      </div>
      <div
        className={`text-4xl font-display hover:text-legbah-gold ${
          router.pathname === '/webstore' ? 'text-legbah-gold' : ''
        }`}
      >
        <Link href="/releases">
          <button>Webstore</button>
        </Link>
      </div>
      <div
        className={`text-4xl font-display hover:text-legbah-gold ${
          router.pathname === '/contact' ? 'text-legbah-gold' : ''
        }`}
      >
        <Link href="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </React.Fragment>
  );
};
