import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const NavMenu = () => {
  const router = useRouter();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const routes = ['/visuals/photos', '/visuals/videos', '/visuals/artwork'];

  const onNavigate = () => {
    setSubMenuOpen(false);
  };

  return (
    <React.Fragment>
      <div
        className={`text-2xl font-display hover:text-legbah-gold  ${
          router.pathname === '/news' ? 'text-legbah-gold' : 'text-gray-500'
        }`}
      >
        <Link href="/news">
          <button>News</button>
        </Link>
      </div>
      <div
        className={`text-2xl font-display hover:text-legbah-gold ${
          router.pathname === '/releases' ? 'text-legbah-gold' : 'text-gray-500'
        }`}
      >
        <Link href="/releases">
          <button>Releases</button>
        </Link>
      </div>
      <div
        className={`relative text-2xl font-display hover:text-legbah-gold ${
          routes.includes(router.pathname)
            ? 'text-legbah-gold'
            : 'text-gray-500'
        }`}
      >
        <button onClick={() => setSubMenuOpen(state => !state)}>Visuals</button>
        <div
          className={`${
            subMenuOpen
              ? 'absolute bg-black border flex flex-col items-end px-16 text-white w-full'
              : 'hidden'
          }`}
        >
          <Link href="/visuals/photos">
            <button
              className={`self-center ${
                router.pathname === '/visuals/photos'
                  ? 'text-legbah-gold'
                  : 'text-white'
              }`}
              onClick={onNavigate}
            >
              Photos
            </button>
          </Link>
          <Link href="/visuals/videos">
            <button
              className={`self-center ${
                router.pathname === '/visuals/videos'
                  ? 'text-legbah-gold'
                  : 'text-white'
              }`}
              onClick={onNavigate}
            >
              Videos
            </button>
          </Link>
          <Link href="/visuals/artwork">
            <button
              className={`self-center ${
                router.pathname === '/visuals/artwork'
                  ? 'text-legbah-gold'
                  : 'text-white'
              }`}
              onClick={onNavigate}
            >
              Artwork
            </button>
          </Link>
        </div>
      </div>
      <div
        className={`text-2xl font-display hover:text-legbah-gold ${
          router.pathname === '/store' ? 'text-legbah-gold' : 'text-gray-500'
        }`}
      >
        <Link href="/store">
          <button>Webstore</button>
        </Link>
      </div>
      <div
        className={`text-2xl font-display hover:text-legbah-gold ${
          router.pathname === '/contact' ? 'text-legbah-gold' : 'text-gray-500'
        }`}
      >
        <Link href="/contact">
          <button>Contact</button>
        </Link>
      </div>
    </React.Fragment>
  );
};
