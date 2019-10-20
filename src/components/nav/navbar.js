import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
  const router = useRouter();

  return (
    <div className="navbar">
      <div
        className={`nav-links ${router.pathname === '/news' ? 'active' : ''}`}
      >
        <Link href="/news">
          <a href="/news">News</a>
        </Link>
      </div>
      <div
        className={`nav-links ${
          router.pathname === '/releases' ? 'active' : ''
        }`}
      >
        <Link href="/releases">
          <a href="/releases">Releases</a>
        </Link>
      </div>
      <div
        className={`nav-links ${
          router.pathname === '/visuals' ? 'active' : ''
        }`}
      >
        Visuals
      </div>
      <div
        className={`nav-links ${
          router.pathname === '/webstore' ? 'active' : ''
        }`}
      >
        Webstore
      </div>
      <div
        className={`nav-links ${router.pathname === 'contact' ? 'active' : ''}`}
      >
        Contact
      </div>
    </div>
  );
};
