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
          <button>News</button>
        </Link>
      </div>
      <div
        className={`nav-links ${
          router.pathname === '/releases' ? 'active' : ''
        }`}
      >
        <Link href="/releases">
          <button>Releases</button>
        </Link>
      </div>
      <div
        className={`nav-links ${
          router.pathname === '/visuals' ? 'active' : ''
        }`}
      >
        <Link href="/releases">
          <button>Visuals</button>
        </Link>
      </div>
      <div
        className={`nav-links ${
          router.pathname === '/webstore' ? 'active' : ''
        }`}
      >
        <Link href="/releases">
          <button>Webstore</button>
        </Link>
      </div>
      <div
        className={`nav-links ${
          router.pathname === '/contact' ? 'active' : ''
        }`}
      >
        <Link href="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};
